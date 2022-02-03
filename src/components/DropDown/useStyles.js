const useStyles = ({ shadow, fold }) => {
	return {
		mainContainer:
			'mainContainer d-flex justify-content-between align-items-center col-12',
		dropDownContainer: 'col-12',
		bar: 'bar d-flex justify-content-between align-items-center col-12',
		arrow: 'arrow',
		arrowUnfolded: 'arrow__unfolded',
		textContainer: 'textContainer',
		//--------------------------------------

		//---------------------------------------
		description: `description--${fold} description--${
			shadow && 'shadow'
		}  col-12`,
	};
};

export default useStyles;
