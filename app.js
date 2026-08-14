/* ==========================================
   NEO V1 - MAIN APP
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
    }, 800);
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
            <p>Please enter a question first.</p>
        `;
        return;
    }

    response.innerHTML = `
        <p>
            <strong>You:</strong>
            ${escapeHTML(message)}
        </p>

        <p>
            <strong>NEO:</strong>
            AI engine connection is coming next.
        </p>
    `;

    input.value = "";
}


/* ==========================================
   STUDENT MODE
========================================== */

function studentMode() {
    window.location.href = "student.html";
}


/* ==========================================
   BANKER MODE
========================================== */

function bankerMode() {
    window.location.href = "banker.html";
}


/* ==========================================
   SMART TOOLS
========================================== */

function showTools() {
    alert(
        "NEO Smart Tools are coming next.\n\n" +
        "EMI Calculator\n" +
        "Cash Denomination\n" +
        "Excel Helper\n" +
        "Percentage Calculator\n" +
        "Date Calculator"
    );
}


/* ==========================================
   TASKS
========================================== */

function showTasks() {
    alert(
        "NEO Tasks module is coming next."
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
   HTML SECURITY
========================================== */

function escapeHTML(text) {
    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* ==========================================
   ESC KEY
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
   SERVICE WORKER
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
