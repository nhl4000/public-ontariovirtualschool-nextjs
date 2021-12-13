import React from "react";

export function Schema(props) {
  // This data would change depending on the page it lands on.
  // Since we are only making one page, we hard code these values

  // TODO
  // Pull this data from Yoast SEO (via WP REST API) that will allow it to be dynamic.

  return (
    <>
      {/* <!-- This site is optimized with the Yoast SEO Premium plugin v17.6 (Yoast SEO v17.6) - https://yoast.com/wordpress/plugins/seo/ --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home Page" />
      <meta
        property="og:description"
        content="Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace."
      />
      <meta property="og:url" content="https://www.ontariovirtualschool.ca/" />
      <meta property="og:site_name" content="Ontario Virtual School" />
      <meta property="article:modified_time" content="2021-09-13T13:56:43+00:00" />
      <meta property="og:image" content="https://www.ontariovirtualschool.ca/wp-content/uploads/OVS-NEWS-min.jpg" />
      <meta property="og:image:width" content="550" />
      <meta property="og:image:height" content="550" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="1 minute" />
      <script
        type="application/ld+json"
        className="yoast-schema-graph">{`"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.ontariovirtualschool.ca/#organization","name":"Ontario Virtual School","url":"https://www.ontariovirtualschool.ca/","sameAs":[],"logo":{"@type":"ImageObject","@id":"https://www.ontariovirtualschool.ca/#logo","inLanguage":"en-US","url":"https://www.ontariovirtualschool.ca/wp-content/uploads/OVS.png","contentUrl":"https://www.ontariovirtualschool.ca/wp-content/uploads/OVS.png","width":400,"height":105,"caption":"Ontario Virtual School"},"image":{"@id":"https://www.ontariovirtualschool.ca/#logo"}},{"@type":"WebSite","@id":"https://www.ontariovirtualschool.ca/#website","url":"https://www.ontariovirtualschool.ca/","name":"Ontario Virtual School","description":"","publisher":{"@id":"https://www.ontariovirtualschool.ca/#organization"},"inLanguage":"en-US"},{"@type":"ImageObject","@id":"https://www.ontariovirtualschool.ca/#primaryimage","inLanguage":"en-US","url":"https://www.ontariovirtualschool.ca/wp-content/uploads/OVS-NEWS-min.jpg","contentUrl":"https://www.ontariovirtualschool.ca/wp-content/uploads/OVS-NEWS-min.jpg","width":550,"height":550},{"@type":"WebPage","@id":"https://www.ontariovirtualschool.ca/#webpage","url":"https://www.ontariovirtualschool.ca/","name":"Ontario Virtual School | OSSD Online Courses | Online School Ontario","isPartOf":{"@id":"https://www.ontariovirtualschool.ca/#website"},"about":{"@id":"https://www.ontariovirtualschool.ca/#organization"},"primaryImageOfPage":{"@id":"https://www.ontariovirtualschool.ca/#primaryimage"},"datePublished":"2019-10-10T17:03:03+00:00","dateModified":"2021-09-13T13:56:43+00:00","description":"Ontario Virtual School (OVS) is an accredited private online school offering grade 7-12 online courses. 11 years in service with over 25,000 successful OSSD (Ontario Secondary School Diploma) credits issued. Signup today and Learn at your own pace.","breadcrumb":{"@id":"https://www.ontariovirtualschool.ca/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://www.ontariovirtualschool.ca/"]}]},{"@type":"BreadcrumbList","@id":"https://www.ontariovirtualschool.ca/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}]`}</script>
      {/* <!-- / Yoast SEO Premium plugin. --> */}
    </>
  );
}
