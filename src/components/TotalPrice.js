import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => {
	return (
		<div>
			<span className="col-1">收入：{income}</span>
			<span className="col-1">收入：{outcome}</span>
		</div>
	)
}

TotalPrice.propTypes = {
	income: PropTypes.number.isRequired,
	outcome: PropTypes.number.isRequired,
}

export default TotalPrice