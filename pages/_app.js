import { useEffect } from "react";
import AOS from "aos";

import "../styles/globals.css";
import "../components/Reviews/Reviews.css";
import "../components/Main/Main.css";
import "../components/Register/Register.css";
import "../components/About/About.css";
import "../components/Courses/Courses.css";
import "../components/Stem/Stem.css";
import "../components/Features/Features.css";
import "../components/Team/Team.css";
import "../components/VideoReviews/VideoReviews.css";
import "../components/News/News.css";
import "../components/Footer/Footer.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
