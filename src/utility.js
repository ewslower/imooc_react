export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const padLeft = (n) => {
	return n < 10 ? '0' + n : n
}

export const range = (size, startAt = 0) => {
	const arr = []
	for(let i = 0; i < size; i++) {
		arr[i] = startAt + i
	}
	return arr
}

export const parseToYearAndMonth = (str) => {
	const date = str ? new Date(str) : new Date(str)
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
	}
}