// Contact form handling
const form = document.querySelector("form");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showMessage("✅ Thanks! Your message has been sent.");
        form.reset();
      } else {
        showMessage("❌ Oops, something went wrong. Please try again.");
      }
    } catch (err) {
      showMessage("❌ Error sending message. Check your connection.");
    }
  });
}

/**
 * Show status message and auto fade-out after 4s
 */
function showMessage(msg) {
  status.textContent = msg;
  status.style.opacity = "1";

  setTimeout(() => {
    status.style.transition = "opacity 1s ease";
    status.style.opacity = "0";
  }, 4000);

  // Clear message after fade out
  setTimeout(() => {
    status.textContent = "";
    status.style.transition = "";
  }, 5000);
}
