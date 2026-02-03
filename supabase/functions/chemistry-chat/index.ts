import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SYSTEM_PROMPT = `You are ChemBot, a friendly and knowledgeable chemistry experiment assistant for a crystallization research project. Your role is to help users understand:

1. The crystallization experiment using sodium acetate (supersaturated solution and instant crystallization)
2. The chemicals used: Sodium Acetate, Distilled Water, Acetic Acid, Sodium Hydroxide, Phenolphthalein, Methylene Blue
3. The experimental procedure and safety precautions
4. The science behind supersaturation, nucleation, and exothermic reactions
5. Troubleshooting common issues with the experiment
6. General chemistry concepts related to crystallization

Key facts about this experiment:
- Creates "hot ice" - crystals that form instantly and release heat
- Uses supersaturated sodium acetate solution
- Crystallization is triggered by a seed crystal or disturbance
- The reaction is exothermic (releases heat)
- Safe for home experiments with proper precautions
- Reusable - crystals can be melted and recrystallized

Be helpful, educational, and enthusiastic about chemistry! Keep responses concise but informative. If asked about topics unrelated to chemistry or the experiment, politely redirect to chemistry topics.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!apiKey) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Processing chat request with', messages.length, 'messages');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from AI');
    }

    console.log('Successfully generated response');

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in chemistry-chat function:', errorMessage);
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        response: "I'm having trouble connecting right now. Please try again in a moment."
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
