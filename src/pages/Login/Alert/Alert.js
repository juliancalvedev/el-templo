import { useTranslation } from 'react-i18next'
import ImgNotActivatedAccount from '../../../assets/images/ImgNotActivatedAccount'
import Modal from '../../../components/Modal/Modal'
import Text from '../../../components/Text/Text'

const Alert = ({ show, onClose }) => {

    const { t } = useTranslation();

    return (
        <Modal show={show} onClose={onClose}>
            <div className='d-flex flex-column justify-content-around'>
                <div className='d-flex justify-content-around'>
                    <div className='col-7 d-flex flex-column justify-content-center align-items-start'>
                        <Text size={4} bold text={t('auth.accountNotEnabled.title')} />
                        <Text size={3} bold text={t('auth.accountNotEnabled.subtitle')} />
                    </div>
                    <div className='col-5 d-flex justify-content-end'>
                        <ImgNotActivatedAccount />
                    </div>
                </div>
                <div className='mt-2'>
                    <Text size={3} text={t('auth.accountNotEnabled.description1')}/>
                    <Text size={3} text={t('auth.accountNotEnabled.description2')}/>
                </div>
            </div>
        </Modal>
    )
}

export default Alert
