import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";

const api = express();
admin.initializeApp();

exports.api = functions.https.onRequest(api);
