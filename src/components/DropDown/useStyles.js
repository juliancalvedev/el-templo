const useStyles = ({ shadow }) => {
	return {
		mainContainer:
			'mainContainer d-flex justify-content-between align-items-center col-12',
		dropDownContainer: 'col-12',
		bar: 'bar d-flex justify-content-between align-items-center col-12',
		arrow: 'arrow',
		textContainer: 'textContainer',
		arrowUnfolded: 'arrow__unfolded',
		//--------------------------------------
		descriptionFolded: `description__folded col-12`,
		//---------------------------------------
		descriptionUnFolded: `description__unfolded description__unfolded--${
			shadow && 'shadow'
		}  col-12`,
	};
};

export default useStyles;
