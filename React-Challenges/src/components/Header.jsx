import { useState } from 'react';

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  const addNewChallengeHandler = () => {
    setIsCreatingNewChallenge(true);
  };

  const handleDone = () => {
    setIsCreatingNewChallenge(false);
  };

  return (
    <>
      {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}

      <header id="main-header">
        <h1> Your Challenges </h1>

        <button onClick={addNewChallengeHandler} className="button">
          Add Challenge
        </button>
      </header>
    </>
  );
}
