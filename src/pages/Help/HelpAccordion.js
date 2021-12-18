import './Help.scss'
import {useTranslation} from 'react-i18next';
import Button from '../../components/Button/Button';

const HelpAccordion = () => {
    const {t}=useTranslation();
    return (
			<div class='accordion ' id='accordionExample'>
				<div class='accordion-item  '>
					<h2 class='accordion-header  ' id='headingTwo'>
						<button
							class='accordion-button  collapsed'
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
                                <Button className='col align-self-end  ' title={t('help.main.btnSend')}/>
							</div>
						</div>
					</div>
				</div>
				<div class='accordion-item'>
					<h2 class='accordion-header' id='headingThree'>
						<button
							class='accordion-button collapsed'
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
							<strong>This is the third item's accordion body.</strong>{' '}
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element.
							These classes control the overall appearance, as well as
							the showing and hiding via CSS transitions. You can modify
							any of this with custom CSS or overriding our default
							variables. It's also worth noting that just about any HTML
							can go within the <code>.accordion-body</code>, though the
							transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		);
}

export default HelpAccordion
