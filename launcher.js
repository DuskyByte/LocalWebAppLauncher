/**
 * The SYSTEM_MODULES array contains the filenames (without the .js extension) of systems located in the 'modules/' folder.
 * To enable a system, just add its filename string to this array!
 */
const SYSTEM_MODULES = [
    "demo-ttrpg-system" 
];

/**
 * Loads a JavaScript module dynamically by creating and appending a script tag.
 * @param {string} moduleName - The filename of the module (e.g., "combat-system").
 */
function loadModule(moduleName) {
    console.log(`Loading ${moduleName} module...`);
    const script = document.createElement('script');
    script.src = `./modules/${moduleName}.js`;
    script.onload = () => {
        console.log(`Module Loaded: ${moduleName}`);
    };
    script.onerror = () => {
        console.error(`Failed to load module: ${moduleName}. Check the filename and path.`);
    };
    document.head.appendChild(script);
}

console.log(`TTRPG Web Launcher Initializing...`);
console.log(`Loading ${SYSTEM_MODULES.length} system modules...`);
SYSTEM_MODULES.forEach(loadModule);