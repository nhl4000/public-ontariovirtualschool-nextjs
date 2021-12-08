import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Reviews from "../components/Reviews";
import Main from "../components/Main";
import Register from "../components/Register";
import About from "../components/About";
import Footer from "../components/Footer";
import Container from "../components/common/Container";

export default function Home(props) {
  let homeHero = props.home[0]["home_hero"][0];
  let homeStatistics = props.home[0]["home_statistics"];
  let homeReviews = props.home[0]["home_featured"];
  let homeCourses = props.home[0]["home_our_courses"];
  let homeSteps = props.home[0]["home_reg_steps"];
  let homeAbout = props.home[0]["home_about"];
  let homeLearning = props.home[0]["home_learning"];
  let homeSteam = props.home[0]["home_steam"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ontario Virtual School | OSSD Online Courses | Online School Ontario</title>
        <meta
          name="description"
          content="Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* <link rel="preload" href="/fonts/icomoon.woff" as="font" type="font/woff" /> */}
        {/* <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/header.css" /> */}
        {/* <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer.css" /> */}
        {/* <link
          rel="stylesheet"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer-desktop.css"
        /> */}
        {/* <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/home.css" /> */}
        {/* <script>let no_header = false;</script> */}
        {/* <script src="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/js/script.js"></script> */}
        {/* <script>const menu_resize = function() \{console.log("function redefined")};</script> */}
      </Head>

      {/* <Header data={props.header.html} /> */}

      {/* Hero */}
      <Box backgroundColor={"#f1f1f1"} padding={6}>
        <Hero heroPost={homeHero} />
      </Box>

      {/* Stats */}
      <Box backgroundColor={"#ffffff"} padding={6}>
        <Statistics statsPost={homeStatistics} />
      </Box>

      {/* Reviews */}
      <Container>
        <Reviews reviews={homeReviews} />
      </Container>

      <Box>
        <Container>
          <Main courses={homeCourses} />
        </Container>

        <Container>
          <Register steps={homeSteps} />
        </Container>
      </Box>

      <Container>
        <About about={homeAbout} />
      </Container>

      {/* <Container>
        <Courses />
      </Container>
      <Container>
        <Stem />
      </Container>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Team />
        </Container>
        <Container id="videoreviews">
          <Videoreviews />
        </Container>
        <Container>
          <News />
        </Container>
      </Box>
      <Container>
        <Schools />
      </Container> */}

      {/* <Footer /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: props.footer.html }} /> */}
    </div>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const base_url = "https://www.ontariovirtualschool.ca/";
  const header = await fetch(base_url + "wp-content/cache/1/home/build_header.html").then(function (r) {
    return r.text();
  });
  const home = await fetch("https://www.myvirtualschool.com/wp-json/wp/v2/home_page").then(function (r) {
    return r.json();
  });
  // const homeData = await home.json();

  return {
    props: {
      header: {
        html: header,
      },
      home: home,
    },
    //revalidate: 10, // Next.js will attempt to re-generate the page: When a request comes in, at most once every 10 seconds
  };
}
