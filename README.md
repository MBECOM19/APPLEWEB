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
Dieses Projekt wurde in der Replit-Umgebung entwickelt und verwendet einige Replit-spezifische Plugins und Konfigurationen. Die beste Möglichkeit, das Projekt zu bewerten, ist über den Replit-Link:

[Link zum Replit-Projekt](https://replit.com/@DEIN-USERNAME/DEIN-PROJEKT)

### Alternativ: Lokale Installation
Für die lokale Installation in Visual Studio Code sind folgende Schritte erforderlich:

1. **Voraussetzungen installieren:**
   - Node.js (Version 16 oder höher)
   - npm (wird mit Node.js installiert)
   - PostgreSQL Datenbank

2. **Installation:**
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

3. **Anmerkung zu Replit-spezifischen Plugins:**
   Falls beim lokalen Start Fehler mit Replit-Plugins auftreten, müssen diese aus der `vite.config.ts` entfernt und die entsprechenden Abhängigkeiten deaktiviert werden.

## Projektstruktur
- `client/`: Frontend-Code (React)
- `server/`: Backend-Code (Express)
- `shared/`: Gemeinsame Dateien (z.B. Datenbankschema)
- `attached_assets/`: Bilder und andere Assets

## Über das Projekt
Diese Website wurde als Schulprojekt entwickelt und zeigt moderne Apple-Produkte in einer benutzerfreundlichen, responsiven Oberfläche. Die Benutzer können zwischen verschiedenen Produktkategorien wechseln, Produkte vergleichen und detaillierte Informationen einsehen.

Das Kontaktformular ist mit einer PostgreSQL-Datenbank verbunden und speichert die eingereichten Anfragen.