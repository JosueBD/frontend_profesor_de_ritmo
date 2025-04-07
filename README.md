
# 🎼 Frontend – Profesor de Ritmo

Este es el entorno visual de la IA generativa **Profesor de Ritmo**, diseñado para funcionar en conjunto con los motores musicales alojados en el backend.

Permite interactuar con funciones como generación de partituras, análisis rítmico, grabación, visualización musical, exportaciones y mucho más, todo desde un diseño limpio, moderno y educativo.

---

## 🚀 Tecnologías principales

- **React + Vite** – Framework moderno y rápido
- **Tailwind CSS** – Estilo visual elegante y adaptable
- **react-i18next** – Soporte multilingüe (español e inglés)
- **FastAPI (vía backend)** – Conexión a motores musicales generativos

---

## 📁 Estructura del proyecto

```bash
frontend_profesor_de_ritmo
├── public/                       # Recursos públicos (favicon, logo)
│   ├── logo_profesor_de_ritmo_final.png
│   └── favicon.ico
├── src/                          # Código fuente principal
│   ├── App.jsx
│   ├── BienvenidaAnimada.jsx
│   ├── VistaPrincipal.jsx
│   ├── VistaGrabacionAudio.jsx
│   ├── EditorPartitura.jsx
│   ├── i18n.js                   # Configuración de idiomas
│   ├── locales/                 # Traducciones
│   │   ├── es/translation.json
│   │   └── en/translation.json
│   └── index.css
├── index.html                   # Entrada HTML principal
├── package.json                 # Dependencias y scripts
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.js           # Procesador de estilos
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```

---

## 🛠️ Scripts útiles

```bash
npm install       # Instala las dependencias
npm run dev       # Inicia servidor local de desarrollo
npm run build     # Compila la app para producción
npm run preview   # Previsualiza la app compilada
```

---

## 🌐 Idiomas disponibles

- 🇪🇸 Español (por defecto)
- 🇺🇸 Inglés

Puedes alternar entre idiomas desde el menú superior de la interfaz.

---

## 📦 Conexión con motores musicales (backend)

El frontend consume la API generativa ubicada en:

```
https://motores-para-profesor-de-ritmo.onrender.com
```

Funciones disponibles:

- `/escribir_musica` → Generar partitura desde texto
- `/generar_ritmo` → Crear patrón rítmico
- `/analizar_midi` → Analizar archivo MIDI
- `/analizar_wav` → Analizar archivo de audio WAV
- `/comparar_ritmos` → Evaluar coincidencias entre ejecuciones

---

## 🧠 IA generativa educativa

Este frontend está pensado para complementar la experiencia de la IA **Profesor de Ritmo**, que:

- Genera partituras didácticas
- Analiza la ejecución rítmica del usuario
- Enseña de forma progresiva con feedback pedagógico
- Permite grabación y análisis musical en tiempo real

---

## 🔐 Licencia

Proyecto creado por **Josué Borges Díaz** con fines **educativos y no comerciales**.

---

## ✨ ¡Gracias por usar Profesor de Ritmo!

🎶 *La música se aprende... creando.* 🎼


