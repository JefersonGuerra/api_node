const express = require("express");
const userRoute = require("./src/api/v1/routes/userRoutes.ts");;

const app = express();
const port = process.env.PORT ?? 3000;

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Api listening on port ${port}`);
})