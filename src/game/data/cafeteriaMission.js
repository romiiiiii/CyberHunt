/*
  All content for Mission 01 — Escape the Cafeteria.

  The UI components never contain story text; they read it from here.
  To change the mystery (names, dialogue, which clues matter), edit this file.

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

  /*
    Clues the player can collect. `kind: 'threat'` shows a stronger
    "Something’s wrong" banner instead of the normal "Clue found".
  */
  clues: {
    'maya-network': {
      text: `Maya joined “${FAKE}” because it had full signal and no password.`,
    },
    'maya-login': {
      text: 'After connecting, a pop-up page asked Maya for her university email and password. Soon after, she was logged out and saw a login from somewhere she’s never been.',
    },
    'official-networks': {
      text: `The café’s official router only broadcasts two networks: “${REAL_STUDENT}” and “${REAL_GUEST}”.`,
    },
    'hidden-device': {
      text: 'Someone taped a small box with an antenna under a corner table, powered by a power bank. It doesn’t belong to the café.',
      kind: 'threat',
    },
    'strongest-signal': {
      text: `On your phone, “${FAKE}” has the strongest signal in the room and no password.`,
    },
  },

  // The exit question only unlocks once these have been found.
  requiredClues: ['maya-network', 'maya-login', 'official-networks', 'hidden-device'],

  // Shown one at a time by the Hint button: the first hint whose clue is still missing.
  hints: [
    { clue: 'maya-network', text: 'Maya looks frustrated. Ask her what happened this morning.' },
    { clue: 'maya-login', text: 'Maya got logged out after connecting. Ask what happened afterwards.' },
    { clue: 'official-networks', text: 'Which networks does the café actually run? Look for its equipment near the counter.' },
    { clue: 'hidden-device', text: 'Full signal in a crowded café is unusual. Is something nearby broadcasting? Check under the tables.' },
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
            clue: 'official-networks',
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
              'Nothing suspicious here. Just caffeine.',
            ],
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
              'It looks like a normal poster, and the link goes where it says. Not everything is a trap.',
            ],
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
              'Everything here looks normal.',
            ],
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
              'You crouch down. Taped under the table is a small box with a little antenna, plugged into a power bank. Its light is blinking fast.',
              'It’s not the café’s router — that one is on the wall by the counter.',
            ],
            clue: 'hidden-device',
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
          label: 'Exit door',
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
              'Loud, but not your problem today.',
            ],
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
              'Late for class, not a cyber threat.',
            ],
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
          clue: 'maya-network',
        },
        {
          id: 'after',
          prompt: 'What happened afterwards?',
          reply: 'A page popped up asking me to “log in with your university account” to use the Wi-Fi. I typed my email and password, it said error… and ten minutes later I got logged out and an email said someone signed in from another country.',
          clue: 'maya-login',
        },
        {
          id: 'friend',
          prompt: 'Did this happen to anyone else?',
          reply: 'My friend Karim too. He was sitting right over there, in the corner, same network.',
        },
      ],
      leave: 'Never mind.',
      // Shown instead of `leave` once the player has asked something.
      leaveAfter: 'Thanks, Maya. I’ll look into it.',
    },
  },

  // What the player sees on their phone's Wi-Fi screen. bars: 1–4.
  // Tapping a network with a `clue` adds that clue.
  networks: [
    { name: FAKE, bars: 4, secured: false, detail: 'Open network. No password. Strongest signal in the room.', clue: 'strongest-signal' },
    { name: REAL_STUDENT, bars: 2, secured: true, detail: 'Secured. Needs the password from the student portal.' },
    { name: REAL_GUEST, bars: 2, secured: false, detail: 'Open guest network for visitors.' },
    { name: HOTSPOT, bars: 3, secured: true, detail: 'A personal phone hotspot.' },
  ],

  finalQuestion: {
    prompt: 'Which network is most likely behind the stolen accounts?',
    options: [
      {
        id: 'fake',
        label: FAKE,
        correct: true,
        feedback: 'It isn’t on the café’s router, it’s broadcast from a hidden box, it copies the real name, and it asked for passwords.',
      },
      {
        id: 'student',
        label: REAL_STUDENT,
        feedback: 'This one is listed on the café’s official router, and students on it haven’t had problems. Look again.',
      },
      {
        id: 'guest',
        label: REAL_GUEST,
        feedback: 'It’s open, but it’s an official network from IT. Being open alone doesn’t make it the culprit.',
      },
      {
        id: 'hotspot',
        label: HOTSPOT,
        feedback: 'That’s just Maya’s own phone hotspot — and she didn’t connect to it.',
      },
    ],
  },

  // Shown only after escaping. This is the first time the terms appear.
  reveal: {
    term: 'Rogue Access Point',
    discovery: 'You just found a rogue access point.',
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
      'Find it, remove it, and help people stay safe — like never typing a password into a pop-up page.',
    ],
  },
};
