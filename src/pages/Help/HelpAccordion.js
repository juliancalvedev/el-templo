import './Help.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import HelpAccordionBlue from './HelpAccordionBlue';


const HelpAccordion = ({icon='icon'}) => {
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
						className='accordion-collapse collapse '
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body row'>
							<div className='col-12 my-2 '>
								<Title
									type='title4 '
									text={t('help.main.accordionInside1')}
								/>
							</div>
							<div className='col-4'>
								<div className='col-12'>
									<p>{t('help.main.accordionInside2')}</p>
								</div>
								<div className='col-12'>
									<p>{t('help.main.accordionInside3')}</p>
								</div>
							</div>
							<div className='col-8 '>
								<input className='col-12 border border-1 rounded-pill '></input>
								<textarea
									rows='3'
									cols='21'
									className='col-12 border border-1 rounded-3'
								></textarea>
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
							className='accordion-button bg-light text-dark'
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
							<Title type='title4' text={t('help.main.faqs')} />
							<p>{t('help.main.fq')}</p>
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
