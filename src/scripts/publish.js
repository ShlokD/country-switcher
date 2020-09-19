const ghPages = require("gh-pages");

ghPages.publish("./dist", (err) => {
  if (err) {
    console.error("Error while publishing", err);
  }
  console.log("Published successfully");
});
