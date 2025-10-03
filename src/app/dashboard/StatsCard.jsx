import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function StatsCard({ title, bigNumber, subtitle, yellow }) {
  return (
    <Paper className="glass" sx={{ p: 3, background: yellow ? "linear-gradient(180deg,#fffbe6,#fbffed)" : undefined }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{title}</Typography>
        <Box className="pill">
          <Typography variant="body2">All</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2, p: 2, borderRadius: 2, background: "rgba(255,255,255,0.85)" }}>
        <Typography sx={{ fontSize: 36, fontWeight: 800 }}>{bigNumber}</Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
      </Box>

      <Box display="flex" gap={3} sx={{ mt: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>20</Typography>
          <Typography variant="caption" color="text.secondary">Application</Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>30</Typography>
          <Typography variant="caption" color="text.secondary">in review</Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>43</Typography>
          <Typography variant="caption" color="text.secondary">Interviews</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
