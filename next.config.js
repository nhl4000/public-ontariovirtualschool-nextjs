const fs = require("fs");
let development = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: false,
  env: {
    homeScript: fs.readFileSync("./public/js/script.js").toString(),
  },
  axois: {
    baseURL: development ? "http://localhost:3000/api" : "https://ontariovirtualschool-next-js.vercel.app/api",
  },
};
