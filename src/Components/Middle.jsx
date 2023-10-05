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
      spacing={{xs:6}}
      direction={{xs:'column',sm:'row',lg:'row'}}
      sx={{ alignItems: "center", padding: { xs:'60px',sm:'14px', lg: "30px" }, textAlign:{xs:'center', sm:'initial', lg:'initial'}, marginTop:{sm:'100px', lg:0} }}
    >
      <Stack spacing={{ xs:4, lg: 4 }}>
        <Typography sx={{ width: { sm:'90%',lg: "53%" },  fontSize:{xs:'50px', sm:'68px', lg:'80px'} }} variant="h1">
          <b>Make remote work</b>
        </Typography>

        <Typography sx={{ opacity: "60%", width: { sm:'78%', lg: "53%" } }}>
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
                xs:'40%',
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
        <Stack direction="row" spacing={{sm:2,lg:4}} sx={{ alignItems: "center" }}>
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
              xs: '400px',
              sm:'250px',
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
