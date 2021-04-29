const express = require("express");
const app = express();
const firebase = require("firebase/app");
const port = process.env.PORT || 3000;
require("firebase/firestore");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var cors = require("cors");
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(cors());
var firebaseConfig = {
  apiKey: "AIzaSyDFzqyobQKGcUJgMpAbUdEaOvGYcI_3TiY",
  authDomain: "atl-project-5f0cf.firebaseapp.com",
  projectId: "atl-project-5f0cf",
  storageBucket: "atl-project-5f0cf.appspot.com",
  messagingSenderId: "778054066406",
  appId: "1:778054066406:web:bfd06ddb7808f59eaf1b27",
  measurementId: "G-V55PLFP9ZQ",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

app.get("/getData", (req, res) => {
  db.collection("data")
    .doc("XLxHb8O2A3EYa2YAt5Jq")
    .get()
    .then((result) => {
      res.send(result.data());
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
