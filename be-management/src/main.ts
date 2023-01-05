const { APP_PORT, MYSQL_HOST } = require("./config/config.default");
import app from "./app";
app.listen(APP_PORT, () => {
  console.log(`server is running on http://${MYSQL_HOST}:${APP_PORT}`);
});
