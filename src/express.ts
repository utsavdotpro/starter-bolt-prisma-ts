const express = require("express");
const expressApp = express();

const EXPRESS_PORT = 3001;

expressApp.use(express.json());

expressApp.get("/", (_: any, res: any) => {
  res.send("Hello Bolt!");
});

expressApp.listen(EXPRESS_PORT, () => {
  console.log(`Express app listening on port ${EXPRESS_PORT}!`);
});
