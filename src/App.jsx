import componentsImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import Coreconcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Coreconcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
