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
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Container from "../common/Container";
import { ExitToApp } from "@material-ui/icons";
import Search from "../Search";
import styles from "./Main.module.css";

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
    <Box className={styles.CoursesBox}>
      <Container>
        <Box marginBottom={4}>
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: "medium",
              color: "#f9b934",
            }}
            gutterBottom
            align={"center"}>
            Our Courses
          </Typography>
          <Box fontWeight={700} data-aos={"fade-up"}>
            <Typography variant={"h3"} gutterBottom align={"center"}>
              Our Most Popular Courses
            </Typography>
          </Box>
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
                    course.home_course_grade = course.home_course_grade[0];
                    switch (course.home_course_grade) {
                      case "Grade 12":
                        return (
                          <Grid item xs={6} sm={6} md={3} key={index} data-aos={"fade-up"}>
                            <Box
                              component={"div"}
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
                                <Link
                                  href={
                                    "https://www.ontariovirtualschool.ca/courses/" +
                                    course.title.rendered.toString().toLowerCase() +
                                    "/"
                                  }>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                    component="img"
                                  />
                                  <Box component={CardContent} position="relative">
                                    <Typography
                                      variant={"body2"}
                                      gutterBottom
                                      fontWeight={500}
                                      align={"left"}
                                      dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                    />
                                    <Typography
                                      variant={"body2"}
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
                                </Link>
                                <Box flexGrow={1} />
                                {console.log(typeof course.course_id)}
                                <Box
                                  component={CardActions}
                                  justifyContent={"center"}
                                  className={styles.buttons}
                                  textAlign={"center"}>
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    className={styles.redBtn}
                                    data-id={typeof course.course_id === "undefined" ? 0 : course.course_id}
                                    data-product-id={typeof course.course_id === "undefined" ? 0 : course.course_id}
                                    data-title={
                                      course.title.rendered.toString().trim() +
                                      ", " +
                                      course.home_course_grade.toString().trim() +
                                      " " +
                                      course.home_field.toString().trim()
                                    }
                                    onClick={(e) => window["atc_button"](e.target)}
                                    data-is-upgrade="0"
                                    data-textbook="0">
                                    Add to Cart
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={
                                      "https://www.ontariovirtualschool.ca/courses/" +
                                      course.title.rendered.toString().toLowerCase() +
                                      "/"
                                    }>
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
                    course.home_course_grade = course.home_course_grade[0];
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
                                <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                  />
                                </Link>
                                <Box position="relative">
                                  <CardContent>
                                    <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                      <Typography
                                        variant={"h6"}
                                        gutterBottom
                                        fontWeight={500}
                                        align={"left"}
                                        dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                      />
                                    </Link>
                                    <Typography
                                      variant={"body1"}
                                      gutterBottom
                                      fontWeight={500}
                                      style={{ color: "#aa0303" }}
                                      className="itemPrice"
                                      dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                    />
                                    <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                      <Typography
                                        align={"left"}
                                        variant={"body2"}
                                        color="textSecondary"
                                        dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                      />
                                    </Link>
                                    <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                      <Typography
                                        align={"left"}
                                        variant={"body2"}
                                        color="textSecondary"
                                        dangerouslySetInnerHTML={{ __html: course.home_field }}
                                      />
                                    </Link>
                                  </CardContent>
                                </Box>
                                <Box flexGrow={1} />
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    View Course Outline
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
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
                    course.home_course_grade = course.home_course_grade[0];
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
                                <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                  />
                                </Link>
                                <Box component={CardContent} position="relative">
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      variant={"h6"}
                                      gutterBottom
                                      fontWeight={500}
                                      align={"left"}
                                      dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                    />
                                  </Link>
                                  <Typography
                                    variant={"body1"}
                                    gutterBottom
                                    fontWeight={500}
                                    style={{ color: "#aa0303" }}
                                    className="itemPrice"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                  />
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                    />
                                  </Link>
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_field }}
                                    />
                                  </Link>
                                </Box>
                                <Box flexGrow={1} />
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    View Course Outline
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
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
                    course.home_course_grade = course.home_course_grade[0];
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
                                <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                  />
                                </Link>
                                <Box component={CardContent} position="relative">
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      variant={"h6"}
                                      gutterBottom
                                      fontWeight={500}
                                      align={"left"}
                                      dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                    />
                                  </Link>
                                  <Typography
                                    variant={"body1"}
                                    gutterBottom
                                    fontWeight={500}
                                    style={{ color: "#aa0303" }}
                                    className="itemPrice"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                  />
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                    />
                                  </Link>
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_field }}
                                    />
                                  </Link>
                                </Box>
                                <Box flexGrow={1} />
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shomob">
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    View Course Outline
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
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
                    course.home_course_grade = course.home_course_grade[0];
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
                                <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                  />
                                </Link>
                                <Box component={CardContent} position="relative">
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      variant={"h6"}
                                      gutterBottom
                                      fontWeight={500}
                                      align={"left"}
                                      dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                    />
                                  </Link>
                                  <Typography
                                    variant={"body1"}
                                    gutterBottom
                                    fontWeight={500}
                                    style={{ color: "#aa0303" }}
                                    className="itemPrice"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                  />
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                    />
                                  </Link>
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_field }}
                                    />
                                  </Link>
                                </Box>
                                <Box flexGrow={1} />
                                <Box
                                  component={CardActions}
                                  justifyContent={"center"}
                                  className="shomob"
                                  href="https://www.ontariovirtualschool.ca/register-online/">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    fullWidth>
                                    Register Now
                                  </Button>
                                </Box>
                                <Box
                                  component={CardActions}
                                  justifyContent={"center"}
                                  className="shomob"
                                  href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    fullWidth>
                                    View Course Outline
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
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
                    course.home_course_grade = course.home_course_grade[0];
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
                                <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <CardMedia
                                    image={course.yoast_head_json.og_image[0].url}
                                    title={course.title.rendered}
                                    style={{
                                      height: 240,
                                    }}
                                  />
                                </Link>
                                <Box component={CardContent} position="relative">
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      variant={"h6"}
                                      gutterBottom
                                      fontWeight={500}
                                      align={"left"}
                                      dangerouslySetInnerHTML={{ __html: course.title.rendered }}
                                    />
                                  </Link>
                                  <Typography
                                    variant={"body1"}
                                    gutterBottom
                                    fontWeight={500}
                                    style={{ color: "#aa0303" }}
                                    className="itemPrice"
                                    dangerouslySetInnerHTML={{ __html: course.home_course_price }}
                                  />
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_course_grade }}
                                    />
                                  </Link>
                                  <Link href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                    <Typography
                                      align={"left"}
                                      variant={"body2"}
                                      color="textSecondary"
                                      dangerouslySetInnerHTML={{ __html: course.home_field }}
                                    />
                                  </Link>
                                </Box>
                                <Box flexGrow={1} />
                                <Box
                                  component={CardActions}
                                  justifyContent={"center"}
                                  className="shomob"
                                  href="https://www.ontariovirtualschool.ca/register-online/">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    fullWidth>
                                    Register Now
                                  </Button>
                                </Box>
                                <Box
                                  component={CardActions}
                                  justifyContent={"center"}
                                  className="shomob"
                                  href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    fullWidth>
                                    View Course Outline
                                  </Button>
                                </Box>
                                <Box component={CardActions} justifyContent={"center"} className="shodesk">
                                  <Button
                                    className={styles.redBtn}
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    href="https://www.ontariovirtualschool.ca/register-online/">
                                    Register Now
                                  </Button>
                                  <Button
                                    className={styles.ylBtn}
                                    color="secondary"
                                    variant="contained"
                                    size="small"
                                    href={"https://www.ontariovirtualschool.ca/courses/" + course.title.rendered}>
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
        <Search justifyContent={"center"} />
      </Container>
    </Box>
  );
};

export default Main;
