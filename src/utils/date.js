export const cutDate = (date) => {
	const trimDate = date ? date.substring(0, 10).split('-').reverse().join('/') : date;

	return trimDate;
};
