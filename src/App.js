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
        <Switch>

          <Route path="/" exact>
            <WebNavbar></WebNavbar>
            <div className="home-greeting"><p>WELCOME!!</p></div>
          </Route>

          <Route path="/community" exact>
            <WebNavbar></WebNavbar>
            <Community />
          </Route>

          <Route path="/products" exact>
            <WebNavbar></WebNavbar>
            <Products />
          </Route>

        </Switch>
      </Router>
      
    </Container>
  );
}

export default App;
