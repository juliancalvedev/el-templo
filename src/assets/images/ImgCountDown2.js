import Text from '../../components/Text/Text';

const ImgCountDown2 = () => {
	return (
		<div className='d-flex flex-column'>
			<svg
				width='174'
				height='174'
				viewBox='0 0 174 174'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M87 174C135.049 174 174 135.049 174 87C174 38.9512 135.049 0 87 0C38.9512 0 0 38.9512 0 87C0 135.049 38.9512 174 87 174Z'
					fill='#2E4F77'
				/>
				<path
					d='M87 0V87L148.552 148.553C160.71 136.376 168.985 120.87 172.334 103.992C175.683 87.1148 173.956 69.6234 167.369 53.7275C160.783 37.8315 149.633 24.2441 135.329 14.6814C121.024 5.11872 104.206 0.00981836 87 0V0Z'
					fill='#2E4F77'
				/>
				<path
					d='M87 149C121.242 149 149 121.242 149 87C149 52.7583 121.242 25 87 25C52.7583 25 25 52.7583 25 87C25 121.242 52.7583 149 87 149Z'
					fill='#E0C6A8'
				/>
				<path
					d='M87 25V87L130.865 130.865C139.529 122.187 145.426 111.137 147.813 99.1094C150.2 87.0818 148.968 74.6167 144.275 63.2885C139.581 51.9604 131.635 42.2774 121.441 35.4626C111.247 28.6478 99.2621 25.007 87 25V25Z'
					fill='#E0C6A8'
				/>
			</svg>
			<div style={{ position: 'relative', bottom: '50%', left: '1%' }}>
				<Text text='2' size='5' color='5' bold font='2' />
			</div>
		</div>
	);
};

export default ImgCountDown2;