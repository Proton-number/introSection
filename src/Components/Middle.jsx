import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import databiz from "/src/images/client-databiz.svg";
import audiophile from "/src/images/client-audiophile.svg";
import meet from "/src/images/client-meet.svg";
import maker from "/src/images/client-maker.svg";
import hero from "/src/images/image-hero-desktop.png";
import { motion } from "framer-motion";

function Middle() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(120, 2%, 12%)",
      },
    },
  });

  const text = "Make remote work";
  const letters = text.split("");

  return (
    <Stack
      spacing={{ xs: 6 }}
      direction={{ xs: "column", sm: "row", lg: "row" }}
      sx={{
        alignItems: "center",
        padding: { xs: "70px", sm: "14px", lg: "30px" },
        textAlign: { xs: "center", sm: "initial", lg: "initial" },
        marginTop: { sm: "100px", lg: 0 },
      }}
    >
      <Stack spacing={{ xs: 4, lg: 4 }}>
        <Box>
          <Typography
            variant="h1"
            sx={{
              width: { sm: "80%", lg: "62%" },
              fontSize: { xs: "50px", sm: "68px", lg: "100px" },
            }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </Typography>
        </Box>

        <Typography sx={{ opacity: "70%", width: { sm: "78%", lg: "53%" } }}>
          Get your your team in sync, no matter your location, Streamline
          processes, create team rituals, and watch productivity soar.
        </Typography>

        <Box>
          <ThemeProvider theme={theme}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "hsl(0, 0%, 91%)",
                  color: "black",
                },
                borderColor: "white",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                p: "10px",
                width: {
                  xs: "40%",
                  lg: "20%",
                },
              }}
              variant="contained"
              disableElevation
            >
              <b> Learn more</b>
            </Button>
          </ThemeProvider>
        </Box>
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 2, lg: 4 }}
          sx={{ alignItems: "center" }}
        >
          <Box component="img" src={databiz} sx={{ width: { xs: "70px" } }} />
          <Box
            component="img"
            src={audiophile}
            sx={{ width: { xs: "50px" } }}
          />
          <Box component="img" src={meet} sx={{ width: { xs: "70px" } }} />
          <Box component="img" src={maker} sx={{ width: { xs: "70px" } }} />
        </Stack>
      </Stack>

      <Box>
        <Box
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{duration:1.2, delay:1,type:'spring'}}
          component={motion.img}
          src={hero}
          sx={{
            width: {
              xs: "350px",
              sm: "250px",
              lg: "490px",
            },
            height: {
              lg: "620px",
            },
          }}
        />
      </Box>
    </Stack>
  );
}

export default Middle;
