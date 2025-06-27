document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("navbar");
  if (navContainer) {
    fetch("navbar.html")
      .then(response => {
        if (!response.ok) throw new Error("Falha ao carregar navbar");
        return response.text();
      })
      .then(data => {
        navContainer.innerHTML = data;
      })
      .catch(error => {
        console.error("Erro ao carregar navbar:", error);
      });
  }
});