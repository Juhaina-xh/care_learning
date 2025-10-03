"use client";

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProfileCompletion from "./ProfileCompletion";
import DashboardProgress from "./Progress";
import SpotlightSection from "./SpotlightSection";
import CoursesSection from "./CoursesSection";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Dashboard() {
  const isMobile = useIsMobile();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent="space-between"
            sx={{
              width: "100%",
              gap: isMobile ? 4 : 0,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Box
              sx={{
                flex: isMobile ? "1 1 100%" : "0 0 32%",
                px: isMobile ? 2 : 3,
                overflow: "auto",
              }}
            >
              <Box mb={1}>
                <Typography
                  component="div"
                  sx={{
                    display: isMobile ? "block" : "none",
                    fontFamily: "Sofia Pro, sans-serif",
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    ml: "-12px",
                    mb: 2,
                  }}
                >
                  Care Learning
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Sofia Pro, sans-serif",
                    fontSize: isMobile ? "22px" : "30px",
                    fontWeight: 300,
                    lineHeight: 1.2,
                    color: "#000",
                  }}
                >
                  Welcome{" "}
                  <Box
                    component="span"
                    sx={{ color: "#2050E4", fontWeight: 400 }}
                  >
                    Ken
                  </Box>
                  , here's
                </Typography>

                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Sofia Pro, sans-serif",
                    fontSize: isMobile ? "26px" : "28px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: "#000",
                    mt: 0.5,
                  }}
                >
                  how things stand today
                </Typography>
              </Box>

              <Typography
                color="text.secondary"
                sx={{
                  fontFamily: "Sofia Pro, sans-serif",
                  fontSize: isMobile ? 11 : 12,
                  fontWeight: 300,
                  mb: 3,
                  color: "rgba(95, 95, 95, 1)",
                }}
              >
                Explore courses from experienced, real-world experts.
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2050E4",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "999px",
                    padding: isMobile ? "12px 20px" : "8px 20px",
                    fontFamily: "Sofia Pro, sans-serif",
                    fontWeight: 200,
                    fontSize: isMobile ? 12 : 13,
                    "&:hover": {
                      backgroundColor: "#254edb",
                      boxShadow: "0 10px 30px rgba(37,78,219,0.14)",
                    },
                  }}
                >
                  Resume course
                </Button>
                <Box
                  component="img"
                  src="/images/sidebar/search.png"
                  alt="search"
                  width={40}
                  height={40}
                  sx={{
                    cursor: "pointer",
                    "@media (max-width: 960px)": {
                      display: "none",
                    },
                  }}
                />
                {isMobile && (
                  <Box
                    component="img"
                    src="/images/profileCompletion/background.png"
                    alt="blob1"
                    sx={{
                      position: "absolute",
                      right: -40,
                      top: 97,
                      width: 170,
                      opacity: 0.9,
                    }}
                  />
                )}
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                "@media (min-width: 960px)": {
                  display: "none",
                },
              }}
            >
              <Box
                width="90vw"
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
                  minWidth: 320,
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
                    width: 32,
                    height: 32,
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
                    py: 0.1,
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
            </Box>
            <Box
              sx={{
                flex: isMobile ? "1 1 100%" : "0 0 60%",
                px: isMobile ? 0 : 0,

                width: "100%",
              }}
            >
              <ProfileCompletion />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={3} mt={3}>
        {" "}
        <DashboardProgress />
      </Grid>
      <SpotlightSection />
      <CoursesSection />
    </Box>
  );
}
