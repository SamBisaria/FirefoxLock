browser.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {

        // Get the absolute URL for the modal.html file
        const passwordInputURL = browser.runtime.getURL("modal.html");

        // Open a custom HTML dialog for password input
        browser.windows.create({
            type: "detached_panel",
            url: passwordInputURL,
            width: 600,
            height: 400,
        });
    }
});


browser.runtime.onStartup.addListener(function () {


    window.open("about:blank");


    var person = prompt("Please enter your pass code", "");

    var newPass = localStorage.getItem("newPass");
    var newPass1 = Number(localStorage.getItem("newPass1"));
    localStorage.getItem("dynamic");
    if (newPass == null) {

        var passw = prompt("Please set your password for first time", "");

        localStorage.setItem("newPass", passw);
        alert('Password saved... Closing the Browser');
        closeA();

    } else {


        if (person === newPass) {

            browser.tabs.getAllInWindow(function (c) {

                for (var d = 0; d < c.length; d++) {
                    if (c[d].url == "about:blank") {
                        browser.tabs.remove(c[d].id);
                        break;
                    }
                }
            });


        } else {
            closeA();
        }
    }
});
function closeAllWindows() {
    browser.windows.getAll({ populate: true }).then(function (windows) {
        for (var window of windows) {
            browser.windows.remove(window.id);
        }
    });
}

function closeBlankTabs() {
    browser.tabs.query({ url: "about:blank" }).then(function (tabs) {
        for (var tab of tabs) {
            browser.tabs.remove(tab.id);
        }
    });
}



