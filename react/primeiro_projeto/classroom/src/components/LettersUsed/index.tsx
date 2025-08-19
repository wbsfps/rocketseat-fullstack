import styles from "./styles.module.css";

import { Letter } from "../Letter";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        <Letter value="R" size="small" />
        <Letter value="X" size="small" />
      </div>
    </div>
  );
}
