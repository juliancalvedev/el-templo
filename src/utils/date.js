export const cutDate = (date) => {
	const trimDate = date ? date.substring(0, 10).split('-').reverse().join('/') : date;

	return trimDate;
};

export const compareWithCurrDate = (date) => {
	const currDate = new Date();
	const compareDate = new Date(date);
	return currDate > compareDate;
}
