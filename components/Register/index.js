/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import BorderColorIcon from "@material-ui/icons/BorderColor";
//import PostAddIcon from '@material-ui/icons/PostAdd';
import DescriptionIcon from "@material-ui/icons/Description";
import Container from "../common/Container";
import styles from './Register.module.css';

// TODO:
// import "./Register.css";

const Register = (props) => {
  const [steps, setSteps] = useState(props.steps);

  // useEffect(() => setSteps(steps.reverse()), []);

  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ color: "#8e0000", fontWeight: 700 }} align="center">
              REGISTRATION IS EASY
            </Typography>

            <Timeline className="vertList">
              {[...steps].reverse().map((step, index) => (
                <TimelineItem key={index} data-aos="fade" data-aos-delay="300" data-aos-easing="linear">
                  <TimelineSeparator>
                    <TimelineDot style={{ backgroundColor: "#aa0303" }}>
                      {(() => {
                        switch (index) {
                          case 0:
                            return <TouchAppIcon style={{ color: "#fff" }} />;
                          case 1:
                            return <BorderColorIcon style={{ color: "#fff" }} />;
                          case 2:
                            return <DescriptionIcon style={{ color: "#fff" }} />;
                        }
                      })()}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ marginTop: "5px" }}>
                    <span className="steps">{step.title.rendered}</span>
                    <br />
                    {step.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>

            <Box margin={5} display={"flex"} className="horzList" suppressHydrationWarning>
              <div id="timeline-wrap">
                <div id="timeline"></div>
                {[...steps].reverse().map((step, index) =>
                  (() => {
                    switch (index) {
                      case 0:
                        return (
                          <div
                            key={index}
                            className="marker mfirst timeline-icon one"
                            data-aos="fade"
                            data-aos-delay="10"
                            data-aos-easing="linear">
                            <TouchAppIcon style={{ color: "#fff" }} />
                            <Typography color="textSecondary">
                              <strong>{step.title.rendered}</strong>
                              <br />
                              {step.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                            </Typography>
                          </div>
                        );
                      case 1:
                        return (
                          <div
                            key={index}
                            className="marker m2 timeline-icon two"
                            data-aos="fade"
                            data-aos-delay="1000"
                            data-aos-easing="linear">
                            <BorderColorIcon style={{ color: "#fff" }} />
                            <Typography color="textSecondary">
                              <strong>{step.title.rendered}</strong>
                              <br />
                              {step.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                            </Typography>
                          </div>
                        );
                      case 2:
                        return (
                          <div
                            key={index}
                            className="marker mlast timeline-icon three"
                            data-aos="fade"
                            data-aos-delay="2000"
                            data-aos-easing="linear">
                            <DescriptionIcon style={{ color: "#fff" }} />
                            <Typography color="textSecondary">
                              <strong>{step.title.rendered}</strong>
                              <br />
                              {step.content.rendered.replace(/(<([^>]+)>)/gi, "")}
                            </Typography>
                          </div>
                        );
                    }
                  })()
                )}
              </div>
            </Box>
            <Box xs={12} style={{ textAlign: "center", paddingTop: "40px" }} suppressHydrationWarning>
              <Typography
                color="textSecondary"
                className="leftText"
                style={{ fontSize: "1.5em", fontWeight: "700", marginBottom: "20px" }}>
                Do you have an academic or pathway question?
                <br />
                Our Guidance Counsellors are here to help you!
              </Typography>
              <Button
                className="redBtn"
                component={"a"}
                href={"#"}
                target={"_blank"}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={false}>
                SCHEDULE A COUNSELLING APPOINTMENT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
