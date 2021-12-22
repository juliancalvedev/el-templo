import './Help.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import AuxText from '../../components/AuxText/AuxText';
const HelpAccordionBlue = ({accordionType='blue',color='color'}) => {
    const {t}=useTranslation();
	return (
		<div class='accordion accordion-flush ' id='accordionFlushExample'>
			<p className='fs-4 pt-2 mb-0'>{t('help.main.faqs')}</p>
			<p >{t('help.main.fq')}</p>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='flush-headingOne'>
					<button
						class={`accordion-button accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseOne'
						aria-expanded='false'
						aria-controls='flush-collapseOne'
					>
						{t('help.main.accordionTextBlue1')}
					</button>
				</h2>
				<div
					id='flush-collapseOne'
					class='accordion-collapse collapse'
					aria-labelledby='flush-headingOne'
					data-bs-parent='#accordionFlushExample'
				>
					<div class={`accordion-body accordion-body--${color}`}>
						{t('help.main.auxText3')}
					</div>
				</div>
			</div>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='flush-headingTwo'>
					<button
						class={`accordion-button accordion-button--${accordionType}  `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseTwo'
						aria-expanded='false'
						aria-controls='flush-collapseTwo'
					>
						{t('help.main.accordionTextBlue2')}
					</button>
				</h2>
				<div
					id='flush-collapseTwo'
					class='accordion-collapse collapse'
					aria-labelledby='flush-headingTwo'
					data-bs-parent='#accordionFlushExample'
				>
					<div class={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the second item's accordion body. Let's imagine this being
						filled with some actual content.
					</div>
				</div>
			</div>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='flush-headingThree'>
					<button
						class={`accordion-button  accordion-button--${accordionType}  `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseThree'
						aria-expanded='false'
						aria-controls='flush-collapseThree'
					>
						{t('help.main.accordionTextBlue3')}
					</button>
				</h2>
				<div
					id='flush-collapseThree'
					class='accordion-collapse collapse'
					aria-labelledby='flush-headingThree'
					data-bs-parent='#accordionFlushExample'
				>
					<div class={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the third item's accordion body. Nothing more exciting
						happening here in terms of content, but just filling up the
						space to make it look, at least at first glance, a bit more
						representative of how this would look in a real-world
						application.
					</div>
				</div>
			</div>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='flush-headingFour'>
					<button
						class={`accordion-button accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseFour'
						aria-expanded='false'
						aria-controls='flush-collapseFour'
					>
						{t('help.main.accordionTextBlue4')}
					</button>
				</h2>
				<div
					id='flush-collapseFour'
					class='accordion-collapse collapse'
					aria-labelledby='flush-headingFour'
					data-bs-parent='#accordionFlushExample'
				>
					<div class={`accordion-body accordion-body--${color}`}>
						Placeholder content for this accordion, which is intended to
						demonstrate the <code>.accordion-flush</code> class. This is
						the third item's accordion body. Nothing more exciting
						happening here in terms of content, but just filling up the
						space to make it look, at least at first glance, a bit more
						representative of how this would look in a real-world
						application.
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpAccordionBlue;
