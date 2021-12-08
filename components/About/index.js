import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgressWithLabel from "./CircularProgressWithLabel.js";

const About = (props) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [about, setAbout] = useState(props.about[0]);
  const [studentCount, setStudentCount] = useState(parseInt(props.about[0].home_about_students));
  const [yearCount, setYearCount] = useState(parseInt(props.about[0].home_about_years));

  //   useEffect(() => {
  //     setAbout(props.about[0]);
  //     setStudentCount(props.about[0].home_about_students);
  //     setYearCount(props.about[0].home_about_years);
  //   }, []);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box data-aos={isMd ? "fade-right" : "fade-up"}>
            <Box marginBottom={2}>
              <Typography
                variant={"h4"}
                style={{ fontWeight: 700 }}
                gutterBottom
                dangerouslySetInnerHTML={{ __html: about.title.rendered }}
              />
              <Typography color="textSecondary" dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}>
              <Box>
                <Button
                  component={"a"}
                  href={"#"}
                  target={"_blank"}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth={!isMd}
                  shadow={1}>
                  HEAR OUR STORY
                </Button>
              </Box>
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={!isMd}
                marginTop={{ xs: 1, sm: 0 }}
                marginLeft={{ sm: 2 }}>
                REGISTER NOW
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              backgroundColor: "transparent",
              backgroundImage:
                'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNjAwIDkwMCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nMCcgeDI9JzAnIHkxPScxJyB5Mj0nMCcgZ3JhZGllbnRUcmFuc2Zvcm09J3JvdGF0ZSgwLDAuNSwwLjUpJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyMwRkYnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNDRjYnLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0nYicgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnIGdyYWRpZW50VHJhbnNmb3JtPSdyb3RhdGUoMCwwLjUsMC41KSc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjRjAwJy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjRkMwJy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0nI0ZGRicgZmlsbC1vcGFjaXR5PScwJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnPjxnIHN0cm9rZT0ndXJsKCNhKScgc3Ryb2tlLXdpZHRoPScyMS4xMic+PHBhdGggZD0nTTE0MDkgNTgxIDE0NTAuMzUgNTExIDE0OTAgNTgxeicvPjxjaXJjbGUgc3Ryb2tlLXdpZHRoPSc3LjA0MDAwMDAwMDAwMDAwMScgdHJhbnNmb3JtPScnIGN4PSc1MDAnIGN5PScxMDAnIHI9JzQwJy8+PHBhdGggdHJhbnNmb3JtPScnIGQ9J000MDAuODYgNzM1LjVoLTgzLjczYzAtMjMuMTIgMTguNzQtNDEuODcgNDEuODctNDEuODdTNDAwLjg2IDcxMi4zOCA0MDAuODYgNzM1LjV6Jy8+PC9nPjxnIHN0cm9rZT0ndXJsKCNiKScgc3Ryb2tlLXdpZHRoPSc2LjQnPjxwYXRoIHRyYW5zZm9ybT0nJyBkPSdNMTQ5LjggMzQ1LjIgMTE4LjQgMzg5LjggMTQ5LjggNDM0LjQgMTgxLjIgMzg5Ljh6Jy8+PHJlY3Qgc3Ryb2tlLXdpZHRoPScxNC4wODAwMDAwMDAwMDAwMDInIHRyYW5zZm9ybT0nJyB4PScxMDM5JyB5PSc3MDknIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJy8+PHBhdGggdHJhbnNmb3JtPScnIGQ9J00xNDI2LjggMTMyLjQgMTQwNS43IDE2OC44IDEzNjMuNyAxNjguOCAxMzQyLjcgMTMyLjQgMTM2My43IDk2IDE0MDUuNyA5NnonLz48L2c+PC9nPjwvc3ZnPg==")',
              backgroundSize: "contain",
              height: "500px",
              position: "relative",
            }}>
            <CircularProgressWithLabel
              size={200}
              suffix="+"
              subtext="Students in 2020"
              textStyle={{ fontSize: 30, color: "#000" }}
              value={studentCount}
              inView={viewPortEntered}
              box={{
                // marginTop: '-8%',
                zIndex: "2",
                backgroundColor: "#fff",
                borderRadius: "100%",
                position: "absolute",
                top: "30%",
              }}
            />

            <CircularProgressWithLabel
              size={160}
              suffix="+"
              subtext="Years"
              textStyle={{ fontSize: 30, color: "#000" }}
              value={yearCount}
              inView={viewPortEntered}
              box={{
                // marginLeft: 'calc(60% - 160px)',
                zIndex: "3",
                backgroundColor: "#fff",
                borderRadius: "100%",
                position: "absolute",
                left: "155px",
                top: "10px",
              }}
            />
            <Box
              component={"img"}
              width={300}
              height={300}
              src={
                "https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/ministry-inspected-icon.png"
              }
              alt="..."
              // marginTop={'-20%'}
              // marginLeft={'calc(100% - 300px)'}
              zIndex={1}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              style={{
                objectFit: "cover",
                filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
                position: "absolute",
                bottom: "0",
                right: "0",
                height: "300px",
                width: "300px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
