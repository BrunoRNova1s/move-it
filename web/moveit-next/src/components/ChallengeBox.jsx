import styles from "../styles/components/ChallangeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn 400xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>New Challenge</strong>
            <p>Run 3 minutes</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Success
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finish a cicle to receive a challeng</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
