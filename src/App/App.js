import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Dependant Components
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills';

// CSS
import './App.css';

const App = () => (
  <ReactFullpage 
    licenseKey = {'k#7EkQX$k8'}
    scrollingSpeed = {1000}

    render = { 
      ({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <Projects />
            <Skills />
          </ReactFullpage.Wrapper>
        )
      }
    }
  />
);

export default App;
