const useStyles = ({colored}) => {
	const DASHBOARD_TYPE={
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
	
	}

	return {
		container: '  d-flex flex-column align-items-center h-100 col-12  ',
		div: ' d-flex align-items-center  py-3 col-11  ',
		userimg: 'col-3  d-flex h-100 align-items-center justify-content-center ',
		containerColor: 'col-9 h-100   ',
		textLevel: 'col-12 d-flex  ',
		boxcontainer: 'col-12   bg-light boxcontainer',
		calendar: 'col-12  d-flex  ',
		line: 'col-12  d-flex  my-3 align-items-center justify-content-between ',
		summary: 'col-7 mx-2 d-flex justify-content-center align-items-center',
		see: 'col-6',
		img: 'd-flex justify-content-center',
		btn: 'col-10 align-self-center my-5',
		boxColor:`colored colored--${DASHBOARD_TYPE[colored]}`,
	};
};

export default useStyles;
