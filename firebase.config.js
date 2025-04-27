
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWdl2HUhcdVRTkppnsGuvDxVFJqBgVKTQ",
    authDomain: "hakathon-adf76.firebaseapp.com",
    projectId: "hakathon-adf76",
    storageBucket: "hakathon-adf76.firebasestorage.app",
    messagingSenderId: "88741693440",
    appId: "1:88741693440:web:6369409f4eac38365e70e5",
    measurementId: "G-QQDR2NN4SM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
