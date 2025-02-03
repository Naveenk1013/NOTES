// Close dropdowns when clicking outside
fetch('/firebase-config.json')
  .then(response => response.json())
  .then(config => firebase.initializeApp(config))
  .catch(error => console.error("Error loading Firebase config:", error));

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
};
document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown-content, .nested-dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

function toggleDropdown(event, id) {
    event.stopPropagation();
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active');
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf1IedXAkB7kYZnb0o4Yn-XubC9mfsxCQ",
    authDomain: "notes-c743e.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/0/project/notes-c743e/settings/general/web:ZmQwZDMzZTUtZDkwNy00MTBlLWI0NGYtZDU3YjZjZWMxYTMx",
    projectId: "notes-c743e",
    storageBucket: "notes-c743e.firebasestorage.app",
    messagingSenderId: "537702790044",
    appId: "1:537702790044:web:f80e604de90d326a614e59"
	measurementId: "G-QRXJWG5DCE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference to database nodes
const totalVisitorsRef = db.ref("totalVisitors");
const currentVisitorsRef = db.ref("currentVisitors");

// Update total visitors count
totalVisitorsRef.transaction((count) => (count || 0) + 1);

// Track current visitors
const userRef = currentVisitorsRef.push();
userRef.set(true);
userRef.onDisconnect().remove();

// Listen for updates and display on the webpage
totalVisitorsRef.on("value", (snapshot) => {
    document.getElementById("totalVisitors").innerText = snapshot.val();
});

currentVisitorsRef.on("value", (snapshot) => {
    document.getElementById("currentVisitors").innerText = snapshot.numChildren();
});
