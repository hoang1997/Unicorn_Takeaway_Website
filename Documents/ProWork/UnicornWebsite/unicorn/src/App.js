import React from 'react';
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
      
       
        <Route exact path='/' component={App} />
        <Route path='/AboutUs' component={AboutUs} />

      
      </div>
    </Router>
  );
}

export default App;
