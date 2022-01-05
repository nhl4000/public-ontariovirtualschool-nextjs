import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-multi-carousel";
import Button from "@material-ui/core/Button";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@material-ui/core";

// This is included to replace the global css file for this component within /pages/_app.js
import styles from "./Schools.module.css";
// To use: Set components/elements className

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function Schools(props) {
  const [schools, setSchools] = useState(props.schools);
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "normal",
            }}
            gutterBottom
            color={"secondary"}
            align={"center"}>
            Our Grads Are Going Places
          </Typography>
        </Box>
        <Carousel
          className={styles.DeskSlider}
          responsive={responsive}
          arrows={0}
          autoPlay
          autoPlaySpeed={2000}
          draggable
          customTransition="all .4s linear"
          infinite>
          {schools.map((school, i) => (
            <Grid item margin={3} key={i}>
              <Box
                component={"a"}
                href={school.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                target={"blank"}
                display={"block"}
                width={"100%"}
                height={"100%"}
                style={{
                  textDecoration: "none",
                  transition: "all .2s ease-in-out",
                  "&:hover": {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}>
                <Box
                  component={Card}
                  width={"100%"}
                  height={"100%"}
                  data-aos={"fade-up"}
                  borderRadius={0}
                  boxShadow={"none"}>
                  <CardMedia
                    className={styles.schoollImg}
                    image={school.yoast_head_json.og_image[0].url}
                    style={{
                      height: 100,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Carousel>
        <Box className={styles.MobSlider}>
          <Carousel
            responsive={responsive}
            arrows={0}
            draggable
            autoPlay
            autoPlaySpeed={2000}
            customTransition="all .4s linear"
            infinite>
            {schools.map((school, i) => (
              <Grid item margin={3} key={i}>
                <Box
                  component={"a"}
                  href={school.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                  target={"blank"}
                  display={"block"}
                  width={"100%"}
                  height={"100%"}
                  style={{
                    textDecoration: "none",
                    transition: "all .2s ease-in-out",
                    "&:hover": {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}>
                  <Box
                    component={Card}
                    width={"100%"}
                    height={"100%"}
                    data-aos={"fade-up"}
                    borderRadius={0}
                    boxShadow={"none"}>
                    <CardMedia
                      className={styles.schoollImg}
                      image={school.yoast_head_json.og_image[0].url}
                      style={{
                        height: 75,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Carousel>
        </Box>
        <Box xs={12} style={{ textAlign: "center" }} marginTop={2}>
          <Typography
            color="textSecondary"
            className={styles.leftText}
            style={{ fontSize: "1.5em", fontWeight: "700", marginBottom: "20px" }}>
            Do you have an academic or pathway question?
            <br />
            Our Guidance Counsellors are here to help you!
          </Typography>
          <Button className="redBtn" component={"a"} href={"#"} target={"_blank"} variant="contained" color="primary" size="large">
            SCHEDULE A COUNSELLING APPOINTMENT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
