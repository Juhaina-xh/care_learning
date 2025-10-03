"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import NavigationRail from "@/components/NavigationRail";
import Dashboard from "./dashboard/Dashboard";
import { Box, Container } from "@mui/material";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <main>
      <div className="container mx-auto">
        <div className="flex relative h-full">
          {!isMobile && <NavigationRail />}
          <Box className="app-root ml-6">
            <Box display="flex" gap={4}>
              <Box flex={1}>
                <Container maxWidth={false} disableGutters>
                  <Dashboard />
                </Container>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </main>
  );
}
