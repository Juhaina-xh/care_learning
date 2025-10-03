import { useIsMobile } from "@/hooks/useIsMobile";
import { Box, Card, Typography, Button, IconButton } from "@mui/material";

const SectionCard = ({ title }) => {
  const items = [1, 2, 3];

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        background:
          "linear-gradient(135deg, rgba(249, 251, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        boxShadow:
          "11px 11px 48.6px 0px #0000000D, 0px 0px 14.5px 4px #FFFFFFA3 inset",
        flex: 1,
        minWidth: 0,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
          {title}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "999px",
            textTransform: "none",
            borderColor: "rgba(0,0,0,0.1)",
            color: "#374151",
            fontSize: 11,
            fontWeight: 300,
            px: 2,
          }}
        >
          All
        </Button>
      </Box>

      {items.map((_, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            p: 1,
            borderRadius: 3,
            background: "#fff",
            boxShadow: "0px 4px 5.9px 0px #f8f8f8 inset",
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src="images/spotLightSection/course-image.png"
              alt="course"
              style={{
                width: 50,
                height: 50,
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
                Professional Boundaries
              </Typography>
              <Typography sx={{ fontSize: 10, color: "text.secondary" }}>
                Course start date: 14 August, 2025
              </Typography>
            </Box>
          </Box>

          <IconButton>
            <img
              src="images/profileCompletion/leftArrow.png"
              alt="arrow"
              width={40}
              height={40}
            />
          </IconButton>
        </Box>
      ))}
    </Card>
  );
};

export default function CoursesSection() {
  const isMobile = useIsMobile();

  return (
    <Box
      display="flex"
      gap={3}
      mt={3}
      mb={3}
      sx={{
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "flex-start" : "space-between",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "32%",
        }}
      >
        <SectionCard title="Recently viewed" />
      </Box>

      <Box
        sx={{
          width: isMobile ? "100%" : "32%",
          mt: isMobile ? 2 : 0,
        }}
      >
        <SectionCard title="Top trending" />
      </Box>

      <Box
        sx={{
          width: isMobile ? "100%" : "32%",
          mt: isMobile ? 2 : 0,
        }}
      >
        <SectionCard title="News & updates" />
      </Box>
    </Box>
  );
}
