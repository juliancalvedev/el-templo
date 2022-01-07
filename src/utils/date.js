export const cutDate = (date) => {
	const trimDate = date.substring(0, 10).split('-').reverse().join('-');

	return trimDate;
};
