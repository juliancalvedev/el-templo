const useStyles = ({ stylesButtonRadio, className = '' }) => {
	const BUTTONRADIO_TYPES = {
		1: '1',
		2: '2',
		3: '3',
	};

	return {
		containerInput: 'mt-1',
		button: `btn btn-check d-flex justify-content-center align-items-center`,
		label: `btn col-12 btn-outline btn-all checked label-stylesButtonRadio--${BUTTONRADIO_TYPES[stylesButtonRadio]} ${className}`,
	};
};

export default useStyles;
