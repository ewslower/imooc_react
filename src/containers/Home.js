import React, { Component } from 'react'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import PriceList from '../components/PriceList'
import { LIST_VIEW, CHART_VIEW, parseToYearAndMonth } from '../utility'

const categories = {
	"1" : {
		"id": "1",
		"name": "旅行",
		"type": "income"
	},
	"2" : {
		"id": "2",
		"name": "旅行",
		"type": "outcome"
	}
}
const items = [
	{
		"id": 1,
		"title": "去云南旅游",
		"price": 200,
		"date": "2018-09-10",
		"cid": 1
	},
	{
		"id": 2,
		"title": "去云南旅游",
		"price": 400,
		"date": "2018-09-10",
		"cid": 2
	}
]

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items,
			currentDate: parseToYearAndMonth(),
			tabView: LIST_VIEW,
		}
	}

	render() {
		const { items, currentDate, tabView } = this.state
		const itemsWithCategory = items.map(item => {
			item.category = categories[item.cid]
			return item
		})
		let totalIncome = 0, totalOutcome = 0
		itemsWithCategory.forEach(item => {
			if(item.category.type === "outcome") {
				totalOutcome += item.price
			} else {
				totalIncome += item.price
			}
		})
		return(
			<React.Fragment>
				<div className="row">
					<div className="col">
						<MonthPicker 
							year={2018}
							month={8}
							onChange={() => {}}
						/>
					</div>
					<div className="col">
						<TotalPrice 
							income={totalIncome}
							outcome={totalOutcome}
						/>
					</div>
				</div>
				<div className="content-area py-3 px-3">
					<ViewTab activeTab={LIST_VIEW} onTabChange={() => {}} />
					<PriceList 
						items={itemsWithCategory}
						onModifyItem={() => {}}
						onDeleteItem={() => {}}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default Home