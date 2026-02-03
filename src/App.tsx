import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Chemicals from "./pages/Chemicals";
import Procedure from "./pages/Procedure";
import Process from "./pages/Process";
import Media from "./pages/Media";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface User {
  email: string;
}

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('chemlab_user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    checkAuth();
    
    // Listen for storage changes (logout from other tabs)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-16 h-16 rounded-2xl bg-chemistry-gradient animate-pulse" />
      </div>
    );
  }

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
                  <Home user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/chemicals" 
              element={
                <ProtectedRoute user={user}>
                  <Chemicals user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/procedure" 
              element={
                <ProtectedRoute user={user}>
                  <Procedure user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/process" 
              element={
                <ProtectedRoute user={user}>
                  <Process user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/media" 
              element={
                <ProtectedRoute user={user}>
                  <Media user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/faq" 
              element={
                <ProtectedRoute user={user}>
                  <FAQ user={user} />
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
