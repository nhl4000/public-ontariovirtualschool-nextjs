import React from "react";
import Typed from "react-typed";
import styles from "./Hero.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RocketIllustration from "../../svg/illustrations/Rocket";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "../common/Container";
import Search from "../Search";

const Hero = (props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [open, setOpen] = React.useState(true);
  const [play, setCheck] = React.useState(true);
  const video =
    props.heroPost?.herovid + "?title=0&byline=0&portrait=0&color=ffffff&autoplay=0&dnt=0&loop=1&autopause=0&mute";
  const anim = props.heroPost?.animated.split(",");

  return (
    <Container>
      <Box padding={0}>
        <Grid
          container
          spacing={4}
          // minHeight="85vh"
          marginTop={2}>
          <Grid className={styles.heroWrapper} item container xs={12} md={6}>
            <Box data-aos={isMd ? "fade-right" : "fade-up"}>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  color="#00000"
                  style={{ fontWeight: 700, color: "#3A3A3A" }}
                  dangerouslySetInnerHTML={{
                    __html: props.heroPost.title.rendered,
                  }}
                />
                <br />
                <Typography color="#AA0304" component={"span"} variant="h3">
                  <Typed strings={anim} typeSpeed={70} loop={true} />
                </Typography>
              </Box>
              <Box className="subtitle" marginBottom={3}>
                <Typography
                  variant="h6"
                  // component="p"
                  color="#3a3a3a"
                  marginBottom={3}
                  style={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{
                    __html: props.heroPost.content.rendered,
                  }}
                />
                <Search />
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
                    style={{ backgroundColor: "#f7f9fc" }}
                    // autoPlay
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
                <RocketIllustration width={"100%"} height={"100%"} className={styles.posterImg} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
