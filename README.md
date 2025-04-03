# Frontend – Profesor de Ritmo 🎼

Este es el entorno visual de la IA generativa **Profesor de Ritmo**, diseñado para componer, analizar y crear música rítmica moderna desde el navegador.

---

## 🚀 Tecnologías usadas
- **React + Vite** – Framework moderno y rápido
- **Tailwind CSS** – Estilos responsive y minimalistas
- **Framer Motion** – Animaciones fluidas
- **Integración con motores FastAPI** (via `VistaPrincipal`)

---

## 📂 Estructura de carpetas
- `/public`: recursos estáticos, logo, portada, etc.
- `/src`: componentes React como:
  - `VistaPrincipal.jsx`
  - `VistaGrabacionAudio.jsx`
  - `BienvenidaAnimada.jsx` *(opcional)*
- `index.html`: punto de entrada
- `tailwind.config.js`, `vite.config.js`, `package.json`: configuración del entorno

---

## 🔧 Scripts útiles
```bash
npm install     # Instala dependencias
npm run dev     # Inicia entorno local
npm run build   # Compila para producción
