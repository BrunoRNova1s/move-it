import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/11559401?s=400&u=d57149fdb4d77d0e60bc79017a784ef9dc382fe1&v=4"
        alt="Bruno"
      />
      <div>
        <strong>Bruno Novais</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          {level}
        </p>
      </div>
    </div>
  );
}
