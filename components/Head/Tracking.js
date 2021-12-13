import React from "react";
import Script from "next/script";

export function Tracking() {
  return (
    <>
      {/* <!--  Clickcease.com tracking--> */}
      <Script src="https://www.clickcease.com/monitor/stat.js" />
      <noscript>
        <a href="https://www.clickcease.com" rel="nofollow">
          <img src="https://monitor.clickcease.com/stats/stats.aspx" alt="ClickCease" />
        </a>
      </noscript>
      {/* <!--  Clickcease.com tracking-->   */}
    </>
  );
}
