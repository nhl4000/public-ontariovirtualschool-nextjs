import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { ExitToApp } from "@material-ui/icons";

// TODO
// import "./Main.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3} suppressHydrationWarning>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
const Main = (props) => {
  const [value, setValue] = useState(0);
  const courses = Object.values(props.courses);

  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}>
          Our Courses
        </Typography>
        <Box fontWeight={700} data-aos={"fade-up"}>
          <Typography variant={"h3"} gutterBottom align={"center"}>
            Our Most Popular Courses
          </Typography>
        </Box>
        <Typography variant={"h6"} component={"p"} color={"textSecondary"} align={"center"} data-aos={"fade-up"}>
          Grade Course Selector Here
        </Typography>
      </Box>
      <Box marginBottom={4} data-aos={"fade-up"}>
        <Paper className={classes.root}>
          <Tabs id="tabs" value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Grade 12" {...a11yProps(0)} />
            <Tab label="Grade 11" {...a11yProps(1)} />
            <Tab label="Grade 10" {...a11yProps(2)} />
            <Tab label="Grade 9" {...a11yProps(3)} />
            <Tab label="Grade 8 & 7" {...a11yProps(4)} />
            <Tab label="Upgrade Courses" {...a11yProps(5)} />
          </Tabs>
          <TabPanel value={value} index={0} className="tabs">
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  if (typeof course.yoast_head_json.og_image === "undefined") {
                    return false;
                  }

                  switch (course.home_course_grade) {
                    case "Grade 12":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box component={CardContent} position="relative">
                                <Typography
                                  //   variant={"h6"}
                                  gutterBottom
                                  fontWeight={500}
                                  align={"left"}
                                  dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                />
                                <Typography
                                  //   variant={"p"}
                                  gutterBottom
                                  fontWeight={500}
                                  style={{ color: "#aa0303" }}
                                  className="itemPrice"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_field }}
                                />
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  switch (course.home_course_grade) {
                    case "Grade 11":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                              "&:hover": {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                              },
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box position="relative">
                                <CardContent>
                                  <Typography
                                    variant={"h6"}
                                    gutterBottom
                                    fontWeight={500}
                                    align={"left"}
                                    dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                  />
                                  <Typography
                                    variant={"body1"}
                                    gutterBottom
                                    fontWeight={500}
                                    style={{ color: "#aa0303" }}
                                    className="itemPrice"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                  />
                                  <Typography
                                    align={"left"}
                                    variant={"body2"}
                                    color="textSecondary"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                  />
                                  <Typography
                                    align={"left"}
                                    variant={"body2"}
                                    color="textSecondary"
                                    dangerouslySetInnerHTML={{ __html: course.home_field }}
                                  />
                                </CardContent>
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  switch (course.home_course_grade) {
                    case "Grade 10":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                              "&:hover": {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                              },
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box component={CardContent} position="relative">
                                <Typography
                                  variant={"h6"}
                                  gutterBottom
                                  fontWeight={500}
                                  align={"left"}
                                  dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                />
                                <Typography
                                  variant={"body1"}
                                  gutterBottom
                                  fontWeight={500}
                                  style={{ color: "#aa0303" }}
                                  className="itemPrice"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_field }}
                                />
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  switch (course.home_course_grade) {
                    case "Grade 9":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                              "&:hover": {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                              },
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box component={CardContent} position="relative">
                                <Typography
                                  variant={"h6"}
                                  gutterBottom
                                  fontWeight={500}
                                  align={"left"}
                                  dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                />
                                <Typography
                                  variant={"body1"}
                                  gutterBottom
                                  fontWeight={500}
                                  style={{ color: "#aa0303" }}
                                  className="itemPrice"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_field }}
                                />
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  switch (course.home_course_grade) {
                    case "Grade 8":
                    case "Grade 7":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                              "&:hover": {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                              },
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box component={CardContent} position="relative">
                                <Typography
                                  variant={"h6"}
                                  gutterBottom
                                  fontWeight={500}
                                  align={"left"}
                                  dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                />
                                <Typography
                                  variant={"body1"}
                                  gutterBottom
                                  fontWeight={500}
                                  style={{ color: "#aa0303" }}
                                  className="itemPrice"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_field }}
                                />
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid container spacing={2}>
              {courses.map((course, index) =>
                (() => {
                  switch (course.home_course_grade) {
                    case "Upgrade":
                      return (
                        <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                          <Box
                            component={"a"}
                            href={"#0"}
                            display={"block"}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              textDecoration: "none",
                              transition: "all .2s ease-in-out",
                              "&:hover": {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                              },
                            }}>
                            <Box
                              className="tabcards"
                              component={Card}
                              width={"100%"}
                              height={"100%"}
                              borderRadius={3}
                              display={"flex"}
                              flexDirection={"column"}>
                              <CardMedia
                                image={course.yoast_head_json.og_image[0].url}
                                title={course.title.rendered}
                                style={{
                                  height: 240,
                                }}
                              />
                              <Box component={CardContent} position="relative">
                                <Typography
                                  variant={"h6"}
                                  gutterBottom
                                  fontWeight={500}
                                  align={"left"}
                                  dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                />
                                <Typography
                                  variant={"body1"}
                                  gutterBottom
                                  fontWeight={500}
                                  style={{ color: "#aa0303" }}
                                  className="itemPrice"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                />
                                <Typography
                                  align={"left"}
                                  variant={"body2"}
                                  color="textSecondary"
                                  dangerouslySetInnerHTML={{ __html: course.home_field }}
                                />
                              </Box>
                              <Box flexGrow={1} />
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="primary" variant="contained" size="small" fullWidth>
                                  Register Now
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shomob">
                                <Button color="secondary" variant="contained" size="small" fullWidth>
                                  View Course Outline
                                </Button>
                              </Box>
                              <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                <Button color="primary" variant="contained" size="small">
                                  Register Now
                                </Button>
                                <Button color="secondary" variant="contained" size="small">
                                  View Course Outline
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      );
                  }
                })()
              )}
            </Grid>
          </TabPanel>
        </Paper>
      </Box>
      <Box marginTop={5} display={"flex"} justifyContent={"center"} className="boxBtnSearch">
        <TextField
          id="standard-search"
          label="Search for course"
          type="search"
          className="SearchMargin"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton style={{ color: "#FFF", backgroundColor: "#aa0303" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          component={"a"}
          href={"https://material-ui.com/store/items/webbee-landing-page/"}
          target={"_blank"}
          variant="contained"
          color="primary"
          size="large"
          className="regBtn">
          REGISTER NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
