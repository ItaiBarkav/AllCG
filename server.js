const express = require("express");
const path = require("path");

const app = exspress();

app.use(express.static(__dirname + "/dist/allcg"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/allcg/index.html"));
});

app.listen(process.env.PORT || 8080);
