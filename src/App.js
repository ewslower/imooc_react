import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/x2'
import About from './components/about/x10cc2fd4'
import Contact from './components/contact/x9f4e63b9'
import Service from './components/service/x5304fc3e'
import Shipping from './components/shipping/xbfcce1be'

import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
	<BrowserRouter>
		<Route exact path="/" component={Home} />
		<Route exact path="/about" component={About} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/service" component={Service} />
		<Route exact path="/shipping" component={Shipping} />
	</BrowserRouter >
  );
}

export default App;
