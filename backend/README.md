# Backend API

## Setup

(Optional) Erstelle und aktiviere eine virtuelle Umgebung:

```bash
python -m venv venv  
source venv/bin/activate  # Linux/macOS  
venv\Scripts\activate     # Windows
```

Installiere die benötigten Python-Pakete:

```bash
pip install -r requirements.txt
```

## API starten

Starte den FastAPI-Server mit uvicorn:

```bash
uvicorn main:app --reload
```

- `main` ist das Python-Modul `main.py`  
- `app` ist die FastAPI-Instanz darin  
- `--reload` aktiviert automatisches Neuladen bei Codeänderungen (nur für Entwicklung)  

Standardmäßig läuft der Server auf `http://127.0.0.1:8000`.

## API Endpunkte

- OpenAPI-Dokumentation:
`http://127.0.0.1:8000/docs`  

- Alternative API-Doku (ReDoc): 
`http://127.0.0.1:8000/redoc`