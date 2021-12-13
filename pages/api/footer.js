import axios from "axios";

export default async function handler(req, res) {
  const base_url = "https://www.ontariovirtualschool.ca/";
  const footer = await fetch(base_url + "wp-content/cache/1/home/build_footer.html").then(function (r) {
    return r.text();
  });
  res.status(200).json(footer);
}
