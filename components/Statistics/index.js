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
  var statsPost = Object.values(props)[0];

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };
  const theme = useTheme();

  return (
    <Box backgroundColor={"#ffffff"} padding={6}>
      <Box marginBottom={{ xs: 4, sm: 6, md: 8 }}>
        <Grid container spacing={2}>
          {statsPost.map((post, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Typography variant="h3" align={"center"} gutterBottom>
                {(() => {
                  switch (index) {
                    case 0:
                      return (
                        <Box fontWeight={600}>
                          <VisibilitySensor onChange={setViewPortVisibility} delayedCall>
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
                              end={viewPortEntered ? 25000 : 0}
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
              <Typography align={"center"} variant="h6" gutterBottom color={'#3a3a3a'}>
                {post.title.rendered}
              </Typography>
              <Typography
                color="textSecondary"
                align={"center"}
                component="div"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Statistics;
