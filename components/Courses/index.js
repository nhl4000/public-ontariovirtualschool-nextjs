import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "../common/Container";

const Courses = (props) => {
  const [learns, setLearns] = useState(props.learning);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        {learns.map((learn, index) => (
          <Grid key={index}>
            <Box marginBottom={4}>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
                }}
                gutterBottom
                color={"secondary"}
                align={"center"}>
                Courses
              </Typography>
              <Typography
                variant="h3"
                align={"center"}
                data-aos={"fade-up"}
                gutterBottom
                style={{
                  fontWeight: 700,
                }}
                dangerouslySetInnerHTML={{ __html: learn.title.rendered }}
              />
              <Typography
                variant="h6"
                align={"center"}
                color={"textSecondary"}
                data-aos={"fade-up"}
                dangerouslySetInnerHTML={{ __html: learn.content.rendered }}
              />
            </Box>
            <Box display={"flex"} alignItems={"baseline"} justifyContent={"center"}>
              <Box
                component={Card}
                maxWidth={700}
                boxShadow={3}
                border={`1px solid ${theme.palette.divider}`}
                borderRadius={3}
                data-aos={isMd ? "fade-right" : "fade-up"}>
                <Box component={CardContent}>
                  <Box border={`1px solid ${theme.palette.divider}`}>
                    <Card>
                      <CardMedia
                        component="iframe"
                        alt="Ontatio Virtual Schoool"
                        height="100%"
                        width="100%"
                        image={learn.home_learning_video}
                        title="Ontatio Virtual Schoool"
                        // autoPlay
                      />
                    </Card>
                  </Box>
                </Box>
              </Box>
              <Box
                component={Card}
                maxWidth={250}
                boxShadow={3}
                border={`1px solid ${theme.palette.divider}`}
                borderRadius={5}
                marginLeft={-12}
                zIndex={1}
                data-aos={isMd ? "fade-left" : "fade-up"}>
                <Box component={CardContent}>
                  <Box border={`1px solid ${theme.palette.divider}`}>
                    <Card>
                      <CardMedia
                        component="iframe"
                        alt="Ontatio Virtual Schoool"
                        width="100%"
                        image={learn.home_learning_video}
                        title="Ontario Virtual Schoool"
                        // autoPlay
                      />
                    </Card>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box marginTop={3} display={"flex"} justifyContent={"center"}>
              <Button
                component={"a"}
                href={"#"}
                target={"_blank"}
                variant="contained"
                color="primary"
                size="large"
                endIcon={
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }>
                REGISTER NOW
              </Button>
            </Box>
          </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default Courses;