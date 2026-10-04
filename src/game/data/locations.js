/*
  Campus locations, in the order the player will unlock them.

  `field` is the cybersecurity field behind each mission. The UI must NOT
  show it before the mission is complete (play first, terminology after),
  so the campus screen only uses `teaser`.

  `status` is hardcoded for now. Later it will come from saved progress.
*/
export const locations = [
  {
    id: 'cafeteria',
    name: 'Cafeteria',
    icon: '☕',
    mission: 'Mission 01',
    teaser: 'Students say the Wi-Fi here has been acting strange.',
    field: 'Network Security',
    status: 'available',
    route: '/mission/cafeteria',
  },
  {
    id: 'library',
    name: 'Library',
    icon: '📚',
    mission: 'Mission 02',
    teaser: 'Someone’s account is doing things they never did.',
    field: 'Threat Intelligence & Incident Response',
    status: 'locked',
  },
  {
    id: 'computer-lab',
    name: 'Computer Lab',
    icon: '💻',
    mission: 'Mission 03',
    teaser: 'A student project app has a few too many secrets.',
    field: 'Penetration Testing & Application Security',
    status: 'locked',
  },
  {
    id: 'it-office',
    name: 'IT Office',
    icon: '🖥️',
    mission: 'Mission 04',
    teaser: 'The alerts won’t stop. Which ones actually matter?',
    field: 'SOC / Security Operations',
    status: 'locked',
  },
  {
    id: 'server-room',
    name: 'Server Room',
    icon: '🗄️',
    mission: 'Mission 05',
    teaser: 'Something was left open that shouldn’t have been.',
    field: 'Cloud Security & DevSecOps',
    status: 'locked',
  },
  {
    id: 'final',
    name: 'Final Investigation',
    icon: '🔎',
    mission: 'Finale',
    teaser: 'Put every clue together and reconstruct what happened.',
    field: 'Digital Forensics',
    status: 'locked',
  },
];
