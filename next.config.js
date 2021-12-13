const fs = require("fs");

module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    homeScript: fs.readFileSync("./public/js/script.js").toString(),
  },
};
