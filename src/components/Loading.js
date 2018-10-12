import React from 'react';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default Loading;

// Avoiding Flash Of Loading Component
// Sometimes components load really quickly (<200ms) and the loading screen only quickly flashes on the screen.
// A number of user studies have proven that this causes users to perceive things taking longer than they really have. If you don't show anything, users perceive it as being faster.
// So your loading component will also get a pastDelay prop which will only be true once the component has taken longer to load than a set delay.