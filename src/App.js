import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTab from './components/ViewTab'
import { LIST_VIEW, CHART_VIEW } from './utility'
const items = [
	{
		"id": 1,
		"title": "去云南旅游",
		"price": 200,
		"date": "2018-09-10",
		"category": {
			"id": "1",
			"name": "旅行",
			"type": "outcome"
		}
	},
	{
		"id": 2,
		"title": "去云南旅游",
		"price": 400,
		"date": "2018-09-10",
		"category": {
			"id": "1",
			"name": "旅行",
			"type": "outcome"
		}
	}
]

function App() {
  return (
    <div className="App">
		<ViewTab 
			activeTab={LIST_VIEW}
			onTabChange={(view) => {console.log(view)}}
		/>
    </div>
  );
}

export default App;
