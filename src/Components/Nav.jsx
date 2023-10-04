import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Popover,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);


  return (
    <Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      veritatis explicabo similique fuga molestiae nihil ipsum laboriosam
      doloribus ducimus illo non asperiores nulla quo sapiente molestias, illum
      quisquam. Cupiditate illum aut, explicabo blanditiis quis sequi veniam
      recusandae maxime saepe est.
    </Box>
  );
}

export default Nav;
