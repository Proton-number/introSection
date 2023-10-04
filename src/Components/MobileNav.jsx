import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Button,
  createTheme,
  ThemeProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import todo from "/src/images/icon-todo.svg";
import calendar from "/src/images/icon-calendar.svg";
import reminders from "/src/images/icon-reminders.svg";
import planning from "/src/images/icon-planning.svg";

function MobileNav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(120, 2%, 12%)",
      },
    },
  });

  return (
    <>
      <AppBar
        id="mobileNav"
        sx={{ backgroundColor: "white", color:'black' ,padding: "5px" }}
        elevation={0}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: "DM Serif Display,  serif",
              }}
            >
              <b>snap</b>
            </Typography>
          </Stack>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="250px" role="presentation">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>

          <Stack spacing={2} style={{ textAlign: "left", padding: "35px" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              elevation={0}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                }
                sx={{ textAlign: "left", marginLeft: "-17px" }}
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {" "}
                  <b>Features</b>{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Stack sx={{ padding: "20px" }}>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Box component="img" src={todo} />
                    <Typography variant="subtitle1">Todo List</Typography>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Box component="img" src={calendar} />
                    <Typography variant="subtitle1">Calendar</Typography>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Box component="img" src={reminders} />
                    <Typography variant="subtitle1">Reminders</Typography>
                  </Stack>
                  <Stack
                    spacing={1}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Box component="img" src={planning} />
                    <Typography variant="subtitle1">Planning</Typography>
                  </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              elevation={0}
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                sx={{ textAlign: "left", marginLeft: "-17px" }}
                expandIcon={
                  <ThemeProvider theme={theme}>
                    <ExpandMoreIcon color="primary" />
                  </ThemeProvider>
                }
              >
                <Typography variant="h6" sx={{ cursor: "pointer" }}>
                  {" "}
                  <b>Company</b>{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Stack sx={{ padding: "20px" }}>
                  <Typography variant="subtitle1">History</Typography>
                  <Typography variant="subtitle1">Our Team</Typography>
                  <Typography variant="subtitle1">Blog</Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>Careers</b>{" "}
            </Typography>

            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {" "}
              <b>About</b>{" "}
            </Typography>

            <Stack spacing={2}>
              <Typography variant="h6" sx={{ cursor: "pointer", textAlign:'center' }}>
                {" "}
                <b>Login</b>{" "}
              </Typography>
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    textTransform: "none",
                    borderRadius: "18px",
                    padding: "10px",
                  }}
                  disableElevation
                >
                  <b> Register</b>
                </Button>
              </ThemeProvider>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav;
