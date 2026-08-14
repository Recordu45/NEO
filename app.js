/* ==========================================
   NEO V1
   Main Application JavaScript
========================================== */


/* ==========================================
   APP LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("appLoader");
    const app = document.getElementById("app");

    setTimeout(() => {

        if (loader) {
            loader.style.display = "none";
        }

        if (app) {
            app.classList.remove("hidden");
        }

    }, 1000);

});


/* ==========================================
   AI COPILOT
========================================== */

function openAI() {

    const modal = document.getElementById("aiModal");

    if (modal) {
        modal.classList.add("active");
    }

}


function closeAI() {

    const modal = document.getElementById("aiModal");

    if (modal) {
        modal.classList.remove("active");
    }

}


function sendAI() {

    const input = document.getElementById("aiInput");
    const response = document.getElementById("aiResponse");

    if (!input || !response) {
        return;
    }

    const message = input.value.trim();

    if (!message) {

        response.innerHTML = `
            <p>
                Please enter something first.
            </p>
        `;

        return;
    }


    response.innerHTML = `
        <p>
            <strong>You:</strong> ${escapeHTML(message)}
        </p>

        <p>
            <strong>NEO:</strong>
            AI Copilot is ready. The real AI engine
            will be connected in the next development stage.
        </p>
    `;

    input.value = "";

}


/* ==========================================
   SECURITY HELPER
========================================== */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* ==========================================
   NOTIFICATIONS
========================================== */

function openNotifications() {

    const panel =
        document.getElementById("notificationPanel");

    if (panel) {
        panel.classList.add("active");
    }

}


function closeNotifications() {

    const panel =
        document.getElementById("notificationPanel");

    if (panel) {
        panel.classList.remove("active");
    }

}


/* ==========================================
   PROFILE
========================================== */

function openProfile() {

    const panel =
        document.getElementById("profilePanel");

    if (panel) {
        panel.classList.add("active");
    }

}


function closeProfile() {

    const panel =
        document.getElementById("profilePanel");

    if (panel) {
        panel.classList.remove("active");
    }

}


/* ==========================================
   STUDENT MODE
========================================== */

function studentMode() {

    alert(
        "Student Mode\n\n" +
        "Coming next:\n" +
        "• AI Study Assistant\n" +
        "• PDF Notes\n" +
        "• AI Quiz\n" +
        "• Exam Preparation\n" +
        "• Resume Builder\n" +
        "• Interview Practice"
    );

}


/* ==========================================
   BANKER MODE
========================================== */

function bankerMode() {

    alert(
        "Banker Mode\n\n" +
        "Coming next:\n" +
        "• EMI Calculator\n" +
        "• DPD Calculator\n" +
        "• NPA Tools\n" +
        "• Cash Denomination\n" +
        "• Excel Helper\n" +
        "• Banking Reports"
    );

}


/* ==========================================
   SMART TOOLS
========================================== */

function showTools() {

    alert(
        "NEO Smart Tools\n\n" +
        "Tools module will include:\n" +
        "• EMI Calculator\n" +
        "• Cash Denomination\n" +
        "• Excel Helper\n" +
        "• Percentage Calculator\n" +
        "• Date Calculator\n" +
        "• Banking Tools"
    );

}


/* ==========================================
   TASKS
========================================== */

function showTasks() {

    alert(
        "NEO Tasks\n\n" +
        "Task management system will be added next."
    );

}


/* ==========================================
   HOME
========================================== */

function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    closeAI();
    closeNotifications();
    closeProfile();

}


/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeAI();
        closeNotifications();
        closeProfile();

    }

});


/* ==========================================
   AI ENTER KEY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input =
        document.getElementById("aiInput");

    if (!input) {
        return;
    }

    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            event.preventDefault();

            sendAI();

        }

    });

});


/* ==========================================
   PWA SERVICE WORKER
========================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {

                console.log(
                    "NEO Service Worker registered."
                );

            })
            .catch((error) => {

                console.log(
                    "Service Worker registration failed:",
                    error
                );

            });

    });

}
