# CyberHunt

### Escape the campus. Outsmart the threat.

CyberHunt is a gamified cybersecurity awareness experience designed around everyday university life. Instead of teaching cybersecurity through slides or multiple-choice quizzes, CyberHunt places students inside interactive escape-room scenarios where cyber threats are hidden in plain sight.

The first version is being designed for **NDU students**, with a virtual campus inspired by Notre Dame University–Louaize. Players explore familiar university spaces, investigate suspicious digital situations, find hidden threats, solve security challenges, and unlock the next area of campus.

## The problem

University students make cybersecurity decisions every day without necessarily realizing it. Connecting to Wi-Fi, scanning QR codes, opening university emails, responding to internship offers, sharing files, logging into campus computers, and receiving messages asking for verification codes can all expose students to security risks.

Traditional cybersecurity awareness training often explains these risks after the fact. CyberHunt takes a different approach:

> **Instead of asking students if they understand cybersecurity, put them in realistic situations and see if they can spot the threat.**

## How it works

Players create a small character and enter a virtual university campus. Each location acts as an escape room built around a different area of cyber awareness.

To escape, the player must explore the environment, distinguish safe objects from actual threats, solve short security puzzles, and learn why each discovered threat is dangerous.

Finding a threat earns XP and reveals a short explanation. Finding something harmless does not. The goal is not to click everything — it is to learn what deserves suspicion.

## Campus missions

### ☕ Cafeteria — Public Wi-Fi & QR Safety
The first playable mission. Hidden around the cafeteria are everyday security risks such as a rogue Wi-Fi network, a suspicious QR code, an unattended device, or another threat that might easily be ignored in real life.

Find the threats, solve the final challenge, and unlock the cafeteria exit.

### 📚 Library — Phishing & Account Security
Investigate suspicious university emails, links, login requests, and account activity.

### 💻 Computer Lab — Device & Data Security
Learn to recognize unsafe USB devices, exposed passwords, unlocked sessions, suspicious downloads, and poor credential practices.

### 🏫 Classroom — Social Engineering
Not every attack looks technical. Decide who and what to trust when messages appear to come from professors, classmates, or university staff.

### 💼 Career Center — Recruitment Scams
Spot fake recruiters, suspicious internship offers, requests for personal information, and malicious attachments.

### 🖥️ Final Mission — Campus Incident
Use skills learned across the previous rooms to investigate a larger simulated security incident.

## The campus

Escaping a room returns the player to a shared campus corridor/map. Other students appear as small avatars with their current progress, making CyberHunt feel like a campus-wide experience rather than an isolated training exercise.

Future versions could include friends, challenge times, weekly missions, campus leaderboards, and live awareness events.

## Cyber Awareness Report

At the end of a run, CyberHunt gives the player a simple awareness profile instead of only a final score.

Examples include:

- Phishing detection
- Social engineering awareness
- Link and QR safety
- Password and authentication security
- Device security
- Public network awareness

The goal is to show students which threats they recognize well and which ones they are most likely to miss.

## Why NDU?

CyberHunt is initially being designed around the environment of Notre Dame University–Louaize because cybersecurity awareness becomes more memorable when scenarios resemble places and situations students actually encounter.

The long-term idea is to pilot the experience with NDU students and explore CyberHunt as a campus cybersecurity awareness initiative. The concept could later be adapted to other universities with their own campus environments and scenarios.

## Future idea: CyberHunt on the real campus

CyberHunt could eventually extend beyond the screen. QR-based challenges placed around campus could unlock location-specific missions during orientation or cybersecurity awareness events.

A student sitting in the real cafeteria could scan a challenge and investigate a virtual version of the same environment.

## MVP

The first prototype intentionally focuses on **one polished escape room rather than an entire campus**.

**Mission 01: Escape the Cafeteria**

The MVP will include:

- A small NDU-inspired interactive environment
- Hidden safe and unsafe objects
- Cyber threat discovery
- Short explanations after each discovery
- XP / scoring
- An escape objective
- A final security challenge
- A corridor showing future locked campus locations
- Mock student avatars to demonstrate the future social experience

## Planned tech stack

- **Frontend:** React
- **Game/UI:** JavaScript, HTML, CSS
- **Version Control:** Git & GitHub
- **Later:** backend/database for accounts, progress, scores, and campus analytics

The stack may evolve as the prototype develops.

## Vision

CyberHunt is meant to make cybersecurity awareness feel less like mandatory training and more like discovering something hidden in the world around you.

**Find the threat. Learn why it matters. Escape.**
