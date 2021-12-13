import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CircularProgressWithLabel = (props) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateDuration = 1000; // we want 1 second animation
  const updateAmount = 5;
  const updateBlocks = 100 / updateAmount; // # of update blocks (100% / 5% = 20 blocks)

  const updateDelay = updateDuration / updateBlocks;

  // const updateDelay = 50;
  // const updateDuration = (1000 / updateDelay) * 1000;

  const updateProgressBar = (updateAmount) =>
    setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + updateAmount));

  const onVisibleChange = function (isVisible) {
    if (isVisible) {
      if (!viewPortEntered) {
        setViewPortEntered(true);
        setInterval(updateProgressBar, updateDelay, updateAmount);
      }
    }
  };

  return (
    <VisibilitySensor onChange={onVisibleChange}>
      <Box position="relative" display="inline-flex" data-aos={"fade-up"} style={{ ...props.box }}>
        <CircularProgress variant="determinate" value={progress} size={props.size} />

        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column">
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
            // textAlign="center"
            style={{ ...props.textStyle, textAlign: "center" }}>
            <CountUp
              redraw={false}
              end={viewPortEntered ? parseInt(props.value) : 0}
              start={0}
              suffix={props.suffix}
              duration={(updateDuration + 450) / 1000}
              {...props.countStyle}
            />
          </Typography>
          <p style={{ margin: 0, lineHeight: 1.2, display: "block" }}>{props.subtext}</p>
        </Box>
      </Box>
    </VisibilitySensor>
  );
};

export default CircularProgressWithLabel;
