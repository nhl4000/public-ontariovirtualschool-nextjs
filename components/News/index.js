import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../common/Container";
import { BreakfastDining } from "@mui/icons-material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
  },
};

export default function News(props) {
  const posts = Object.values(props.news);
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "medium",
            }}
            gutterBottom
            color={"secondary"}
            align={"center"}>
            News
          </Typography>
          <Box component={Typography} fontWeight={700} variant={"h3"} align={"center"} gutterBottom>
            Read our latest news
          </Box>
          <Typography variant={"h6"} component={"p"} color={"textSecondary"} align={"center"}></Typography>
        </Box>

        <Carousel className="NewsSlider" responsive={responsive}>
          {posts.map(function (post, index) {
            return (
              <Grid item margin={3} style={{ height: "350px" }} key={index}>
                <Box
                  component={"a"}
                  href={"#0"}
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
                  <Box component={Card} width={"100%"} height={"100%"} data-aos={"fade-up"} borderRadius={3}>
                    <CardMedia
                      image={post.image}
                      title={post.title.rendered}
                      style={{
                        height: 140,
                      }}
                    />
                    <Box component={CardContent}>
                      <Typography
                        variant={"h6"}
                        gutterBottom
                        fontWeight={500}
                        align={"left"}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <Typography
                        align={"left"}
                        variant={"body2"}
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </Box>
                    <Box component={CardActions} justifyContent={"flex-end"}>
                      <Button
                        color="secondary"
                        variant="contained"
                        size="small"
                        style={{ position: "absolute", bottom: "10px" }}>
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Carousel>
        <Grid item container xs={12} justifyContent={"center"} style={{ marginTop: 10 }}>
          <Button color={"secondary"} variant={"contained"} size={"large"}>
            READ ALL
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
