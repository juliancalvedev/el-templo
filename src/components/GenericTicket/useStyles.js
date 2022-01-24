const useStyles = ({ mode, list }) => {
	return {
		mainDiv1: `${
			list
				? 'col-6 d-flex container1 '
				: `col-6 d-flex container1 container1--list`
		}`,
		divText1: `${
			list
				? ' col-2 text-1-container d-flex align-items-center justify-content-center '
				: ''
		}`,
		divText2: `${list ? 'd-flex col-12 ' : ' '}`,
		divText3: `${list ? 'col-6 d-flex justify-content-end' : 'col-9'}`,
	};
};

export default useStyles;
