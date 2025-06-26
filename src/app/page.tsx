"use client";

import React from "react";
import { useGameModel } from "../components/GameModel";
import { GameView } from "../components/GameView";

export default function Home() {
  const {
    choice,
    choicesMade,
    currentStep,
    makeChoice,
    nextStep,
    revealConfession,
    restartGame,
    showConfession,
  } = useGameModel();

  // Determine confession message based on choicesMade
  let confessionMessage = "Con gran poder viene un gran amor. Confieso que mi corazón se balancea por ti, igual que Spider-Man se balancea por la ciudad.";

  if (choicesMade.includes("a") && choicesMade.includes("b")) {
    confessionMessage = "Tu valentía y lealtad inspiran un amor eterno. ¡Confieso mi amor por ti!";
  } else if (choicesMade.includes("a")) {
    confessionMessage = "Tu coraje ilumina mi corazón. ¡Esta es mi confesión de amor!";
  } else if (choicesMade.includes("b")) {
    confessionMessage = "Tu protección y cariño me hacen sentir amado. ¡Te confieso mi amor!";
  }

  if (!currentStep) {
    return <div>Loading...</div>;
  }

  return (
    <GameView
      currentStep={currentStep}
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
