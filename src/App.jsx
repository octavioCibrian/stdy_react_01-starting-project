import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data';
import Header from "./components/Header/Header";
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  let bodySubMenu = "Please click a button";
  function handleClick(selectedMenu) {
    setSelectedTopic(selectedMenu)
  }
  let tabContent = <p>Please select a topic</p>;
  if(selectedTopic) {
    tabContent = <div id="tab-conent">
                    <h3>{EXAMPLES[selectedTopic].title} </h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>
                      {EXAMPLES[selectedTopic].code}
                      </code>
                    </pre>
                  </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(itemConcept=> <CoreConcept {...itemConcept}></CoreConcept>)}
            
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}  onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;