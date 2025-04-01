# Apple Website Projekt

Eine moderne, stilvolle Apple-Produkt-Website mit responsivem Design, Animationseffekten und Dark Mode.

## Features
- Responsives Design für alle Geräte
- Dark Mode / Light Mode
- Produktübersicht mit Filteroptionen
- Detaillierte Produktseiten
- Produktvergleichsfunktion
- Kontaktformular mit Datenbankanbindung
- Animationseffekte mit GSAP

## Technologien
- React mit TypeScript
- Tailwind CSS für das Styling
- GSAP für Animationen
- PostgreSQL Datenbank
- Express.js Backend

## Hinweis für die Bewertung
Dieses Projekt wurde in der Replit-Umgebung entwickelt und verwendet einige Replit-spezifische Plugins und Konfigurationen. Hier der LINK: https://appleweb.onrender.com/

### Alternativ: Lokale Installation
Für die lokale Installation in Visual Studio Code sind folgende Schritte erforderlich:

1. **Voraussetzungen installieren:**
   - Node.js (Version 16 oder höher)
   - npm (wird mit Node.js installiert)
   - PostgreSQL Datenbank

2. Installation:
   ```bash
   # Abhängigkeiten installieren
   npm install

   # PostgreSQL-Datenbank konfigurieren
   # Erstelle eine .env Datei mit dem Datenbankverbindungsstring:
   # DATABASE_URL=postgresql://username:password@localhost:5432/databasename

   # Datenbankmigration ausführen
   npm run db:push

   # Projekt starten
   npm run dev
   ```


## Projektstruktur
- `client/`: Frontend-Code (React)
- `server/`: Backend-Code (Express)
- `shared/`: Gemeinsame Dateien (z.B. Datenbankschema)
- `attached_assets/`: Bilder und andere Assets


Das Kontaktformular ist mit einer PostgreSQL-Datenbank verbunden und speichert die eingereichten Anfragen.
