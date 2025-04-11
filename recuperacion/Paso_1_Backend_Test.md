# ✅ Paso 1 – Verificar Backend

Prueba esta URL en tu navegador para verificar si el backend responde correctamente:

https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?texto=C4 D4 E4 F4

Respuesta esperada: XML `<score-partwise>`.

También puedes usar Postman:
- Método: POST
- Cuerpo JSON:
  {
    "texto": "C4 D4 E4 F4"
  }
