import './Help.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import HelpAccordionBlue from './HelpAccordionBlue';
import Input from '../../components/Input/Input';

const HelpAccordion = ({ icon = 'icon' }) => {
	const { t } = useTranslation();
	return (
		<div>
			<div className='accordion col-12 ' id='accordionExample'>
				<div className='accordion-item  '>
					<h2 className='accordion-header ' id='headingTwo '>
						<button
							className='accordion-button  bg-light text-dark '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
						>
							{t('help.main.accordionText1')}
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse  '
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body row'>
							<div className='col-12 my-3 d-flex justify-content-start pr-3'>
								<Text
									bold
									color={1}
									size={3}
									text={t('help.main.accordionInside1')}
								/>
							</div>
							<div className='col-12'>
								<div className='col-12 d-flex'>
									<div className='col-3 d-flex align-items-center'>

										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside2')}
										/>
									</div>
									<div className='col-9'>

										<Input
											type='text'
											className='my-0'
										/>
									</div>
								</div>
								<div className='col-12 d-flex justify-content-start mx-0 pt-3 pr-3'>
									<div className='col-3 d-flex align-items-start'>

										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside3')}
										/>
									</div>
									<div className='col-9'>
										<textarea
											rows='5'
											cols='21'
											className='col-12  input__style border border-1  mt-1
									p-3'
										></textarea>

									</div>
								</div>
							</div>

							<div className='col-12 d-flex justify-content-end'>
								<Button title={t('help.main.btnSend')} size='sm' />
							</div>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<button
							className='accordion-button bg-light text-dark '
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							{t('help.main.accordionText2')}
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body '>
							<Text
								bold
								className='d-flex justify-content-start mt-3 px-2 '
								color={1}
								size={3}
								text={t('help.main.faqs')}
							/>
							<Text
								color={1}
								size={2}
								className='d-flex justify-content-start mb-2 px-2'
								text={t('help.main.fq')}
							/>
							<HelpAccordionBlue />
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* TODO  cambiar button por componente Button*/}
				<button
					className={`accordion-button bg-light  text-dark accordion-button--${icon}`}
				>
					{t('help.main.btn2')}
				</button>
				<button
					className={`accordion-button bg-light  text-dark accordion-button--${icon}`}
				>
					{t('help.main.btn3')}
				</button>
			</div>
		</div>
	);
};

export default HelpAccordion;
