import { useState } from 'react';

/*
  Everything the player has noticed during one mission.

  Every object they check adds a neutral note. The game secretly knows
  which notes are needed to solve the mystery (`mission.requiredNotes`),
  but never tells the player.

  It lives in React state only, so refreshing the page starts over.
  When accounts are added later, this is the place to load and save progress.
*/
export function useMission(mission) {
  const [notes, setNotes] = useState([]);       // note ids, in the order noticed
  const [visited, setVisited] = useState([]);   // hotspot ids the player has opened
  const [toast, setToast] = useState(null);     // the "Added to your notes" banner

  function addNote(noteId) {
    if (!noteId || notes.includes(noteId)) return;
    setNotes([...notes, noteId]);
    setToast({ id: noteId, text: mission.notes[noteId].text });
  }

  function markVisited(hotspotId) {
    if (!visited.includes(hotspotId)) setVisited([...visited, hotspotId]);
  }

  return {
    notes,
    visited,
    toast,
    clearToast: () => setToast(null),
    addNote,
    markVisited,
    readyToSolve: mission.requiredNotes.every((id) => notes.includes(id)),
    // The first hint whose note the player hasn't found yet.
    nextHint: mission.hints.find((hint) => !notes.includes(hint.note)),
  };
}
