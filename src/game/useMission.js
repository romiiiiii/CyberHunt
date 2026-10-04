import { useState } from 'react';

/*
  Everything the player has discovered during one mission.

  It lives in React state only, so refreshing the page starts over.
  When accounts are added later, this is the place to load and save progress.
*/
export function useMission(mission) {
  const [foundClues, setFoundClues] = useState([]); // clue ids, in the order found
  const [visited, setVisited] = useState([]);       // hotspot ids the player has opened
  const [toast, setToast] = useState(null);         // the "Clue found" banner currently showing

  function findClue(clueId) {
    if (!clueId || foundClues.includes(clueId)) return;
    const clue = mission.clues[clueId];
    setFoundClues([...foundClues, clueId]);
    setToast({ id: clueId, kind: clue.kind ?? 'clue', text: clue.text });
  }

  function markVisited(hotspotId) {
    if (!visited.includes(hotspotId)) setVisited([...visited, hotspotId]);
  }

  const requiredFound = mission.requiredClues.filter((id) => foundClues.includes(id)).length;

  return {
    foundClues,
    visited,
    toast,
    clearToast: () => setToast(null),
    findClue,
    markVisited,
    requiredFound,
    readyToSolve: requiredFound === mission.requiredClues.length,
    // The first hint whose clue the player hasn't found yet.
    nextHint: mission.hints.find((hint) => !foundClues.includes(hint.clue)),
  };
}
