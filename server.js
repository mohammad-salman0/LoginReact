import app from "./src/app.js";

import connectDB from "./src/config/database.js";

app.listen(3000, () => {
  console.log("server is litening at port no 3000");
});

connectDB();
