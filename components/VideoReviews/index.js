import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Carousel from "react-multi-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import "react-multi-carousel/lib/styles.css";
import Container from "../common/Container";

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

export default function VideoReviews(props) {
  const [vrevs, setVrevs] = useState(props.reviews);
  return (
    <Container id="videoreviews">
      <Box id="video">
        <Box marginBottom={4}>
          <Box component={Typography} fontWeight={700} variant={"h3"} align={"center"} gutterBottom>
            Loved & respected by students and parents
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
          {vrevs.map((vrev, index) => (
            <Grid item key={index}>
              <Box
                width={"85%"}
                height={"325px"}
                data-aos={"fade-up"}
                component={Card}
                display={"flex"}
                flexDirection={"column"}
                boxShadow={0}>
                <Box className="vidRevBox" component={CardContent} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                  <Box marginBottom={1} display={"flex"} style={{ width: "100%" }} justifyContent={"space-between"}>
                    <FormatQuoteIcon fontSize="large" style={{ transform: "rotate(180deg)", color: "#377fff" }} />
                    <Box display="flex" alignItems={"flex-end"}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Box key={item}>
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
                  <Card>
                    <CardMedia
                      component="iframe"
                      alt="Ontario Virtual Schoool"
                      height="100%"
                      width="90%"
                      frameBorder="0"
                      shadow="0"
                      image={vrev.home_vr_video}
                      title={vrev.title.rendered}
                    />
                  </Card>
                </Box>
                <Box flexGrow={1} />
                <CardActions>
                  <ListItem component="div" disableGutters style={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText style={{ margin: 0 }}>
                      <Typography
                        margin={0}
                        align={"left"}
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: vrev.title.rendered }}
                      />
                      <Typography
                        margin={0}
                        fontSize={12}
                        align={"left"}
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: vrev.content.rendered }}
                      />
                    </ListItemText>
                  </ListItem>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
