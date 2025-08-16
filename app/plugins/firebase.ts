import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(() => {
  const config = {
    apiKey: "AIzaSyAEhk8KAVmslAuvEtty7NDplzVbqLXyMRU",
    authDomain: "carsmanagement-3f6d7.firebaseapp.com",
    projectId: "carsmanagement-3f6d7",
    storageBucket: "carsmanagement-3f6d7.firebasestorage.app",
    messagingSenderId: "768363617475",
    appId: "1:768363617475:web:82911ebb932c5a0b525676",
    measurementId: "G-VWVV4QPE75",
  };

  const app = initializeApp(config);

  return {
    provide: {
      firebase: app,
    },
  };
});
