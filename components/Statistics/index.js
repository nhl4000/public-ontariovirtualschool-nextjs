import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SchoolIcon from "@mui/icons-material/School";

const Statistics = (props) => {
  var statsReady = true;

  var statsPost = Object.values(props)[0];
  console.log(statsPost);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };
  const theme = useTheme();

  return statsReady ? (
    <Box marginBottom={{ xs: 4, sm: 6, md: 8 }}>
      <Grid container spacing={2}>
        {console.log(statsPost)}
        {statsPost.map((post, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Typography variant="h3" align={"center"} gutterBottom>
              {(() => {
                switch (index) {
                  case 0:
                    return (
                      <Box fontWeight={600}>
                        <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                          <CountUp
                            redraw={false}
                            end={post.home_stats}
                            // onEnd={viewPortEntered ? post.home_stats : 0}
                            start={0}
                            className={"red-count-up"}
                            suffix={"/5"}
                            decimals={1}
                            decimal="."
                            duration="1"
                          />
                        </VisibilitySensor>
                        <br />
                        <Rating
                          name="star-user-rating"
                          defaultValue={Number.parseFloat(post.home_stats)}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                    );
                  case 1:
                    return (
                      <Box fontWeight={600}>
                        <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                          <CountUp
                            redraw={false}
                            duration="1"
                            end={Number.parseInt(viewPortEntered ? 25000 : 0)}
                            start={0}
                            className={"red-count-up"}
                            suffix={"+"}
                          />
                        </VisibilitySensor>
                        <br />
                        <DoneAllIcon
                          fontSize="large"
                          style={{ color: "#f9b934" }}
                          // className="red-count-up"
                        />
                      </Box>
                    );
                  case 2:
                    return (
                      <Box fontWeight={600}>
                        <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                          <CountUp
                            redraw={false}
                            duration="1"
                            end={viewPortEntered ? 98 : 0}
                            start={0}
                            className={"red-count-up"}
                            suffix={"%"}
                          />
                        </VisibilitySensor>
                        <br />
                        <SchoolIcon
                          fontSize="large"
                          style={{ color: "#f9b934" }}
                          // className="red-count-up"
                        />
                      </Box>
                    );
                }
              })()}
            </Typography>
            <Typography align={"center"} variant="h6" gutterBottom>
              {post.title.rendered}
            </Typography>
            <Typography
              color="text.secondary"
              align={"center"}
              component="p"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    "Loading!"
  );
};

export default Statistics;
