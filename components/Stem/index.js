import React, { useState, useEffect, Suspense } from "react";
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "./Stem.module.css";

import { useInView } from "react-intersection-observer";

const Stem = (props) => {
  const [stems, setStems] = useState(props.stem);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  return (
    <Container>
      <Box>
        {stems.map((stem, index) => (
          <Grid key={index}>
            <Box marginBottom={4}>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
                  color: "#f9b934",
                }}
                gutterBottom
                align={"center"}>
                What we Offer
              </Typography>
              <Typography
                variant="h3"
                align={"center"}
                data-aos={"fade-up"}
                gutterBottom
                style={{
                  fontWeight: 700,
                }}
                dangerouslySetInnerHTML={{ __html: stem.title.rendered }}
              />
              <Typography
                variant="h6"
                align={"center"}
                color={"textSecondary"}
                data-aos={"fade-up"}
                dangerouslySetInnerHTML={{ __html: stem.content.rendered }}
              />
            </Box>
            <Box display={"flex"} alignItems={"baseline"} justifyContent={"center"}>
              <Box
                className="stemVideo"
                component={Card}
                maxWidth={700}
                boxShadow={3}
                border={`1px solid ${theme.palette.divider}`}
                borderRadius={3}
                data-aos={isMd ? "fade-right" : "fade-up"}>
                <Box component={CardContent}>
                  <Box border={`1px solid ${theme.palette.divider}`} sx={{ height: "380px" }}>
                    <Card className={styles.HorizVideo}>
                      <CardMedia
                        component="iframe"
                        alt="Ontatio Virtual Schoool"
                        height="100%"
                        width="100%"
                        src={stem.home_stem_video[0]}
                        title="Ontario Virtual Schoool"
                        autoPlay
                        allow="autoplay"
                        playsInline
                      />
                    </Card>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box marginTop={3} display={"flex"} justifyContent={"center"}>
              <Button
                className="redBtn"
                component={"a"}
                target={"_blank"}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                href="https://www.ontariovirtualschool.ca/register-online/">
                REGISTER NOW
              </Button>
            </Box>
          </Grid>
        ))}
      </Box>
    </Container>
  );
};

export default Stem;
