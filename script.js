document.documentElement.classList.add("js");

const WHATSAPP_NUMBER = "50688111708";

/* 1. Menú móvil accesible */
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");

if (menuToggle && navPanel) {
  const closeMenu = ({ restoreFocus = false } = {}) => {
    navPanel.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");

    if (restoreFocus) {
      menuToggle.focus();
    }
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navPanel.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navPanel.classList.contains("is-open")) {
      closeMenu({ restoreFocus: true });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

/* 2. Asistente de solicitud por WhatsApp en 3 toques (sin perder lo escrito) */
const builderForm = document.querySelector("[data-whatsapp-builder]");
if (builderForm) {
  const choiceButtons = builderForm.querySelectorAll("[data-choice-group]");
  const locationInput = builderForm.querySelector("[data-location-input]");
  const previewText = builderForm.querySelector("[data-message-preview]");
  const submitLink = builderForm.querySelector("[data-whatsapp-submit]");

  const state = {
    vehiculo: "un automóvil o 4x4",
    motivo: "por una avería en carretera",
    ubicacion: ""
  };

  try {
    const savedLocation = sessionStorage.getItem("gr_ubicacion");
    if (savedLocation && locationInput) {
      locationInput.value = savedLocation;
      state.ubicacion = savedLocation.trim();
    }
  } catch (_) {
    /* sessionStorage opcional */
  }

  const updateWhatsAppMessage = () => {
    const locationPart = state.ubicacion
      ? `Mi ubicación y destino: ${state.ubicacion}.`
      : "Mi ubicación es: (la enviaré por aquí).";

    const rawMessage = `Hola Grúas Robinson, necesito una grúa para trasladar ${state.vehiculo} ${state.motivo}. ${locationPart}`;

    if (previewText) {
      previewText.textContent = `“${rawMessage}”`;
    }

    if (submitLink) {
      submitLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rawMessage)}`;
    }
  };

  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.getAttribute("data-choice-group");
      const value = btn.getAttribute("data-choice-value");
      if (!group || !value) return;

      state[group] = value;

      builderForm.querySelectorAll(`[data-choice-group="${group}"]`).forEach((peer) => {
        const active = peer === btn;
        peer.classList.toggle("is-selected", active);
        peer.setAttribute("aria-pressed", String(active));
      });

      updateWhatsAppMessage();
    });
  });

  if (locationInput) {
    locationInput.addEventListener("input", () => {
      state.ubicacion = locationInput.value.trim();
      try {
        sessionStorage.setItem("gr_ubicacion", locationInput.value);
      } catch (_) {
        /* ignorar si almacenamiento está restringido */
      }
      updateWhatsAppMessage();
    });
  }

  updateWhatsAppMessage();
}

/* 3. Respuesta inmediata (<100ms) al tocar botones principales */
document.querySelectorAll("[data-fast-feedback]").forEach((btn) => {
  btn.addEventListener("pointerdown", () => {
    btn.classList.add("is-pressed");
  });
  btn.addEventListener("pointerup", () => {
    btn.classList.remove("is-pressed");
  });
  btn.addEventListener("pointerleave", () => {
    btn.classList.remove("is-pressed");
  });
});

/* 4. Año actual en el pie de página */
const year = document.querySelector("[data-current-year]");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
