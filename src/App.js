import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/x2'
import About from './components/about/xe42edb53'
import Contact from './components/contact/xab66a7dc'
import Service from './components/service/x389cd3ef'
import Shipping from './components/shipping/x93270faf'

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
