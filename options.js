// Function to initialize the UI based on stored settings
function initializeUI() {
    document.getElementById('topnote').innerHTML = 'The default password will be prompted during startup';
}

// Function to save options and change the password
function saveOptions() {
    // Get the current values from the UI
    const oldPassword = document.getElementById('old').value;
    const newPassword = document.getElementById('new').value;
    const noteElement = document.getElementById('note');
    noteElement.style.display = 'block';
    if (localStorage.getItem("newPass") === null) {
        alert('Please set a password first.');
        const passwordInputURL = browser.runtime.getURL("modal.html");
        browser.windows.create({
            type: "detached_panel",
            url: passwordInputURL,
            width: 600,
            height: 400,
        });
    }
    else if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else if (oldPassword !== localStorage.getItem("newPass")) {
        alert('Incorrect password.');
    } else {
        localStorage.setItem("newPass", newPassword);
        noteElement.innerHTML = 'Password saved.';
        document.getElementById('old').value = '';
        document.getElementById('new').value = '';
    }
}



// Event listeners for UI elements
document.getElementById('save').addEventListener('click', saveOptions);


// Initialize the UI when the window loads
window.onload = initializeUI;
