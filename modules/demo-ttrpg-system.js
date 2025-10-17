(function() {
    const statusList = document.getElementById('system-status');
    const appContainer = document.getElementById('app-container');
    if (statusList) {
        const listItem = document.createElement('li');
        listItem.textContent = "Demo Combat System: Active (Module is loaded and ready!)";
        statusList.appendChild(listItem);
    }
    if (appContainer) {
        const demoDiv = document.createElement('section');
        demoDiv.innerHTML = `
            <hr>
            <h2>Combat System Module</h2>
            <p>This system could handle dice rolls, damage, and initiative tracking.</p>
            <button onclick="console.log('Rolled a 20!')">Roll D20 Attack</button>
            <hr>
        `;
        appContainer.appendChild(demoDiv);
    }

})();