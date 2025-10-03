import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        p: 4,
        borderRadius: 4,
        background: "linear-gradient(180deg, #F9FBFF 0%, #FFFFFF 100%)",
        boxShadow:
          "11px 11px 48.6px 0px #0000000D, 0px 0px 38.9px 11px #FFFFFFB8 inset",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={6}
      >
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "28px", mb: 10 }}>
            Care Learning
          </Typography>
          {[
            "About",
            "What We Offer",
            "Leadership",
            "Careers",
            "Catalog",
            "Coursera Plus",
            "Professional Certificates",
          ].map((item, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 14,
                mb: 1,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 2, mt: 8 }}>
            Community
          </Typography>
          {[
            "MasterTrack® Certificates",
            "Degrees",
            "For Enterprise",
            "For Government",
            "For Campus",
            "Become a Partner",
            "Social Impact",
          ].map((item, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 14,
                mb: 1,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 2, mt: 8 }}>
            More
          </Typography>
          {[
            "MasterTrack",
            "Degrees",
            "For Enterprise",
            "For Government",
            "For Campus",
            "Become a Partner",
            "Social Impact",
          ].map((item, idx) => (
            <Typography
              key={idx}
              sx={{
                fontSize: 14,
                mb: 1,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 2, mt: 10 }}>
            Download
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "999px",
                p: 1.2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "0px 4px 10px rgba(0,0,0,0.06), inset 0px 2px 6px rgba(255,255,255,0.8)",
                cursor: "pointer",
                width: 130,
              }}
            >
              <img
                src="/images/Footer/iconAppstore.png"
                alt="App Store"
                style={{ width: 100, height: "auto" }}
              />
            </Box>

            <Box
              sx={{
                background: "#fff",
                borderRadius: "999px",
                p: 1.2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "0px 4px 10px rgba(0,0,0,0.06), inset 0px 2px 6px rgba(255,255,255,0.8)",
                cursor: "pointer",
                width: 130,
              }}
            >
              <img
                src="/images/Footer/iconPlaystore.png"
                alt="Play Store"
                style={{ width: 100, height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={6}
        flexWrap="wrap"
      >
        <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
          Copyright © 2025 Care Learning. All Rights Reserved.
        </Typography>
        <Box>
          <img
            src="/images/Footer/socialMediaIcons.png"
            alt="social icons"
            style={{ height: 15, objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
