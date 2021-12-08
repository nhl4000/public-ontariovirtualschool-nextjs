import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = (props) => {
  const [footerData, setFooterData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const base_url = "https://www.ontariovirtualschool.ca/";
      const footerData = await axios(base_url + "wp-content/cache/1/home/build_footer.html").catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
      setFooterData(footerData);
    }
    fetchData();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: footerData }}></div>;
};

export default Footer;
