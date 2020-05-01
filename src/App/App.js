import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Dependant Components
import Navigation from '../Components/Navigation/Navigation';
import Homepage from '../Components/Homepage/Homepage';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';

// CSS
import './App.css';


class App extends React.Component {
  render() {
    const Fullpage = () => (
      <ReactFullpage 
          licenseKey = {'k#7EkQX$k8'}
          scrollingSpeed = {800}

          render = { 
            ({state, fullpageApi}) => {
              return (
                  <ReactFullpage.Wrapper>
                    <Homepage></Homepage>
                    <Projects></Projects>
                    <Skills></Skills>
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
