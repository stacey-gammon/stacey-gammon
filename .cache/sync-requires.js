const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/templates/blog-post.js"))),
  "component---src-templates-work-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/templates/work.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/gammon/Personal/stacey-gammon/src/pages/work.js")))
}

