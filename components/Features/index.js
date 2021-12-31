/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Container from "../common/Container";

const Features = (props) => {
  const [feats, setStems] = useState(props.wwo);
  const [ficons, setFicons] = useState(props.stem);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          {feats.map((feat, index) => (
            <Grid key={index}>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
                }}
                gutterBottom
                color={"secondary"}
                align={"center"}>
                What We Offer
              </Typography>
              <Box component={Typography} fontWeight={700} variant={"h3"} gutterBottom align={"center"}>
                {feat.title.rendered}
                <br />
              </Box>
              <Box>
                <Grid container>
                  <Grid item container alignItems={"center"} xs={12} md={6} bgcolor={"#fff"}>
                    <Box data-aos={isMd ? "fade-right" : "fade-up"} margin={4}>
                      <Box marginBottom={2}>
                        <Typography
                          color="textPrimary"
                          component={"div"}
                          dangerouslySetInnerHTML={{ __html: feat.content.rendered }}
                        />
                      </Box>
                      <Box xs={12} marginTop={4}>
                        <Button
                          component={"a"}
                          href={"#"}
                          target={"_blank"}
                          variant="contained"
                          color="primary"
                          size="large"
                          margin={"10px"}
                          fullWidth={!isMd}>
                          REGISTER NOW
                        </Button>
                        &nbsp;
                        <Button
                          component={"a"}
                          href={"#"}
                          target={"_blank"}
                          variant="contained"
                          color="secondary"
                          size="large"
                          margin="10px"
                          fullWidth={!isMd}>
                          MEET OUR STAFF
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} className={"video2"}>
                    <Card>
                      <CardMedia
                        component="iframe"
                        alt="Ontatio Virtual Schoool"
                        height="100%"
                        width="90%"
                        frameBorder="0"
                        shadow="0"
                        image="https://player.vimeo.com/video/307150905?title=0&byline=0&portrait=0&color=ffffff&autoplay=0&dnt=0&muted=1&loop=1&autopause=0"
                        title="Ontario Virtual Schoool"
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Box>
        <Box>
          <Grid container spacing={4}>
            {ficons.map((ficon, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box component={Card} padding={4} borderRadius={4} width={"100%"} height={"100%"} data-aos={"fade-up"}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Box margin={"auto"} marginBottom={2} justifySelf={"center"} borderRadius={25}>
                      <Avatar src={ficon.yoast_head_json.og_image[0].url} style={{ width: "80px", height: "80px" }} />
                    </Box>
                    <Typography
                      component={Typography}
                      variant={"h6"}
                      gutterBottom
                      style={{ fontWeight: 500, textAlign: "center" }}
                      dangerouslySetInnerHTML={{ __html: ficon.title.rendered }}
                    />

                    <Typography
                      color="textSecondary"
                      component={"div"}
                      style={{ textAlign: "center" }}
                      dangerouslySetInnerHTML={{ __html: ficon.content.rendered }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
