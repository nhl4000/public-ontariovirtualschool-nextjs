import React, { useState } from "react";
import Typed from "react-typed";
// import { Global, css } from "frontity";
import styles from "./Hero.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RocketIllustration from "../../svg/illustrations/Rocket";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Hero = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [open, setOpen] = React.useState(true);
  const [play, setCheck] = React.useState(true);
  const video =
    props.heroPost?.herovid + "?title=0&byline=0&portrait=0&color=ffffff&autoplay=1&dnt=0&loop=1&autopause=0";
  const anim = props.heroPost?.animated.split(",");

  return (
    <Grid
      container
      spacing={4}
      // minHeight="85vh"
      marginTop={4}>
      <Grid className={styles.heroWrapper} item container xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="#00000"
              style={{ fontWeight: 700 }}
              dangerouslySetInnerHTML={{
                __html: props.heroPost.title.rendered,
              }}
            />
            <br />
            <Typography color="#AA0304" component={"span"} variant="h3">
              <Typed strings={anim} typeSpeed={70} loop={true} />
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              // component="p"
              color="#333333"
              marginBottom={3}
              style={{ fontWeight: 400 }}
              dangerouslySetInnerHTML={{
                __html: props.heroPost.content.rendered,
              }}
            />
            <Box>
              <TextField
                id="standard-search"
                label="Seach for courses"
                type="search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position={"start"}>
                      <IconButton className={styles.NavSearch} style={{ color: "#FFF", backgroundColor: "#aa0303" }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button className={styles.HeroBtn} fullWidth={!isMd}>
                REGISTER NOW
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretched", sm: "flex-start" }}></Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box height={"100%"} width={"100%"} display={"flex"}>
          <Box height={"100%"} width={"100%"} maxHeight={600} className={styles.HeroImg}>
            <Card className={open ? styles.open : null}>
              <CardMedia
                component="iframe"
                alt="Ontario Virtual School"
                height="100%"
                width="100%"
                frameBorder="0"
                image={play ? null : video}
                title="Ontario Virtual School"
              />
            </Card>
            <PlayCircleFilledOutlinedIcon
              fontSize="large"
              className={styles.HeroPlay}
              onClick={() => {
                setOpen(!open);
                setCheck(!play);
              }}
            />
            <RocketIllustration width={"100%"} height={"100%"} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
