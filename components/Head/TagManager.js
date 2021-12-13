import React from "react";
import Script from "next/script";

export function TagManager() {
  const google_ua_id = process.env.NEXT_PUBLIC_GOOGLE_UA;
  const google_gtm_id = process.env.NEXT_PUBLIC_GOOGLE_GTM;

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${google_ua_id}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag(){dataLayer.push(arguments);}
            window.dataLayer = window.dataLayer||[];
            gtag("js",new Date);
            gtag("config","${google_ua_id}");
            setTimeout("gtag('event', 'No Bounce', {'event_category' : 'Adjusted Bounce' })",3e4);`,
        }}
      />
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${google_gtm_id}');
    `,
        }}
      />
    </>
  );
}
