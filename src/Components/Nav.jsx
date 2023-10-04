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
import todo from "/src/images/icon-todo.svg";
import calendar from "/src/images/icon-calendar.svg";
import reminders from "/src/images/icon-reminders.svg";
import planning from "/src/images/icon-planning.svg";

function Nav() {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <Box id="desktopNav">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={{ sm: 4, lg: 4 }}
        >
          <Typography variant="h3" component="h2">
            <b>snap</b>
          </Typography>
          <Stack direction="row" spacing={{ sm: 3, lg: 2 }}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Typography>
                <b>Features</b>
              </Typography>
              <IconButton onClick={(e) => setAnchorEl1(e.currentTarget)}>
                <ExpandMoreIcon />
              </IconButton>
              <Popover
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={() => setAnchorEl1(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Stack sx={{ padding: "20px" }}>
                  <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                    <Box component="img" src={todo} />
                    <Typography variant="subtitle1">Todo List</Typography>
                  </Stack>
                  <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                    <Box component="img" src={calendar} />
                    <Typography variant="subtitle1">Calendar</Typography>
                  </Stack>
                  <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                    <Box component="img" src={reminders} />
                    <Typography variant="subtitle1">Reminders</Typography>
                  </Stack>
                  <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                    <Box component="img" src={planning} />
                    <Typography variant="subtitle1">Planning</Typography>
                  </Stack>
                </Stack>
              </Popover>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Typography>
                <b>Company</b>
              </Typography>
              <IconButton onClick={(e) => setAnchorEl2(e.currentTarget)}>
                <ExpandMoreIcon />
              </IconButton>
              <Popover
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={() => setAnchorEl2(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Stack sx={{ padding: "20px" }}>
                  <Typography variant="subtitle1">History</Typography>
                  <Typography variant="subtitle1">Our Team</Typography>
                  <Typography variant="subtitle1">Blog</Typography>
                </Stack>
              </Popover>
            </Stack>
          </Stack>
          <Typography>
            <b>Careers</b>
          </Typography>
          <Typography>
            <b>About</b>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={{ sm: 2, lg: 4 }}
        >
          <Typography sx={{ cursor: "pointer" }}>
            {" "}
            <b>Login</b>
          </Typography>
          <ThemeProvider theme={theme}>
            <Button
              sx={{
                "&:hover": {
                  borderColor: "hsl(0, 5%, 42%)",
                },
                color: "black",
                borderColor: "black",
                textTransform: "none",
                borderRadius: "18px",
              }}
              variant="outlined"
              disableElevation
            >
              <b> Register</b>
            </Button>
          </ThemeProvider>
        </Stack>
      </Box>
    </Box>
  );
}

export default Nav;
