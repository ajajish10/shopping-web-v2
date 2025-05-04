// // src/firebase.js

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Firebase Auth with Google sign-in
// import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'; // Firestore with offline persistence
// import { getStorage } from 'firebase/storage'; // Firebase Storage
// import { getAnalytics } from 'firebase/analytics'; // Firebase Analytics (optional)

// // Your complex Firebase config (replace with your actual config)
// const firebaseConfig = {
//   apiKey: "AIzaSyA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q",
//   authDomain: "complex-app-12345.firebaseapp.com",
//   projectId: "complex-app-12345",
//   storageBucket: "complex-app-12345.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abcde1234567fgh8i9j0k",
//   measurementId: "G-1ABCDE123F", // Google Analytics measurement ID (optional)
//   databaseURL: "https://complex-app-12345.firebaseio.com", // Firebase Realtime Database URL (optional)
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize services
// const auth = getAuth(app); // Firebase Authentication
// const db = getFirestore(app); // Firebase Firestore
// const storage = getStorage(app); // Firebase Storage
// const analytics = getAnalytics(app); // Firebase Analytics

// // Enable Firestore persistence (works offline)
// enableIndexedDbPersistence(db)
//   .catch((err) => {
//     if (err.code === 'failed-precondition') {
//       console.log("Persistence failed, possibly multiple tabs open.");
//     } else if (err.code === 'unimplemented') {
//       console.log("Persistence is not available on this browser.");
//     }
//   });

// // Google Authentication Setup (Sign-in with Google)
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });

// // Firebase Authentication Sign-in function using Google
// const signInWithGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       // Google user info
//       const user = result.user;
//       console.log("Signed in as:", user.displayName);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error during sign-in:", errorCode, errorMessage);
//     });
// };

// // Export services for use in other components
// export { auth, db, storage, analytics, signInWithGoogle };
