import React from "react";

interface Choice {
  id: string;
  text: string;
}

interface Step {
  id: number;
  text: string;
  choices?: Choice[];
  buttonText?: string;
}

interface GameViewProps {
  currentStep: Step;
  choice: string | null;
  onChoice: (id: string) => void;
  onNext: () => void;
  onReveal: () => void;
  onRestart: () => void;
  showConfession: boolean;
  confessionMessage: string;
}

export function GameView({
  currentStep,
  choice,
  onChoice,
  onNext,
  onReveal,
  onRestart,
  showConfession,
  confessionMessage,
}: GameViewProps) {
  return (
    <main className="popup-container">
      <h1 className="title">Viaje de Amor de Spider-Man</h1>

      {!showConfession ? (
        <section>
          <p className="step-text">{currentStep.text}</p>
          {currentStep.choices && (
            <div className="choices-container">
              {currentStep.choices.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onChoice(c.id)}
                  className={`choice-button ${choice === c.id ? "selected" : ""}`}
                >
                  {c.text}
                </button>
              ))}
            </div>
          )}
          {currentStep.buttonText && (
            <button
              onClick={currentStep.buttonText.includes("Confesión") ? onReveal : onNext}
              disabled={currentStep.choices && choice === null}
              className="next-button"
            >
              {currentStep.buttonText}
            </button>
          )}
        </section>
      ) : (
        <section className="confession-section">
          <h2 className="confession-title">💖 Confesión 💖</h2>
          <p className="confession-message">{confessionMessage}</p>
          <button onClick={onRestart} className="restart-button">Jugar de nuevo</button>
        </section>
      )}
    </main>
  );
}
