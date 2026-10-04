import CounterView from './CounterView.jsx';
import SeatingView from './SeatingView.jsx';
import ExitView from './ExitView.jsx';

// Where each view's floor starts (out of 300), so the strips around the
// picture on wide screens line up with the room's floor.
CounterView.floorY = 205;
SeatingView.floorY = 205;
ExitView.floorY = 236;

// Connects the view ids in the mission data to their illustrations.
export const cafeteriaViews = {
  counter: CounterView,
  seating: SeatingView,
  exit: ExitView,
};
