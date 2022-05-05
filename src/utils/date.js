export const cutDate = (date) => {
	const trimDate = date ? date.substring(0, 10).split('-').reverse().join('/') : date;

	return trimDate;
};

export const compareWithCurrDate = (date) => {
	const currDate = new Date();
	const compareDate = new Date(date);
	return currDate > compareDate;
}

export const maxDateOfBirth = () => {
	// format yyyy-mm-dd
	const year = new Date().getFullYear()
	const month = new Date().getMonth() + 1
	const day = new Date().getDate()

	const dateOfTodayFormat = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`

	return dateOfTodayFormat
}
