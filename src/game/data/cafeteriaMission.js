/*
  All content for Mission 01 — Escape the Cafeteria.

  The UI components never contain story text; they read it from here.
  To change the mystery (names, dialogue, which notes matter), edit this file.

  Design rule: the player is never told the term "rogue access point"
  until the reveal at the very end.
*/

// Network names on the player's phone. Rename these freely.
const REAL_STUDENT = 'CampusNet-Student';
const REAL_GUEST = 'CampusNet-Guest';
const FAKE = 'CampusNet-Student-Free';
const HOTSPOT = 'Maya’s iPhone';

export const cafeteriaMission = {
  number: 'Mission 01',
  title: 'Escape the Cafeteria',
  timeLimitMinutes: 15,
  intro: [
    'You’ve got 15 minutes before your next class.',
    'Something strange has been happening to students using the cafeteria network. A few of them got logged out of their accounts this morning, and nobody knows why.',
    'Figure out what’s happening before you leave.',
  ],
  startLabel: 'Enter the cafeteria',

  howToPlay: 'Tap anything in the room that looks interesting. Everything you notice goes into your notes — it’s up to you to work out what matters.',

  /*
    Notes the player collects. They are neutral observations: the game never
    says which ones matter. Harmless things get notes too, so the player has
    to tell real evidence apart from everyday campus life.
  */
  notes: {
    'official-networks': {
      text: `The café’s router has an IT sticker listing two networks: “${REAL_STUDENT}” and “${REAL_GUEST}”.`,
    },
    coffee: {
      text: 'Coffee corner: an unused machine and a nearly empty box of 3-in-1 sachets.',
    },
    poster: {
      text: 'Debate club poster. Its QR code opens the club’s page on the university website.',
    },
    'maya-network': {
      text: `Maya connected to “${FAKE}”: full signal, no password.`,
    },
    'maya-login': {
      text: 'After Maya connected, a page asked for her university email and password. Later she was logged out, and someone signed in to her account from another country.',
    },
    'maya-friend': {
      text: 'Maya’s friend Karim had the same problem. He was sitting at the corner table.',
    },
    laptop: {
      text: `A student on “${REAL_STUDENT}” is using the course portal normally.`,
    },
    'hidden-device': {
      text: 'Under table 7 (the corner table): a small box with an antenna, plugged into a power bank. Its switch has a 3-digit lock. The tape says “real nets · my bars · my table”.',
    },
    car: {
      text: 'Someone keeps revving their car in the parking lot.',
    },
    'late-student': {
      text: 'A soaked student rushed in late for class.',
    },
    'wifi-fake': {
      text: `Phone: “${FAKE}” — open, no password, 4 of 4 signal bars.`,
    },
    'wifi-student': {
      text: `Phone: “${REAL_STUDENT}” — needs a password, 2 of 4 bars.`,
    },
    'wifi-guest': {
      text: `Phone: “${REAL_GUEST}” — open, 2 of 4 bars.`,
    },
    'wifi-hotspot': {
      text: 'Phone: “Maya’s iPhone” — a personal hotspot, 3 of 4 bars.',
    },
  },

  /*
    Shown one at a time by the Hint button: the first hint that isn't done yet.
    A hint is done when its `note` has been found, or when its `step`
    ('locks' = all exit locks open, 'device' = box switched off) is complete.
  */
  hints: [
    { note: 'maya-network', text: 'Maya looks frustrated. Ask her what happened this morning.' },
    { note: 'maya-login', text: 'Maya got logged out after connecting. Ask what happened afterwards.' },
    { note: 'official-networks', text: 'Which networks does the café actually run? Look for its equipment near the counter.' },
    { note: 'hidden-device', text: 'Full signal in a crowded café is unusual. Is something nearby broadcasting? Maya mentioned where her friend was sitting.' },
    { step: 'locks', text: 'The exit door has three locks. Each one asks a question — answer it with what you’ve noticed. Your notes are proof.' },
    { step: 'device', text: 'The box is still running. The tape on it is a reminder of its code: count things you’ve already seen.' },
  ],

  /*
    The three views of the cafeteria, in left-to-right order.
    Hotspot x/y are positions inside the 400×300 illustration.
    Every hotspot needs a `label` for screen readers.
  */
  views: [
    {
      id: 'counter',
      name: 'Counter',
      hotspots: [
        {
          id: 'router',
          label: 'Wi-Fi router on the wall',
          x: 346, y: 120,
          action: {
            type: 'inspect',
            title: 'The café’s router',
            text: [
              'A white box on the wall with a steady green light. A sticker from IT lists the networks it broadcasts:',
              `${REAL_STUDENT} — password from the student portal\n${REAL_GUEST} — for visitors`,
            ],
            note: 'official-networks',
          },
        },
        {
          id: 'coffee',
          label: 'Coffee machine and coffee sachets',
          x: 316, y: 140,
          action: {
            type: 'inspect',
            title: 'Coffee corner',
            text: [
              'A coffee machine nobody uses, and a box of 3-in-1 sachets that’s nearly empty. Half of campus runs on these.',
            ],
            note: 'coffee',
          },
        },
        {
          id: 'poster',
          label: 'Poster with a QR code',
          x: 197, y: 163,
          action: {
            type: 'inspect',
            title: 'Club poster',
            text: [
              'A poster for the debate club’s open night. The QR code underneath points to the club’s page on the university website.',
            ],
            note: 'poster',
          },
        },
      ],
    },
    {
      id: 'seating',
      name: 'Seating area',
      hotspots: [
        {
          id: 'maya',
          label: 'Talk to Maya',
          x: 150, y: 186,
          action: { type: 'dialogue', dialogue: 'maya' },
        },
        {
          id: 'laptop',
          label: 'Another student’s laptop',
          x: 278, y: 206,
          action: {
            type: 'inspect',
            title: 'Someone’s laptop',
            text: [
              'A student is finishing an assignment on the course portal. They’re on CampusNet-Student — they typed the password from the portal this morning.',
            ],
            note: 'laptop',
          },
        },
        {
          id: 'under-table',
          label: 'Under the corner table',
          x: 352, y: 262,
          action: {
            type: 'inspect',
            title: 'Under the corner table',
            text: [
              'You crouch down under table 7. Taped there is a small box with a little antenna, plugged into a power bank. Its light is blinking fast.',
              'Its power switch is covered by a 3-digit lock. Someone wrote a reminder on the tape: “real nets · my bars · my table”.',
            ],
            note: 'hidden-device',
            // Offers the box's combination lock (see `device` below).
            opensDeviceLock: true,
          },
        },
      ],
    },
    {
      id: 'exit',
      name: 'Exit',
      hotspots: [
        {
          id: 'door',
          label: 'Exit door and its lock panel',
          x: 200, y: 168,
          action: { type: 'door' },
        },
        {
          id: 'car',
          label: 'Car outside the window',
          x: 72, y: 140,
          action: {
            type: 'inspect',
            title: 'The parking lot',
            text: [
              'Someone is revving their car in the parking lot. Again. The windows are shaking.',
            ],
            note: 'car',
          },
        },
        {
          id: 'late-student',
          label: 'Student rushing in',
          x: 312, y: 206,
          action: {
            type: 'inspect',
            title: 'Rushing past',
            text: [
              '“Sorry, sorry! The road was completely blocked!” A soaked student runs past you toward the stairs, umbrella still dripping.',
            ],
            note: 'late-student',
          },
        },
      ],
    },
  ],

  dialogues: {
    maya: {
      speaker: 'Maya',
      opening: 'Ugh, my account logged me out right after I connected to the Wi-Fi this morning. Weird, right?',
      choices: [
        {
          id: 'which',
          prompt: 'Which Wi-Fi did you use?',
          reply: `“${FAKE}”. It had full bars and didn’t ask for a password, so I just tapped it. The normal one is always so slow in here.`,
          note: 'maya-network',
        },
        {
          id: 'after',
          prompt: 'What happened afterwards?',
          reply: 'A page popped up asking me to “log in with your university account” to use the Wi-Fi. I typed my email and password, it said error… and ten minutes later I got logged out and an email said someone signed in from another country.',
          note: 'maya-login',
        },
        {
          id: 'friend',
          prompt: 'Did this happen to anyone else?',
          reply: 'My friend Karim too. He was sitting right over there, in the corner, same network.',
          note: 'maya-friend',
        },
      ],
      leave: 'Never mind.',
      // Shown instead of `leave` once the player has asked something.
      leaveAfter: 'Thanks, Maya. I’ll look into it.',
    },
  },

  // What the player sees on their phone's Wi-Fi screen. bars: 1–4.
  // Tapping a network adds its note.
  networks: [
    { name: FAKE, bars: 4, secured: false, detail: 'Open network. No password. Strongest signal in the room.', note: 'wifi-fake' },
    { name: REAL_STUDENT, bars: 2, secured: true, detail: 'Secured. Needs the password from the student portal.', note: 'wifi-student' },
    { name: REAL_GUEST, bars: 2, secured: false, detail: 'Open guest network for visitors.', note: 'wifi-guest' },
    { name: HOTSPOT, bars: 3, secured: true, detail: 'A personal phone hotspot.', note: 'wifi-hotspot' },
  ],

  /*
    The exit door's three locks. The player sees all three from the start.
    - kind 'choice': pick one of the given options.
    - kind 'note':   pick one of YOUR notes as proof. You can only answer
                     if you've actually found the right note; if you haven't,
                     a wrong pick shows `missing` to point you back to the café.
  */
  exitLocks: [
    {
      id: 'network',
      kind: 'choice',
      question: 'Which network is pretending to be the campus network?',
      options: [
        { id: 'fake', label: FAKE, correct: true },
        { id: 'student', label: REAL_STUDENT, feedback: 'That one is on the café router’s official list.' },
        { id: 'guest', label: REAL_GUEST, feedback: 'That one is on the café router’s official list too. Being open doesn’t make it fake.' },
        { id: 'hotspot', label: HOTSPOT, feedback: 'That’s just Maya’s phone, and it isn’t pretending to be anything.' },
      ],
      solved: `“${FAKE}” isn’t on the router’s list, but its name copies the real one.`,
    },
    {
      id: 'source',
      kind: 'note',
      question: 'Where is that network coming from? Pick the note that proves it.',
      answer: 'hidden-device',
      wrong: 'That doesn’t show where the signal comes from. Something close by must be broadcasting it.',
      // Shown instead of `wrong` when the player hasn't found the right note at all yet.
      missing: 'None of your notes show where it’s coming from yet. A strong signal means it’s close — someone mentioned where her friend was sitting.',
      solved: 'A hidden box under table 7 is broadcasting it — that’s why its signal is so strong.',
    },
    {
      id: 'method',
      kind: 'note',
      question: 'How did it take over Maya’s account? Pick the note that proves it.',
      answer: 'maya-login',
      wrong: 'That doesn’t explain how her password got out. What happened right after she connected?',
      missing: 'None of your notes explain this yet. Maya was there when it happened — ask her what happened after she connected.',
      solved: 'A fake login page asked for her university password, and someone used it.',
    },
  ],

  /*
    The combination lock on the hidden box's power switch.
    The code comes from things the player has seen:
      real nets = networks on the router's sticker (2)
      my bars   = signal bars of the fake network on the phone (4)
      my table  = the number on the corner table (7)
  */
  device: {
    code: '247',
    reminder: 'real nets · my bars · my table',
    wrong: 'Click. Nothing happens — the light keeps blinking.',
    solved: 'The light goes dark. The fake network disappears from every phone in the café.',
  },

  // Shown only after escaping. This is the first time the terms appear.
  reveal: {
    term: 'Rogue Access Point',
    discovery: 'You just found — and switched off — a rogue access point.',
    explanation: [
      'A rogue access point is a wireless network device that someone set up without permission. This one copied the name of the real campus network so people would trust it — sometimes called an “evil twin”.',
      'Its fake login page collected passwords from anyone who connected. That’s why Maya’s account was taken over.',
    ],
    field: 'Network Security',
    role: 'Network Security Analyst',
    roleIntro: 'Network security analysts protect the networks people rely on every day. What you just did is a small version of their job:',
    duties: [
      'Know which networks and devices are supposed to exist — like the list on the café’s router.',
      'Notice when something doesn’t belong — a network or a device nobody approved.',
      'Prove what happened with evidence — like you did at the exit door. In real jobs this becomes an incident report.',
      'Remove the threat and help people stay safe — like never typing a password into a pop-up page.',
    ],
  },
};
