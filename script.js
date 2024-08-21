document.getElementById("userForm").addEventListener("submit", handleEvent);

function handleEvent(event) {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;

  if (userName === "" || userEmail === "" || userMessage === "") {
    alert("Make sure to fill out all fields.");
    event.preventDefault();
  } else alert("Thank you for your submission!");
}
