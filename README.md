## To-Do:

1. `_app.js` contains a bunch of CSS imports for the different components. These should be replaced with [Component-Level CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) (by importing module.css files within the component's file). I did the "Schools" component as an example for you.

2. CSS Tweaks for UI/UX

3. JSON Payload from WP Endpoint can be reduced in size (remove unnecessary unused fields) + cached.

## Commands

`yarn dev`

- Runs `next dev'
- Server: http://localhost:3000

`yarn build`

- runs 'next build'
- Creates an optimized production build (located in /.next/)

`yarn start`

- runs 'next start'
- Server : http://localhost:3000/ (serves the production build located in /.next/)

`yarn export`

- runs 'next export'
- exports NextJS app to a static app (removes SSR, located in /out/)
- Must run on a Web Server (cannot just run .html file) - to test try `python -m http.server` to quickly start up local web server in directory of the /out/ (it will start http://localhost:8000/)

## Notes

### Header and Footer

These are pulled in via a known cached URL at build time (from the production OVS server). We can set this to revalidate, if needed (Discussions: [Invalidate static page's cache](https://github.com/vercel/next.js/discussions/21903) and [Update static page by event](https://github.com/vercel/next.js/discussions/16488))

### Page Data

Since MVS is awfully slow (shared hosting), I've made the app use an optional `.env` variable to determine weather to fetch the data from the remote server or local file.

```bash
LOCAL_FILE=1 # 0 = pull data from remote file, pull data from local file
```

Local file located at: `/public/test.json` (remember to update this for fresh data fields, if needed)

Remote endpoint: `https://www.myvirtualschool.com/wp-json/wp/v2/home_page`
