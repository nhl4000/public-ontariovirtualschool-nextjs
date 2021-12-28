import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "../common/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Reviews.module.css";

const Reviews = (props) => {
  const theme = useTheme();
  const [revs, setRevs] = useState(props.reviews);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (revs) {
    return (
      <Container>
        <Box>
          <Box marginBottom={4}>
            <Box fontWeight={700}>
              <Typography align={"center"} variant="h3" gutterBottom>
                Loved & respected by students and parents
              </Typography>
            </Box>
            <Box
              component={Typography}
              fontWeight={400}
              variant={"h4"}
              align={"center"}
              gutterBottom
              style={{ color: "#2d3748" }}>
              The only online school with a 4.9/5 Google rating
            </Box>
          </Box>
          <Carousel responsive={responsive}>
            {revs.map((rev, index) => (
              <Grid item key={index}>
                <Box
                  width={"85%"}
                  height={"100%"}
                  data-aos={"fade-up"}
                  component={Card}
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={0}>
                  <Box component={CardContent} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Box marginBottom={1} display={"flex"} style={{ width: "100%" }} justifyContent={"space-between"}>
                      <FormatQuoteIcon fontSize="large" style={{ transform: "rotate(180deg)", color: "#377fff" }} />
                      <Box display="flex" alignItems={"flex-end"}>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Box key={item} color={theme.palette.secondary.main}>
                            <svg
                              width={18}
                              height={18}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="#f9b934">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Typography
                      className="revBody"
                      align={"left"}
                      color="textSecondary"
                      dangerouslySetInnerHTML={{ __html: rev.content.rendered }}
                    />
                  </Box>
                  <Box flexGrow={1} />
                  <CardActions>
                    <ListItem component="div" disableGutters style={{ padding: 0 }}>
                      <ListItemAvatar>
                        <Avatar
                        //src={rev.yoast_head_json.og_image[0].url}
                        />
                      </ListItemAvatar>
                      <ListItemText width={"100%"} style={{ margin: 0 }}>
                        <p>
                          <Typography
                            margin={0}
                            align={"left"}
                            color="textSecondary"
                            component={"span"}
                            dangerouslySetInnerHTML={{ __html: rev.title.rendered }}
                          />
                          <Typography
                            margin={0}
                            fontSize={12}
                            align={"left"}
                            color="textSecondary"
                            component={"span"}
                            dangerouslySetInnerHTML={{ __html: rev.home_revcomp }}
                          />
                        </p>
                      </ListItemText>
                    </ListItem>
                  </CardActions>
                </Box>
              </Grid>
            ))}
          </Carousel>
          <Box marginTop={10} display={"flex"} justifyContent={"center"}>
            <Button
              className="redBtn"
              component={"a"}
              href="/#video"
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowDownIcon />}>
              READ MORE
            </Button>
          </Box>
        </Box>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

export default Reviews;
