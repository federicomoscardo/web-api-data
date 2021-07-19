import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import WebNavbar from './components/WebNavbar'
import Community from './pages/Community'

function App() {
  return (
    <div>
      <Router>
        <WebNavbar></WebNavbar>

        <Switch>
          <Route path="/community" exact>
            <Community />
          </Route>

          <Route>
            
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
