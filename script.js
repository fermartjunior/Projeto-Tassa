const btn = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

const whatsappBtn = document.querySelector(".whatsapp-button");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = encodeURIComponent("Olá, tenho interesse nos serviços.");
    const numeroWhatsApp = "5514991314614";
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank");
  });
}

