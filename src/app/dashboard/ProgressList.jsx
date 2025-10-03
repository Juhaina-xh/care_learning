import React from "react";
import { Box, Button, Typography, LinearProgress } from "@mui/material";

const ITEMS = [
  {
    id: 1,
    title: "Food Safety & Hygiene",
    pct: 30,
    date: "Course start date: 14 August,2025",
  },
  {
    id: 2,
    title: "Professional Boundaries",
    pct: 70,
    date: "Course start date: 14 August,2025",
  },
  {
    id: 3,
    title: "Fire Safety",
    pct: 50,
    date: "Course start date: 14 August,2025",
  },
];

export default function ProgressList() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {ITEMS.map((it) => (
        <Box
          key={it.id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="glass"
          sx={{ p: 1.5 }}
        >
          <Box display="flex" gap={2} alignItems="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: "inset 0 0 0 6px rgba(47,85,255,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>{it.pct}%</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 700 }}>{it.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {it.date}
              </Typography>

              <Box sx={{ width: 220, mt: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={it.pct}
                  sx={{ height: 8, borderRadius: 6 }}
                />
              </Box>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 999 }}
          >
            Resume
          </Button>
        </Box>
      ))}
    </Box>
  );
}
