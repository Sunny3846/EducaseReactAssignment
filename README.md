# Educase React Assignment

A modern React-based authentication and profile management application designed with a smartphone simulator layout. The application demonstrates reusable component architecture, client-side routing, local state persistence, and responsive UI design.

## 🚀 Features

### 📱 Smartphone Simulator Layout

* Designed a centered vertical mobile mockup frame resembling an iPhone X aspect ratio.
* Provides a realistic mobile app experience on desktop screens.
* Fully responsive and optimized for different screen sizes.

### 🎨 Custom Reusable Components

#### Custom Button Component

* Reusable button architecture supporting multiple variants:

  * Primary (Vibrant Purple)
  * Secondary (Lavender)
* Hover effects and smooth transitions.
* Click interaction animations.
* Disabled state styling.

#### Custom Input Field Component

* Outline-style inputs with floating labels.
* Labels seamlessly cut through input borders.
* Adaptive label backgrounds matching the parent container.
* Improved user experience and accessibility.

#### Custom Radio Group Component

* Fully customized radio buttons.
* Purple outer circles with inner selection indicators.
* Horizontal radio selection layout.
* Consistent styling across browsers.

---

## 🛣️ Multi-Page Routing

Implemented client-side navigation using **React Router DOM**.

### Landing Screen (`/`)

* Welcome page with primary call-to-action buttons.
* Navigation to Login and Registration pages.

### Login Screen (`/login`)

* User authentication form.
* Custom floating-label inputs.

### Register Screen (`/register`)

Registration form containing:

* Full Name
* Phone Number
* Email Address
* Password
* Company Name
* Agency Selection (Radio Group)

### Profile Screen (`/profile`)

User dashboard displaying:

* User avatar
* Camera upload badge overlay
* Name and Email information
* Profile settings layout
* Divider and border styling

---

## ⚙️ State Management & Persistence

### Local Storage Integration

* User registration details are stored in browser localStorage.
* Profile information is automatically retrieved after login.
* Dynamic profile rendering using persisted user data.

### User Data Handling

* Stores:

  * Name
  * Email
  * Phone Number
  * Company Information
* Updates profile details without requiring backend integration.

---

## 🌐 Deployment Configuration

### Vercel Deployment Ready

Configured a `vercel.json` file to support Single Page Application (SPA) routing.

Benefits:

* Prevents 404 errors on page refresh.
* Supports direct URL navigation.
* Ensures seamless client-side routing behavior.

Example configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

---

## 🛠️ Tech Stack

* React.js
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Local Storage API
* Vercel

---

## 📂 Project Structure

```text
src/
│
├── Components/
│   ├── LandingScreen/
│   ├── LoginScreen/
│   ├── SignupScreen/
│   ├── ProfileScreen/
│   ├── Button/
│   ├── InputField/
│   └── RadioGroup/
│
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

---

## ▶️ Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Highlights

* Mobile-first UI design
* Reusable component architecture
* React Router navigation
* Local Storage persistence
* Modern form interactions
* Vercel deployment ready
* Clean and scalable folder structure

---

## 👨‍💻 Author

Developed as part of the Educase React Assignment to demonstrate frontend development skills, reusable component design, responsive layouts, routing, and client-side state management using React.
