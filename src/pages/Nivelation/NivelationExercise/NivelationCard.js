import { useTranslation } from 'react-i18next';
import Input from '../../../components/Input/Input';
import Text from '../../../components/Text/Text';

const NivelationCard = ({ title, onChange, value }) => {
    const { t } = useTranslation();
    return (
        <div className='col-12'>
            <Text
                text={`${t('user.nivelation.howMany')} ${title} ${t('user.nivelation.canYouDo')}`}
            />
            <Input type='number' value={value} onChange={onChange} />
        </div>
    );
};

export default NivelationCard;
