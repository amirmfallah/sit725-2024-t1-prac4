const express = require("express");
app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port", port);
});
