//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database'
// import firebase from "firebase";
//Routes
import AppRoutes from './routes';
//Assets
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyAHpngkUAcnHNyMFRDtAAyojMystVSVMOM",
  authDomain: "iamsa-solutions.firebaseapp.com",
  databaseURL: "https://iamsa-solutions.firebaseio.com",
  projectId: "iamsa-solutions",
  storageBucket: "",
  messagingSenderId: "224195005068"
});

render(
  <HashRouter>
    <AppRoutes/>
  </HashRouter>,
  document.getElementById('root'));
