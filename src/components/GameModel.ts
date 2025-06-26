import { useState } from "react";

export const steps = [
  {
    id: 1,
    text: "🕷️ Bienvenida a esta historia entre telarañas y corazones. Aquí no se salva la ciudad... se salva un corazón. ¿Te atreves a jugar?",
    buttonText: "Comenzar",
    nextStepId: 2
  },
  {
    id: 2,
    text: "¿Cuál Spider-Man es tu favorito?",
    choices: [
      { id: "a", text: "Andrew Garfield" },
      { id: "b", text: "Tobey Maguire" }
    ]
  },
  {
    id: 3,
    text: "¡Sabía que elegirías a Andrew! Ese Spidey con mirada triste y sonrisa encantadora. Como yo… cuando pienso en ti.",
    buttonText: "Siguiente",
    nextStepId: 5,
    condition: { choice: "a" }
  },
  {
    id: 4,
    text: "El clásico Tobey… noble, sufrido, romántico. Me pregunto si tú también ves a través de las máscaras.",
    buttonText: "Siguiente",
    nextStepId: 5,
    condition: { choice: "b" }
  },
  {
    id: 5,
    text: "Spider-Man suele ocultar su identidad para proteger a los que ama. ¿Tú lo entenderías?",
    choices: [
      { id: "a", text: "Sí. El amor también es proteger." },
      { id: "b", text: "No. Prefiero transparencia total." }
    ]
  },
  {
    id: 6,
    text: "Tu corazón es tan valiente como el de Peter. A veces, lo más sincero no se dice… se demuestra. Como lo que siento por ti.",
    buttonText: "Siguiente",
    nextStepId: 8,
    condition: { choice: "a" }
  },
  {
    id: 7,
    text: "La verdad es difícil de ocultar… y lo que siento también. Pero entiendo, quizás no soy tu héroe ideal.",
    buttonText: "Siguiente",
    nextStepId: 8,
    condition: { choice: "b" }
  },
  {
    id: 8,
    text: "Imagina que te invito a balancearte entre edificios, sin red de seguridad. ¿Qué harías?",
    choices: [
      { id: "a", text: "Me lanzo contigo. Confío." },
      { id: "b", text: "Me da miedo… pero lo intento contigo." }
    ]
  },
  {
    id: 9,
    text: "Eso basta para mí. Si confías en mí, aunque tiemble el mundo… quiero que sepas algo.",
    buttonText: "Revelar Confesión",
    nextStepId: 10,
    condition: { choice: "a" }
  },
  {
    id: 10,
    text: "A veces el amor se lanza sin telarañas. Me gustas. Mucho. ¿Quieres intentar algo conmigo? ❤️",
    buttonText: "Sí",
    nextStepId: 12,
    condition: { choice: "a" },
    end: true,
    confession: true
  },
  {
    id: 11,
    text: "Eres valiente aunque tengas miedo. Y eso me inspira… porque así me siento yo al decirte esto.",
    buttonText: "Revelar Confesión",
    nextStepId: 10,
    condition: { choice: "b" }
  },
  {
    id: 12,
    text: "Quizás este no fue nuestro momento. Pero como Peter y Gwen, siempre llevaré esta historia en mi corazón.",
    end: true,
    confession: false
  }
];

export function useGameModel() {
  const [stepId, setStepId] = useState(1);
  const [choice, setChoice] = useState<string | null>(null);
  const [choicesMade, setChoicesMade] = useState<string[]>([]);
  const [showConfession, setShowConfession] = useState(false);

  // Use the current choice to filter conditional steps
  let currentStep = steps.find((s) => {
    if (s.id !== stepId) return false;
    if (!s.condition) return true;
    if (!choice) return false;
    return s.condition.choice === choice;
  });
  if (!currentStep) {
    currentStep = steps.find((s) => s.id === stepId);
  }

  const nextStep = () => {
    if (choice) {
      setChoicesMade((prev) => [...prev, choice]);
    }
    const nextStepId = currentStep?.nextStepId;
    if (nextStepId) {
      const nextStep = steps.find((s) => {
        if (s.id !== nextStepId) return false;
        if (!s.condition) return true;
        if (!choice) return true;
        return s.condition.choice === choice;
      });
      if (nextStep) {
        setStepId(nextStep.id);
        setChoice(null);
        if (nextStep.end) {
          setShowConfession(true);
        }
        return;
      }
    }
    // fallback: go to next step by incremental id
    const fallbackStep = steps.find((s) => s.id === stepId + 1);
    if (fallbackStep) {
      setStepId(fallbackStep.id);
      setChoice(null);
    }
  };

  const makeChoice = (id: string) => {
    setChoice(id);
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const revealConfession = () => {
    if (choice) {
      setChoicesMade((prev) => [...prev, choice]);
    }
    setShowConfession(true);
  };

  const restartGame = () => {
    setStepId(1);
    setChoice(null);
    setChoicesMade([]);
    setShowConfession(false);
  };

  return {
    stepId,
    choice,
    choicesMade,
    showConfession,
    currentStep,
    nextStep,
    makeChoice,
    revealConfession,
    restartGame,
  };
}
