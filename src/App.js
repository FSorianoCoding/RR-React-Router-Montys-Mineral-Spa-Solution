import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <Navbar variant="dark" bg='dark' >
          <Container>
            <Navbar.Brand>Monty's Mineral SPA</Navbar.Brand>
            <Navbar.Text>
              <Link to="/">Home</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/about">About Us</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/packages">Our Packages</Link>
            </Navbar.Text>
          </Container>
        </Navbar>



        <div className="display">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;





