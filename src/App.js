import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap'

import WebNavbar from './components/WebNavbar'
import Community from './pages/Community'
import Products from './pages/Products'

function App() {
  return (
    <Container fluid>
      <Router>
        <WebNavbar></WebNavbar>
          
        <Switch>
          <Route path="/community" exact>
            <Community />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </Router>
      
    </Container>
  );
}

export default App;
