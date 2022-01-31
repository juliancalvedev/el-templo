const useStyles = ({ shadow }) => {
	return {
		mainContainer:
			'mainContainer d-flex justify-content-between align-items-center col-12',
		bar: 'bar d-flex justify-content-between align-items-center col-12',
		//--------------------------------------
		folded: 'folded d-flex justify-content-between align-items-center col-12',
		arrow: 'arrow',
		descriptionContainerFolded: `description__containerFolded col-10`,
		//---------------------------------------
		unfolded: `unfolded unfolded--${
			shadow && 'shadow'
		} d-flex flex-column justify-content-between align-items-center col-12`,
		unfoldedArrow: 'unfolded__arrow',
		descriptionContainer: `description__container col-10 `,
	};
};

export default useStyles;
