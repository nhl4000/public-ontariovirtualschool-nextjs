import Box from "@mui/material/Box";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";

export default function Home(props) {
  let homeHero = props.home[0]["home_hero"][0];
  let homeStatistics = props.home[0]["home_statistics"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ontario Virtual School | OSSD Online Courses | Online School Ontario</title>
        <meta
          name="description"
          content="Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/header.css" />
        <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer.css" />
        <link
          rel="stylesheet"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer-desktop.css"
        />
        <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/home.css" />
        <script>let no_header = false;</script>
        <script src="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/js/script.js"></script>
      </Head>

      <div dangerouslySetInnerHTML={{ __html: props.header.html }} />

      {/* CONTENT */}
      <Box backgroundColor={"#f1f1f1"} padding={6}>
        <Hero heroPost={homeHero} />
      </Box>
      <Box backgroundColor={"#ffffff"} padding={6}>
        <Statistics statsPost={homeStatistics} />
      </Box>

      <div dangerouslySetInnerHTML={{ __html: props.footer.html }} />
    </div>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const base_url = "https://www.ontariovirtualschool.ca/";
  const header = await fetch(base_url + "wp-content/cache/1/home/build_header.html");
  // const headerCSS = await fetch(base_url + "wp-content/themes/ontario-vs/css/header.css");
  const footer = await fetch(base_url + "wp-content/cache/1/home/build_footer.html");
  // const footerCSS = await fetch(base_url + "wp-content/themes/ontario-vs/css/footer.css");
  const headerData = await header.text();
  // const headerCSSData = await headerCSS.text();
  const footerData = await footer.text();
  // const footerCSSData = await footerCSS.text();

  const home = await fetch("https://www.myvirtualschool.com/wp-json/wp/v2/home_page");
  const homeData = await home.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      header: {
        html: headerData,
        // css: headerCSSData,
      },
      footer: {
        html: footerData,
        // css: footerCSSData,
      },
      home: homeData,
    },
  };
}
