# LuxiTherma Website

A landing page and sales funnel for Mitolyn energy supplement.

## Firebase Integration Setup

This project uses Firebase Firestore to store user information from form submissions and Firebase Analytics to track user behavior. Follow these steps to set up your Firebase project:

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "luxitherma-leads")
4. Follow the setup wizard (enable Google Analytics for tracking capabilities)

### 2. Create a Firestore Database

1. In your Firebase project, go to "Firestore Database" from the left menu
2. Click "Create database"
3. Choose either "Production mode" or "Test mode" (Test mode allows unrestricted access for development)
4. Select a location for your database (choose one close to your target audience)

### 3. Get Your Firebase Configuration

1. In your Firebase project, click on the gear icon (⚙️) next to "Project Overview" and select "Project settings"
2. Scroll down to "Your apps" section
3. If you don't have an app yet, click the web icon (`</>`)
4. Register your app with a nickname (e.g., "luxitherma-web")
5. Copy the Firebase configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### 4. Update the Firebase Configuration in the Project

1. Open the file `lib/firebase.js`
2. Replace the placeholder configuration with your actual Firebase configuration

### 5. Set Up Firebase Security Rules

For a production environment, you should set up security rules to protect your data. Go to "Firestore Database" > "Rules" and update the rules as needed.

Example of basic security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read leads
    match /leads/{document=**} {
      allow create: if true; // Anyone can create a lead
      allow read: if request.auth != null; // Only authenticated users can read
    }
  }
}
```

### 6. Analytics Events

This project is configured to track the following Firebase Analytics events:

- **lead_capture**: Triggered when a user submits their information through a form
- **form_view**: Tracked when a user views a form
- **form_submission**: Tracked when a user submits a form (success or failure)

You can view analytics data in the Firebase Console under "Analytics" section.

## Accessing the Admin Dashboard

Once you've set up Firebase, you can view all captured leads at:

```
/admin/leads
```

The admin dashboard provides:
- Statistical overview of leads
- Filtering by source (popup or pre-landing)
- Detailed view of each lead
- Real-time data refresh

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `.next` folder.

### `npm start`

Starts the production server after building the app.
