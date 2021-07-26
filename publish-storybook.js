const process = require("process");
const { default: run } = require("@jamesives/github-pages-deploy-action");

// Publishes dist/storybook into the gh-pages branch of the repo. This causes Storybook to
// be served at our GitHub Pages site..
run({
  token: process.env["LAWRENCE_GITHUB_TOKEN"],
  branch: "gh-pages",
  folder: "dist/storybook",
  hostname: "github.com",
  repositoryName: "gocardless/react-dropin",
  workspace: ".",
});
