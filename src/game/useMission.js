import { useState } from 'react';

/*
  Everything the player has done during one mission:
  - notes:      every object they've checked adds a neutral note
  - openLocks:  which of the exit door's locks they've opened
  - deviceOff:  whether they've switched off the hidden box

  It lives in React state only, so refreshing the page starts over.
  When accounts are added later, this is the place to load and save progress.
*/
export function useMission(mission) {
  const [notes, setNotes] = useState([]);         // note ids, in the order noticed
  const [visited, setVisited] = useState([]);     // hotspot ids the player has opened
  const [openLocks, setOpenLocks] = useState([]); // exit lock ids that are open
  const [deviceOff, setDeviceOff] = useState(false);
  const [toast, setToast] = useState(null);       // the "Added to your notes" banner

  function addNote(noteId) {
    if (!noteId || notes.includes(noteId)) return;
    setNotes([...notes, noteId]);
    setToast({ id: noteId, text: mission.notes[noteId].text });
  }

  function markVisited(hotspotId) {
    if (!visited.includes(hotspotId)) setVisited([...visited, hotspotId]);
  }

  function openLock(lockId) {
    if (!openLocks.includes(lockId)) setOpenLocks([...openLocks, lockId]);
  }

  const allLocksOpen = openLocks.length === mission.exitLocks.length;

  // A hint is done once its note is found or its step is complete.
  function hintDone(hint) {
    if (hint.note) return notes.includes(hint.note);
    if (hint.step === 'locks') return allLocksOpen;
    if (hint.step === 'device') return deviceOff;
    return true;
  }

  return {
    notes,
    visited,
    openLocks,
    deviceOff,
    toast,
    clearToast: () => setToast(null),
    addNote,
    markVisited,
    openLock,
    switchOffDevice: () => setDeviceOff(true),
    allLocksOpen,
    // The door opens only when every lock is open AND the box is off.
    canEscape: allLocksOpen && deviceOff,
    nextHint: mission.hints.find((hint) => !hintDone(hint)),
  };
}
