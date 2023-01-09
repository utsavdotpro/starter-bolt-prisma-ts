const PORT = 3000;
const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // Starting the app
  await app.start(process.env.PORT || PORT);

  console.log(`⚡️ Bolt app is running on port ${PORT}!`);
})();
