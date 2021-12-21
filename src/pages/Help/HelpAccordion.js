import './Help.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import HelpAccordionBlue from './HelpAccordionBlue';

const HelpAccordion = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div class='accordion  ' id='accordionExample'>
				<div class='accordion-item  '>
					<h2 class='accordion-header  ' id='headingTwo'>
						<button
							class='accordion-button  bg-light text-dark'
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
						class='accordion-collapse collapse'
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div class='accordion-body row'>
							<div className='col-12'>
								<p>{t('help.main.accordionInside1')}</p>
							</div>
							<div className='col-4'>
								<div className='col-12'>
									<p>{t('help.main.accordionInside2')}</p>
								</div>
								<div className='col-12'>
									<p>{t('help.main.accordionInside3')}</p>
								</div>
							</div>
							<div className='col-8'>
								<input className='col-12'></input>
								<input className='col-12'></input>
								<Button
									className='col align-self-end  '
									title={t('help.main.btnSend')}
								/>
							</div>
						</div>
					</div>
				</div>
				<div class='accordion-item'>
					<h2 class='accordion-header' id='headingThree'>
						<button
							class='accordion-button bg-light text-dark'
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
						class='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'
					>
						<div class='accordion-body'>
							<HelpAccordionBlue />
						</div>
					</div>
				</div>
			</div>
			<div>
				<button className='accordion-button bg-light text-dark'>
					terminos y condiciones
				</button>
				<button className='accordion-button bg-light text-dark'>
					contacto
				</button>
			</div>
		</div>
	);
};

export default HelpAccordion;
