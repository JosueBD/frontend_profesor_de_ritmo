#!/usr/bin/env bash

# 🔁 Actualizar repositorios e instalar Lilypond
apt-get update && apt-get install -y lilypond

# 🔧 Configurar la ruta de Lilypond para music21
python -c "from music21 import environment; environment.UserSettings()['lilypondPath'] = '/usr/bin/lilypond'"

echo "✅ Lilypond instalado y configurado para music21"
