# My Local App Component: Local Web App Launcher

This project is the **core foundation** and **runtime engine** for all my local, modular web applications. It is designed to be a flexible, plug-and-play platform where complex features (systems) are loaded and communicate independently of each other.

---

## Core Architecture: The Event Bus

The primary feature of this launcher is the **centralized Event Bus**. All systems communicate by **publishing** and **subscribing** to events (e.g., an Audio System subscribes to a 'save' event published by the Title Screen System).

This design ensures that systems are **fully decoupled**: a module never needs to know if another module exists, dramatically improving scalability, stability, and code maintainability.

---

## Project Structure

| File Name | Location | Purpose |
| :--- | :--- | :--- |
| **index.html** | Root | The single page that initializes the app. |
| **launcher.js** | Root | **The Engine.** Defines the `SYSTEM_MODULES` array, contains the module loader, and hosts the **central Event Bus**. |
| **style.css** | Root | General default styling for the application wrapper. |
| **modules/** | Root | Folder containing all self-contained system logic files (`.js`). |
| **styles/** | Root | Folder containing dedicated CSS files for individual systems. |

---

## Key Functionality (v1.1)

### 1. Centralized Module Loading
The `launcher.js` iterates through the `SYSTEM_MODULES` array and dynamically loads all listed systems, adhering to the Same-Origin Policy for local file execution.

### 2. Event-Driven Communication
The global **`window.EventBus`** object provides three core methods for seamless communication:
* **`subscribe(event, callback)`**: Registers a function to run when an event is fired.
* **`publish(event, data)`**: Fires an event, triggering all subscribed functions.
* **`unsubscribe(event, callback)`**: Essential method for cleanup to prevent memory leaks.

---

## Integration (How to Use)

To add a new system:

1.  Place the system's main logic file (`new-feature.js`) into the **`modules/`** directory.
2.  Add its filename to the `SYSTEM_MODULES` array in **`launcher.js`**.

```javascript
const SYSTEM_MODULES = [
    "title-screen-system",
    "audio-system",
    "data-handler"  // <--- New component goes here
];
