# My Local Web App Foundation

I built this system as the core launcher for any local web application I want to create. My goal was to establish a single, flexible entry point that can easily load and manage separate, reusable components for features like data handling, UI tools, or complex calculations.

This architecture lets me swap features in and out without having to rebuild the entire application structure.

---

## 📂 Project Architecture

This structure clearly separates the core launcher logic from the individual functional components.

| File/Folder Name | Location | Purpose |
| :--- | :--- | :--- |
| **index.html** | Root | The main page you would open. It loads the style and the core engine. |
| **style.css** | Root | Defines the basic visual style for the overall app wrapper. |
| **launcher.js** | Root | **The Engine.** Contains the `SYSTEM_MODULES` array and the logic to dynamically load every component listed. |
| **modules/** | Root | The folder where all self-contained application modules (`.js` files) live. |

---

## ⚙️ Setup and Launch

1.  **File Placement:** Place the three main files and a empty `modules` folder in a single project directory.
2.  **Initial Component:** Ensure you have at least one module (like `demo-module.js`) inside the `modules` folder and its name is listed in the `launcher.js` SYSTEM_MODULES array.
3.  **Launch:** Double-click **`index.html`** in your file explorer. It will open in your default browser.

## 🔌 Adding a New Module

To plug a new feature into the app, you only need to perform two steps:

1.  **Create the File:** Create a new JavaScript file (e.g., `data-handler.js`) and place it inside the **`modules/`** folder.
2.  **Register the Component:** Open **`launcher.js`** and add the new file's name (without the `.js` extension) to the `SYSTEM_MODULES` array.

```javascript
const SYSTEM_MODULES = [
    "demo-module", 
    "data-handler"  // <--- New component goes here
];
