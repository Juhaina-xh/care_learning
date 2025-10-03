import React from "react";
import { Box, Avatar } from "@mui/material";

import HomeIcon from "../assets/sidebar/HomeIcon.png";
import BookMarkIcon from "../assets/sidebar/BookMark.png";
import CartIcon from "../assets/sidebar/CartIcon.png";
import AIIcon from "../assets/sidebar/AIIcon.png";
import HelpIcon from "../assets/sidebar/FAQ.png";
import ProfileIcon from "../assets/sidebar/Profile.png";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 84,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        pt: "10%",
      }}
    >
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            width: 72,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <img src={HomeIcon} alt="home" width={50} height={50} />
        </Box>

        <Box
          sx={{
            width: 72,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <img src={BookMarkIcon} alt="bookmark" width={50} height={50} />
        </Box>

        <Box
          sx={{
            width: 72,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <img src={CartIcon} alt="cart" width={50} height={50} />
        </Box>

        <Box
          sx={{
            width: 72,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <img src={AIIcon} alt="ai" width={50} height={50} />
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2, mt: 15 }}
      >
        <Box className="sidebar-btn">
          <img src={HelpIcon} alt="help" width={50} height={50} />
        </Box>
        <Avatar src={ProfileIcon} sx={{ width: 44, height: 44 }} />
      </Box>
    </Box>
  );
}
