// Import and initialize the Firebase SDK
// These scripts are imported from the Firebase CDN.
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyU6eqRX2o0nvfkc4LOcOlgfwYeBI-dEI",
  authDomain: "jeslove-love-blog.firebaseapp.com",
  projectId: "jeslove-love-blog",
  storageBucket: "jeslove-love-blog.firebasestorage.app",
  messagingSenderId: "560875289357",
  appId: "1:560875289357:web:589bcbce8a81d2a0af8e44",
  measurementId: "G-E2ZP5KV62E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize the notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://lovelieztechgh.blogspot.com/favicon.ico' //  A default icon for notifications
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
