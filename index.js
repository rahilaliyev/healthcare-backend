//import libraries
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
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

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//initialize the database and the collection
const db = admin.firestore();
const userCollection = "users";

//define google cloud function name
export const webApi = functions.https.onRequest(main);

// Create new user
app.post("/users", async (req, res) => {
  try {
  

    const newDoc = await db.collection(userCollection).add(req.body );
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    res
      .status(400)
      .send(
        `User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`
      );
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
