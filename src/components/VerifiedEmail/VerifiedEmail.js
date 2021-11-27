import React from 'react'

import Title from '../Title/Title'
import AuxText from '../AuxText/AuxText'
import Button from '../Button/Button'

import { useTranslation } from 'react-i18next'

const VerifiedEmail = () => {
   const { t } = useTranslation()


   return (

      <div>

         <Title text={t('auth.emailVerified.title')} />

         <AuxText text={t('auth.emailVerified.auxText')} />

         <Button text={t('auth.emailVerified.btnNext')} />

      </div>
   )
}

export default VerifiedEmail
