import { useTranslation } from "react-i18next";
import ButtonRadio from "../../components/ButtonRadio/ButtonRadio";
import useStyles from "./useStyles";
import useForm from './UseForm';
import { RegisterValidate } from "./RegisterValidate";

const SexSelector = () => {

	const { handleChange, values} = useForm(
		RegisterValidate,
		
	);
	const { t } = useTranslation();
	const styles = useStyles();

	return (
		<div>
			<div className={styles.containerButtonsRadio}>
				<div className={styles.ButtonRadio}>
					<ButtonRadio
						type={'radio'}
						name={'sex'}
						id={'btnradio1'}
						value={'F'}
						checked={values.sex === 'F' ? true : false}
						onChange={handleChange}
						colors={1}
						htmlFor={'btnradio1'}
						label={t('auth.register.sex1')}
					/>
				</div>

				<div className={styles.ButtonRadio}>
					<ButtonRadio
						type='radio'
						name={'sex'}
						id={'btnradio2'}
						value={'M'}
						checked={values.sex === 'M' ? true : false}
						onChange={handleChange}
						colors={2}
						label={t('auth.register.sex2')}
						htmlFor={'btnradio2'}
					/>
				</div>
				<div className={styles.ButtonRadio}>
					<ButtonRadio
						type={'radio'}
						name={'sex'}
						id={'btnradio3'}
						value={'O'}
						checked={values.sex === 'O' ? true : false}
						onChange={handleChange}
						colors={3}
						htmlFor={'btnradio3'}
						label={t('auth.register.sex3')}
					/>
				</div>
			</div>
		</div>
	);
};

export default SexSelector;
