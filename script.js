document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  message.textContent = `Thanks for subscribing, ${email}!`;
  document.getElementById("emailForm").reset();
});
