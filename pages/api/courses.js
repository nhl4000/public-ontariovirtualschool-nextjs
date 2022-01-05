export default async function handler(req, res) {
  // const base_url = "https://www.ontariovirtualschool.ca/";
  const base_url = "https://www.myvirtualschool.com/";
  const footer = await fetch(base_url + "wp-content/cache/1/courses/build_courses_catalog.json").then(function (r) {
    return r.json();
  });
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json(footer);
}
