import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Dependant Components
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills';
import Navigation from '../Components/Navigation/Navigation'

// CSS
import './App.css';


class App extends React.Component {
  render() {
    const Fullpage = () => (
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
              );
            }
          }
        />
    )

    return (
      <div className="App">
        <Navigation ></Navigation>
        <Fullpage ></Fullpage>
      </div>
    );
  }
}

export default App;
