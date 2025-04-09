const generarPartitura = async () => {
  try {
    const texto = "C4 D4 E4 F4"; // las notas que quieras generar
    const res = await fetch(`https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?texto=${encodeURIComponent(texto)}`, {
      method: "GET",
    });

    const xml = await res.text();
    setMusicXML(xml);
  } catch (err) {
    console.error("Error al generar partitura:", err);
  }
};
