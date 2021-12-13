import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = (props) => {
  const [footerData, setFooterData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const footerData = await axios("/api/footer");
      setFooterData(footerData.data);
    }
    fetchData();
  }, []);

  return <div id="footer" dangerouslySetInnerHTML={{ __html: footerData }}></div>;
};

export default Footer;
