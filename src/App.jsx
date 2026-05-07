import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app-shell">
      <section className="counter-panel" aria-labelledby="counter-title">
        <h1 id="counter-title">Counter</h1>
        <output className="counter-value" aria-live="polite">
          {count}
        </output>
        <div className="counter-actions" aria-label="Counter controls">
          <button type="button" onClick={() => setCount((value) => value - 1)}>
            -
          </button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            +
          </button>
        </div>
      </section>
    </main>
  );
}
