"use client";

import React from "react";
import { Box, Avatar, Typography, Chip, IconButton } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ProfileCompletion() {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        p: isMobile ? 0 : 4,
        pb: 0,
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!isMobile && (
        <Box
          component="img"
          src="/images/profileCompletion/background.png"
          alt="blob1"
          sx={{
            position: "absolute",
            right: -40,
            top: -47,
            width: 370,
            opacity: 0.9,
          }}
        />
      )}
      {/* <Box
        component="img"
        src={Blob2}
        alt="blob2"
        sx={{
          position: "absolute",
          right: 60,
          bottom: -30,
          width: 220,
          opacity: 0.7,
        }}
      /> */}

      <Box
        display="flex"
        gap={2}
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Avatar
          src="/images/profileCompletion/Squircle Mask.png"
          sx={{ width: 64, height: 64, borderRadius: "0" }}
        />
        <Box>
          <Typography
            sx={{
              fontFamily: "Sofia Pro, sans-serif",
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Complete your profile!
          </Typography>
          <Typography
            sx={{ fontWeight: 100, fontSize: 13, color: "rgba(95, 95, 95, 1)" }}
          >
            Update profile and get new opportunities
          </Typography>
        </Box>
      </Box>

      {!isMobile && (
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "flex-start",
            position: "relative",
            ml: 10,
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              background: "rgba(159, 175, 199, 1)",
              color: "#fff",
              px: 2,
              py: 0.5,
              borderRadius: "52px",
              fontSize: 12,
              fontWeight: 200,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                // borderTop: "8px solid #7489c4",
              },
            }}
          >
            30% Completed
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                bottom: -13,
                left: "15%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "6px",
                backgroundColor: "#9FAFC7",
                zIndex: 2,
              }}
            />
          )}
        </Box>
      )}

      <Box
        sx={{
          mt: isMobile ? 3 : 1,
          display: "flex",
          borderRadius: "38px",
          justifyContent: "space-between",
          "@media (min-width: 960px)": {
            borderRadius: 99,
          },
          background:
            "linear-gradient(90deg, rgba(176, 188, 207, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)", // Safari
          boxShadow: "0px 0px 15.2px 1px rgba(255, 255, 255, 1) inset",
          px: 3,
          py: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "10%",
              width: "20%",
              height: "0px",
              border: "1px solid transparent",
              borderImageSource:
                "linear-gradient(90deg, rgba(32, 80, 228, 0) 0%, #2050E4 48.08%, rgba(32, 80, 228, 0) 100%)",
              borderImageSlice: 1,
              zIndex: 1,
            }}
          />
        )}

        {/* For Web */}
        {!isMobile && (
          <Box
            display="flex"
            justifyContent="space-between"
            flex={1}
            position="relative"
            zIndex={2}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              sx={{ minWidth: 140 }}
            >
              <Box
                component="img"
                src="/images/profileCompletion/verify.png"
                alt="nurse"
                sx={{ width: 32, height: 32 }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(93, 99, 113, 1)",
                    fontSize: 12,
                  }}
                >
                  Nurse
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(93, 99, 113, 1)",
                    fontWeight: 300,
                    fontSize: 8,
                  }}
                >
                  General info
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "1px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.7)",
                mx: 2,
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              sx={{ minWidth: 140, opacity: 0.8 }}
            >
              <Box
                component="img"
                src="/images/profileCompletion/attachsquare.png"
                alt="documents"
                sx={{ width: 28, height: 28 }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(93, 99, 113, 1)",
                    fontSize: 12,
                  }}
                >
                  Documents
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(93, 99, 113, 1)",
                    fontWeight: 300,
                    fontSize: 8,
                  }}
                >
                  Upload
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "1px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.7)",
                mx: 2,
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              sx={{ minWidth: 140, opacity: 0.8 }}
            >
              <Box
                component="img"
                src="/images/profileCompletion/enhance-user-ai.png"
                alt="cv"
                sx={{ width: 28, height: 28 }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(93, 99, 113, 1)",
                    fontSize: 12,
                  }}
                >
                  CV{" "}
                  <Box
                    component="span"
                    sx={{
                      // ml: 1,
                      fontSize: 12,
                      padding: "2px 4px",
                      color: "white",
                      borderRadius: "10px",
                      marginTop: "-3px",

                      fontWeight: 700,
                      background: "#FF0048",
                    }}
                  >
                    40%
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(93, 99, 113, 1)",
                    fontWeight: 300,
                    fontSize: 8,
                  }}
                >
                  Job Applications
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "1px",
                height: "40px",
                backgroundColor: "rgba(255,255,255,0.7)",
                mx: 2,
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              sx={{ minWidth: 140, opacity: 0.8 }}
            >
              <Box
                component="img"
                src="/images/profileCompletion/enhance-user-ai.png"
                alt="jobs"
                sx={{ width: 28, height: 28 }}
              />
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(93, 99, 113, 1)",
                    fontSize: 12,
                  }}
                >
                  Jobs{" "}
                  <Box
                    component="span"
                    sx={{
                      // color: "#ef4444",
                      fontWeight: 700,
                      fontSize: 12,
                      padding: "2px 4px",
                      color: "white",
                      borderRadius: "10px",
                      marginTop: "-3px",

                      background: "#FF0048",
                    }}
                  >
                    2
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(93, 99, 113, 1)",
                    fontWeight: 300,
                    fontSize: 8,
                  }}
                >
                  Applications
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        {/* For Mob */}
        {isMobile && (
          <Box
            sx={{
              // background: "linear-gradient(180deg, #F9F9F1 0%, #FCF9D9 100%)",
              // borderRadius: "20px",
              p: 2,
              width: "100%",
              // boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 12,
                right: 12,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src="/images/profileCompletion/leftArrow.png"
                alt="open"
                width={41}
                height={41}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap={3} mt={2}>
              <Box display="flex" alignItems="flex-start" gap={1.5}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/profileCompletion/verify.png"
                    alt="nurse"
                    width={32}
                    height={32}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                    Nurse
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    General info
                  </Typography>
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="flex-start"
                gap={1.5}
                position="relative"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -24,
                    left: 15,
                    width: "1px",
                    height: 24,
                    borderLeft: "1.5px dashed #ccc",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,

                    // backgroundColor: "#F1F1F1",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/profileCompletion/DocumentMob.png"
                    alt="documents"
                    width={32}
                    height={32}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                    Documents
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Documents
                  </Typography>
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="flex-start"
                gap={1.5}
                position="relative"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -24,
                    left: 15,
                    width: "1px",
                    height: 24,
                    borderLeft: "1.5px dashed #ccc",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/profileCompletion/CVJobMob.png"
                    alt="cv"
                    width={32}
                    height={32}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                    CV{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "#FF0048",
                        color: "#fff",
                        fontSize: "11px",
                        borderRadius: "12px",
                        px: 0.8,
                        py: "1px",
                        ml: 0.5,
                        fontWeight: 700,
                      }}
                    >
                      40%
                    </Box>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Job Applications
                  </Typography>
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="flex-start"
                gap={1.5}
                position="relative"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -24,
                    left: 15,
                    width: "1px",
                    height: 24,
                    borderLeft: "1.5px dashed #ccc",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/profileCompletion/CVJobMob.png"
                    alt="jobs"
                    width={32}
                    height={32}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                    Jobs{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "#FF0048",
                        color: "#fff",
                        fontSize: "11px",
                        borderRadius: "12px",
                        px: 0.8,
                        py: "1px",
                        ml: 0.5,
                        fontWeight: 700,
                      }}
                    >
                      2
                    </Box>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Job Applications
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,
                width: "100%",
                height: 36,
                boxShadow: "0 0 15.2px 1px #FFF inset",
                background: "rgba(93, 99, 113, 0.12)",
                borderRadius: "50px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${30}%`,
                  backgroundColor: "#2050E4",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  pl: 2,
                  transition: "width 0.4s ease",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  Completed
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: `${26.3}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#fff",
                  color: "#2050E4",
                  fontSize: 13,
                  fontWeight: 400,
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
                }}
              >
                30%
              </Box>
            </Box>
          </Box>
        )}
        <IconButton>
          {!isMobile && (
            <Box>
              <Image
                src="/images/profileCompletion/leftArrow.png"
                alt="arrow"
                width={40}
                height={40}
              />
            </Box>
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
