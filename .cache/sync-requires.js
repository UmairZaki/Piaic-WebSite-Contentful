const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/umair/Music/piaic-master/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/about.js"))),
  "component---src-pages-artificial-intelligence-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/artificial_intelligence.js"))),
  "component---src-pages-blockchain-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/blockchain.js"))),
  "component---src-pages-cloud-native-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/cloud_native.js"))),
  "component---src-pages-how-its-work-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/howItsWork.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/index.js"))),
  "component---src-pages-internet-of-things-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/internet_of_things.js"))),
  "component---src-pages-management-comittee-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/managementComittee.js"))),
  "component---src-pages-wit-js": hot(preferDefault(require("/home/umair/Music/piaic-master/src/pages/wit.js")))
}

