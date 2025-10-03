"use client";

import { Box } from "@mui/material";
import Header from "@/components/Header";
import HeaderMobile from "@/components/Header/HeaderMobile";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HeaderWrapper() {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        "@media (max-width: 960px)": {
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          alignItems: "stretch",
        },
      }}
    >
      {isMobile ? <HeaderMobile /> : <Header />}
    </Box>
  );
}
