#!/usr/bin/env bash

# Crear entorno virtual (Render lo hace automáticamente, esto es redundante en local)
# python -m venv venv
# source venv/bin/activate

# Actualizar pip
pip install --upgrade pip

# Instalar dependencias
pip install -r requirements.txt

# Instalar Lilypond
apt-get update && apt-get install -y lilypond

# Establecer la ruta de Lilypond en music21
python -c "from music21 import environment; environment.UserSettings()['lilypondPath'] = '/usr/bin/lilypond'"

echo "✅ Lilypond instalado y configurado"
