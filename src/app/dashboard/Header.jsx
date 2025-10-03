import React from "react";
import { Box, IconButton, Typography } from "@mui/material";

export default function Header() {
  const actionIcons = [
    "/images/searchbar/searchIcon.png",
    "/images/searchbar/bellIcon.png",
    "/images/searchbar/settingsIcon.png",
  ];

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontFamily: "Sofia Pro, sans-serif",
          fontSize: "28px",
          lineHeight: "140%",
          letterSpacing: "-0.03em",
        }}
      >
        Care Learning
      </Typography>

      <Box display="flex" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 999,
            background:
              "linear-gradient(90deg, rgba(111, 147, 203, 0.333) 0%, rgba(245, 224, 101, 0.45) 76.44%)",
            px: 1,
            py: 1,
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            minWidth: 400,
            overflow: "visible",
          }}
        >
          <Box
            component="img"
            src="/images/searchbar/headersearchbar.png"
            alt="avatar"
            sx={{
              position: "absolute",
              left: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "2px solid #fff",
              zIndex: 3,
            }}
          />

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#2050E4",
              flexGrow: 1,
              textAlign: "left",
              background:
                "linear-gradient(90deg, rgba(32, 80, 228, 0.621) 0%, rgba(255, 255, 255, 0.69) 79.53%)",
              borderTopRightRadius: "60.5px",
              borderBottomRightRadius: "60.5px",
              px: 2,
              py: 0.4,
              pl: 7,
              zIndex: 2,
              ml: 3,
              textAlignLast: "right",
            }}
          >
            Level 4
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              pr: 1,
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, rgba(221, 211, 145, 0) 0%, #E0D27A 100%)",
              fontWeight: 600,
              color: "#444",
              position: "relative",
              zIndex: 2,
              textAlignLast: "center",
              minWidth: 100,
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Sofia Pro, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "119%",
                letterSpacing: "-0.02em",
                textAlign: "center",
              }}
            >
              Pro
            </Typography>

            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#E5DCA0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/searchbar/militarymedalIcon.png"
                alt="pro badge"
                width={16}
                height={16}
              />
            </Box>
          </Box>

          <Box
            component="img"
            src="/images/searchbar/verticalIcon.png"
            alt="vertical marker"
            sx={{
              position: "absolute",
              top: "-12px",
              left: "70%",
              height: "148%",
              zIndex: 4,
            }}
          />
        </Box>

        {actionIcons.map((icon, i) => (
          <IconButton key={i}>
            <img src={icon} alt={`icon-${i}`} width={40} height={40} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
