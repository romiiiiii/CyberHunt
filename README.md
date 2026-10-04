# CyberHunt

### Explore the campus. Solve the threats. Discover your path.

CyberHunt is a gamified cybersecurity learning experience designed for university students who are curious about cybersecurity but may not know what fields such as SOC, DevOps, penetration testing, cloud security, incident response, or digital forensics actually involve.

Instead of starting with definitions, CyberHunt lets students **experience the job first**.

Players explore a virtual university campus, enter escape-room-style missions, investigate realistic security problems, and gradually discover the cybersecurity field behind each challenge.

The first version is being designed around a university campus inspired by **Notre Dame University–Louaize (NDU)**, with the long-term goal of introducing NDU students to cybersecurity in a more interactive way.

## The problem

Computer science students are often introduced to many possible career paths without getting the chance to experience what those paths actually feel like.

Terms such as:

- SOC
- Threat Intelligence
- Incident Response
- Penetration Testing
- Network Security
- Cloud Security
- DevOps / DevSecOps
- Digital Forensics
- Risk & Compliance

can sound abstract when a student has never worked in cybersecurity.

CyberHunt reverses the usual learning process:

> **Play first. Discover the field second.**

Rather than showing a student a definition of incident response, the game gives them an incident to investigate. Rather than defining network security, it asks them to find what is wrong with a suspicious campus network.

Once the mission is complete, CyberHunt reveals the real cybersecurity field behind what they just did.

## How learning works

Every mission follows a simple cycle:

**1. Enter the scenario**

The player receives a mission in normal language without needing cybersecurity vocabulary.

> "Students cannot connect to the campus network. Something strange is broadcasting nearby. Find out what is happening."

**2. Investigate**

The player explores the room, checks clues, talks to characters, and decides what is safe or suspicious.

**3. Escape**

Finding the important clues and solving the final security challenge unlocks the exit.

**4. Reveal the field**

Only after the player has experienced the problem does CyberHunt introduce the terminology:

> **You just worked like a Network Security Analyst.**

The game then gives a short explanation of what that field does in the real world.

**5. Build a Cyber Profile**

CyberHunt tracks which types of challenges the player performs well in and enjoys.

By the end of the campus, students have both learned basic cyber awareness and experienced several cybersecurity career paths.

## The campus

The university itself acts as the level map.

### ☕ Cafeteria — Network Security

A strange Wi-Fi network has appeared around the cafeteria.

Players investigate available networks, QR codes, connected devices, and other clues to determine what is unsafe and escape the room.

**After the mission:** CyberHunt introduces Network Security and explains how professionals protect networks, devices, and communications.

### 📚 Library — Threat Intelligence & Incident Response

Something suspicious has happened to a student account.

Players investigate messages, login activity, timestamps, and clues to understand what happened and decide how to respond.

**After the mission:** the player discovers Threat Intelligence and Incident Response.

### 💻 Computer Lab — Penetration Testing & Application Security

A simulated application contains hidden weaknesses.

Players investigate the environment, discover vulnerabilities, and learn how security professionals find weaknesses before attackers do.

**After the mission:** the player is introduced to Penetration Testing and Application Security.

### 🖥️ IT Office — SOC

Security alerts are appearing across campus.

The player must determine which alerts matter, connect clues, and identify suspicious activity.

**After the mission:** CyberHunt explains what a Security Operations Center (SOC) is and what SOC analysts actually do.

### ☁️ Server Room — Cloud Security & DevSecOps

A deployment has been misconfigured.

Players investigate permissions, exposed information, and the software delivery process to secure the system.

**After the mission:** the player learns what Cloud Security and DevSecOps mean.

### 🔎 Final Investigation — Digital Forensics

A campus device has been compromised.

Using clues collected throughout the game, the player reconstructs what happened.

**After the mission:** CyberHunt introduces Digital Forensics and how investigators use digital evidence.

## No previous cybersecurity knowledge required

CyberHunt is designed specifically so that students **do not need to know cybersecurity terminology before playing**.

Missions use ordinary language first and technical terminology second.

Instead of:

> "Identify the rogue access point."

CyberHunt might ask:

> "One of these Wi-Fi networks is pretending to belong to the university. Which one would you trust?"

After the player solves it, the game can explain:

> **Rogue Access Point** — an unauthorized wireless access point that can be used to imitate a trusted network.

This makes terminology something the player attaches to an experience rather than something they are expected to memorize beforehand.

## Cyber Profile

Completing missions gradually builds a profile based on the player's performance and choices.

Example:

**Your Cyber Profile**

1. Threat Intelligence & Incident Response — 91%
2. Network & Cloud Security — 84%
3. Penetration Testing — 76%
4. SOC — 72%
5. Risk & Compliance — 68%
6. Digital Forensics — 61%

The profile is not intended to tell students what career they must choose. It gives them a starting point for exploring fields they may enjoy.

A student might finish CyberHunt thinking:

> "I had never heard of incident response before, but that was my favorite mission."

That is the goal.

## Social campus experience

After escaping a room, players return to the virtual campus or corridor.

Small student avatars can represent friends and other students progressing through CyberHunt. Future versions could include challenge times, achievements, weekly missions, and campus events.

The aim is to make learning cybersecurity feel like something happening around campus rather than an isolated online course.

## First audience: NDU students

CyberHunt is initially being designed with NDU students in mind.

The virtual environment can take inspiration from familiar university spaces while the challenges reflect digital situations students encounter in everyday life.

The long-term goal is to explore CyberHunt as both:

- a cybersecurity awareness experience for students
- an interactive introduction to cybersecurity career paths

The concept could later be adapted for other universities.

## MVP

The first prototype will focus on **one polished playable escape room** rather than attempting to build the entire campus at once.

### Mission 01 — Escape the Cafeteria

The MVP will include:

- A small university-inspired interactive environment
- A clear security mystery
- Safe objects and hidden threats
- Investigation and escape-room mechanics
- Short explanations when important concepts are discovered
- XP / scoring
- A final challenge that unlocks the exit
- A post-mission career reveal
- A corridor teasing future cybersecurity tracks
- Small mock student avatars to demonstrate the future social experience

## Planned tech stack

- **Frontend:** React
- **Game/UI:** JavaScript, HTML, CSS
- **Version Control:** Git & GitHub
- **Later:** backend/database for accounts, progress, scores, profiles, and campus analytics

The stack may evolve as the prototype develops.

## Vision

CyberHunt is built around one idea:

> **You should not have to understand cybersecurity jargon before you can discover that you enjoy cybersecurity.**

Students learn by investigating, experimenting, making mistakes, and solving problems. The terminology comes after the experience.

**Enter the campus. Escape the rooms. Discover where you fit in cybersecurity.**

## Running locally

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173). To test on your phone, run `npm run dev -- --host` and open the "Network" address on the same Wi-Fi.

### Project structure

```
src/
  main.jsx              entry point (sets up the router)
  App.jsx               the list of screens and their URLs
  styles/global.css     colours, fonts and shared styles
  pages/                one file per screen (landing, campus, cafeteria mission)
  components/           reusable pieces: GameScene, Hotspot, Sheet, DialogueBox,
                        PhoneWifi, NotesPanel, Toast, FinalQuestion, CareerReveal...
  game/data/            game content: locations and all Mission 01 text, notes and puzzle
  game/scenes/          scene illustrations (cafeteria views are hand-drawn SVG placeholders)
  game/useMission.js    tracks notes and objects checked during a mission
```

To change the mystery (dialogue, network names, which notes are required), edit
`src/game/data/cafeteriaMission.js` — no component code needs to change.

### Current status

- Landing screen → campus path → Mission 01 intro.
- **Mission 01 is playable:** three cafeteria views (counter, seating area, exit), hidden clickable objects (some useful, many harmless), Maya's dialogue, the phone's Wi-Fi list, a neutral notebook (the game never says which notes matter), hints with optional highlighting, the final question at the exit, and the Network Security career reveal.
- Not built yet: the corridor with mock students, the Cyber Profile, saving progress (refreshing restarts the mission), and final illustrated art (current art is placeholder SVG).
