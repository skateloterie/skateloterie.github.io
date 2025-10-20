document.getElementById("emailForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  message.textContent = `Děkujeme za přihlášku, ${email}!`;
  document.getElementById("emailForm").reset();
});
