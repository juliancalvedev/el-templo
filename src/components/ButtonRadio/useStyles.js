const useStyles = ({ colors, className = '' }) => {
	const BUTTON_TYPES = {
		1: '1',
		2: '2',
		3: '3',
	};

	return {
		container: 'col-12',
		button: `btn btn-check `,
		label: `btn btn-outline btn-all col-12 checked label-colors--${BUTTON_TYPES[colors]} ${className}`,
	};
};

export default useStyles;
