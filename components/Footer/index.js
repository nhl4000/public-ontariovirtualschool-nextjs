import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = (props) => {
  const [footerData, setFooterData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const footerData = await axios("http://localhost:3000/api/footer");
      setFooterData(footerData.data);
    }
    fetchData();
  }, []);

  {
    /* <link rel="stylesheet" href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer.css" /> */
  }
  {
    /* <link
          rel="stylesheet"
          href="https://www.ontariovirtualschool.ca/wp-content/themes/ontario-vs/css/footer-desktop.css"
        /> */
  }

  return <div id="footer" dangerouslySetInnerHTML={{ __html: footerData }}></div>;
};

export default Footer;
