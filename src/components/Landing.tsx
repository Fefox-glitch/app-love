export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <main className="landing-container">
      <h1>🕷️ Spider Love Story</h1>
      <p>Una historia interactiva donde el amor se cuelga entre telarañas.</p>
      <button className="start-button" onClick={onStart}>Iniciar juego</button>
    </main>
  );
}
