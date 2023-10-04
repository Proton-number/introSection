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

function Middle() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(120, 2%, 12%)",
      },
    },
  });

  return (
    <Stack
      direction={{xs:'column',sm:'row',lg:'row'}}
      sx={{ alignItems: "center", padding: { lg: "30px" } }}
    >
      <Stack spacing={{ lg: 4 }}>
        <Typography sx={{ width: { lg: "63%" } }} variant="h1">
          <b>Make remote work</b>
        </Typography>

        <Typography sx={{ opacity: "80%", width: { lg: "53%" } }}>
          Get your your team in sync, no matter your location, Streamline
          processes, create team rituals, and watch productivity soar.
        </Typography>

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
                lg: "20%",
              },
            }}
            variant="contained"
            disableElevation
          >
            <b> Learn more</b>
          </Button>
        </ThemeProvider>
        <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
          <Box component="img" src={databiz} />
          <Box component="img" src={audiophile} />
          <Box component="img" src={meet} />
          <Box component="img" src={maker} />
        </Stack>
      </Stack>

      <Box>
        <Box
          component="img"
          src={hero}
          sx={{
            width: {
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
