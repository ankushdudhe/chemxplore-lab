import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Chemicals from "./pages/Chemicals";
import Procedure from "./pages/Procedure";
import Process from "./pages/Process";
import Media from "./pages/Media";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ 
  children, 
  user 
}: { 
  children: React.ReactNode; 
  user: User | null;
}) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-16 h-16 rounded-2xl bg-chemistry-gradient animate-pulse" />
      </div>
    );
  }

  const userInfo = user ? { email: user.email || "" } : null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/auth" 
              element={user ? <Navigate to="/" replace /> : <Auth />} 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute user={user}>
                  <Home user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/chemicals" 
              element={
                <ProtectedRoute user={user}>
                  <Chemicals user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/procedure" 
              element={
                <ProtectedRoute user={user}>
                  <Procedure user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/process" 
              element={
                <ProtectedRoute user={user}>
                  <Process user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/media" 
              element={
                <ProtectedRoute user={user}>
                  <Media user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/faq" 
              element={
                <ProtectedRoute user={user}>
                  <FAQ user={userInfo} />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
