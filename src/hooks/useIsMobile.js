"use client";
import { useMediaQuery } from "@mui/material";

export function useIsMobile() {
  const isMobile = useMediaQuery("(max-width:960px)");
  return isMobile;
}
