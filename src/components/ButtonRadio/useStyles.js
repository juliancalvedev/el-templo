const useStyles = ({ stylesButtonRadio, className = '' }) => {
	const BUTTONRADIO_TYPES = {
		1: '1',
		2: '2',
		3: '3',
	};

	return {
		containerInput: 'mt-1 col-12',
		button: `btn-check d-flex justify-content-center align-items-center`,
		label: ` py-1 d-flex align-items-center justify-content-center col-12 btn-outline btn-all checked label-stylesButtonRadio--${BUTTONRADIO_TYPES[stylesButtonRadio]} ${className}`,
	};
};

export default useStyles;
