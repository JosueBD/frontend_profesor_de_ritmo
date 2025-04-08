import SidebarLayout from "./layouts/SidebarLayout";

function App() {
  return (
    <SidebarLayout>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/api" element={<Api />} />
        <Route path="/grabacion" element={<VistaGrabacionAudio />} />
        <Route path="/ritmo" element={<Ritmo />} />
      </Routes>
    </SidebarLayout>
  );
}

export default App;
