const express = require("express");
const app = express();
const firebase = require("firebase/app");
const port = process.env.PORT || 3000;
require("firebase/firestore");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var cors = require("cors");
app.use(cors({ origin: "*" }));
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
      res.header("Access-Control-Allow-Origin", "*");
      res.send(result.data());
    });
});

app.post("/users", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send({
    success: "200 response",
    res: "You are now just talked with server",
  });
  db.collection("data").doc("XLxHb8O2A3EYa2YAt5Jq").set(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
