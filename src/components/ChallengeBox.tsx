import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge, resetChallenge }  = useContext(challengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe { activeChallenge.amount } xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button type="button" onClick={resetChallenge} className={styles.challengeFailedButton}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton}>Completo</button>
                    </footer>
                </div>):(
                <div className={styles.challengesNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level-up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </div>
    )
}