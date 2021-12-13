import React from "react";
import { useTheme } from "@material-ui/core/styles";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Reviews from "../components/Reviews";
import Main from "../components/Main";
import Register from "../components/Register";
import About from "../components/About";
import Courses from "../components/Courses";
import Stem from "../components/Stem";
import Features from "../components/Features";
import Team from "../components/Team";
import VideoReviews from "../components/VideoReviews";
import News from "../components/News";
import Schools from "../components/Schools";
import Footer from "../components/Footer";
import Container from "../components/common/Container";
import Script from "next/script";
import { NoSsr } from "@material-ui/core";

import { ChatSupport, Schema, TagManager, Pixel, Tracking } from "../components/Head";

export default function Home(props) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#a61919" />
        <meta name="msapplication-navbutton-color" content="#a61919" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#a61919" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <Schema />

        <title>Ontario Virtual School | OSSD Online Courses | Online School Ontario</title>
        <meta
          name="description"
          content="Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace."
        />
        <link rel="icon" href="/images/favicon.png" />

        <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/header.css" />
        {/* <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/home.css" /> */}
        {/* <script src="/js/script.js"></script> */}
        <script dangerouslySetInnerHTML={{ __html: process.env.homeScript }}></script>
        <link
          media="all"
          href="https://www.ontariovirtualschool.ca/wp-content/cache/autoptimize/1/css/autoptimize_2eaaffd29108dad07265b36e56d19236.css"
          rel="stylesheet"
        />
        <link
          media="(min-width: 48em)"
          href="https://www.ontariovirtualschool.ca/wp-content/cache/autoptimize/1/css/autoptimize_649e5bcabacc8df0fa2f55e5427b5a4a.css"
          rel="stylesheet"
        />
        <title>Ontario Virtual School | OSSD Online Courses | Online School Ontario</title>
        <meta
          name="description"
          content="Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace."
        />
        <link rel="canonical" href="https://www.ontariovirtualschool.ca/" />

        <link
          rel="shortcut icon"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/favicon.png"
        />
        <link
          rel="shortcut icon"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/images/icons/favicon/apple-touch-icon-ipad-retina-152x152.png"
        />
      </Head>

      <NoSsr>
        <TagManager />
        <Pixel />
        <Tracking />
        <ChatSupport />

        <Header data={props.header.html} />

        <Hero heroPost={props.home.hero} />
        <Statistics statsPost={props.home.statistics} />
        <Reviews reviews={props.home.reviews} />
        <Main courses={props.home.courses} />
        <Register steps={props.home.steps} />
        <About about={props.home.about} />
        <Courses learning={props.home.learning} />
        <Stem stem={props.home.stem} />
        <Features wwo={props.home.wwo} stem={props.home.stem_feat} />
        <Team staff={props.home.staff} />
        <VideoReviews reviews={props.home.video_reviews} />
        <News news={props.home.news} />
        <Schools schools={props.home.schools} />

        <Footer />
      </NoSsr>

      {/* <a id="top-button" aria-label="Back to Top" title="back to top" onClick={() => window.scrollTo(0, 0)}></a> */}
    </div>
  );
}

export async function getStaticProps() {
  const base_url = "https://www.ontariovirtualschool.ca/";
  const header = await fetch(base_url + "wp-content/cache/1/home/build_header.html").then(function (r) {
    return r.text();
  });
  let home;
  if (process.env.LOCAL_FILE) {
    home = await fetch("https://www.myvirtualschool.com/wp-json/wp/v2/home_page")
      .then(function (r) {
        return r.json();
      })
      .catch(function (err) {
        return JSON.stringify(err);
      });
  } else {
    home = await fetch("http://localhost:3000/test.json")
      .then(function (r) {
        return r.json();
      })
      .catch(function (err) {
        return JSON.stringify(err);
      });
  }
  const homeData = home[0];

  return {
    props: {
      header: {
        html: header,
      },
      home: {
        hero: homeData["home_hero"][0],
        statistics: homeData["home_statistics"],
        reviews: homeData["home_featured"],
        courses: homeData["home_our_courses"],
        steps: homeData["home_reg_steps"],
        about: homeData["home_about"],
        learning: homeData["home_learning"],
        stem: homeData["home_stem"],
        wwo: homeData["home_wwo"],
        stem_feat: homeData["home_stem_feat"],
        staff: homeData["home_staff"],
        video_reviews: homeData["home_vid_rev"],
        news: homeData["home_news"],
        schools: homeData["home_gcl"],
      },
    },
    //   //revalidate: 10, // Next.js will attempt to re-generate the page: When a request comes in, at most once every 10 seconds
  };
}
