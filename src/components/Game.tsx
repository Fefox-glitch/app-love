import { GameView } from "./GameView";
import { useGameModel } from "./GameModel";

export default function Game() {
  const {
    currentStep,
    choice,
    showConfession,
    nextStep,
    makeChoice,
    revealConfession,
    restartGame,
  } = useGameModel();

  const confessionMessage =
    currentStep?.confession === false
      ? "💔 Quizás no fue nuestro momento… pero como Peter y Gwen, siempre llevaré esta historia en mi corazón."
      : "💖 Me gustas. Como Peter ama a MJ. ¿Quieres intentarlo conmigo?";

  return (
    <GameView
      currentStep={currentStep!}
      choice={choice}
      onChoice={makeChoice}
      onNext={nextStep}
      onReveal={revealConfession}
      onRestart={restartGame}
      showConfession={showConfession}
      confessionMessage={confessionMessage}
    />
  );
}
