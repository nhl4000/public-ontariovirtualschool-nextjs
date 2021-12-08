import React, { useState } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CountUp from "react-countup";

const CircularProgressWithLabel = (props) => {
  const [progress, setProgress] = useState(0);

  // console.log(props);
  // React.useEffect(() => {
  //   // if (props.inView)

  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 100 : prevProgress + 5,
  //     );
  //   }, 50);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (props.inView) {
    setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 5));
    }, 150);
  }

  return (
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
            end={props.inView ? parseInt(props.value) : 0}
            start={0}
            suffix={props.suffix}
            {...props.countStyle}
          />
        </Typography>
        <p style={{ margin: 0, lineHeight: 1.2, display: "block" }}>{props.subtext}</p>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
