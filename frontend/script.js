async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;

  const spinner = document.getElementById("spinner");
  const responseBox = document.getElementById("response");

  // Show spinner
  spinner.style.display = "block";
  responseBox.textContent = ""; // Clear old response

  try {
    const res = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    responseBox.textContent = data.choices[0].message.content;

  } catch (error) {
    responseBox.textContent = "Error occurred: " + error.message;

  } finally {
    // Hide spinner
    spinner.style.display = "none";
  }
}
