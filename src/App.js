import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


import firebase from 'firebase';
import "firebase/auth";

import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import Otp from './components/Otp';
import Main from './components/Main';
import QrCode from './components/QrCode';
import { Route } from 'react-router-dom';


function App() {
  
  const history = useHistory();
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const firebaseConfig = {
    // Your credentials
    apiKey: "AIzaSyAuef8OnAjZ-Sf2S19Fvptr7xMdYfz7Rjg",
    authDomain: "e-59d73.firebaseapp.com",
    databaseURL: "https://e-59d73-default-rtdb.firebaseio.com",
    projectId: "e-59d73",
    storageBucket: "e-59d73.appspot.com",
    messagingSenderId: "511556249587",
    appId: "1:511556249587:web:c863250dbbe3010dbf5486"
  };
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        history.push("/Main");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  return (
    <>
      
          <Route exact path="/">
          <div id="recaptcha-container"></div>
            <Home />
          </Route>
          
          <Route path="/signup">
          <div id="recaptcha-container"></div>
            <SignUp />
          </Route>

          <Route path="/login">
          <div id="recaptcha-container"></div>
            <Login />
          </Route>

        
          <Route path="/otp">
          <div id="recaptcha-container"></div>
            <Otp
              loginSubmit={loginSubmit}
              otpSubmit={otpSubmit}
              viewOtpForm={viewOtpForm}
            />
          </Route>

          <Route path="/main">
            <Main />
          </Route>
       
          <Route path="/qrcode">
            <QrCode />
          </Route>



    </>
  );
}
export default App;
