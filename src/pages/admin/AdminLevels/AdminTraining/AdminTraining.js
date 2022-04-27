import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import RoutineTable from '../../../../components/RoutineTable/RoutineTable';

const AdminTraining = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { trainingDayId, trainingLevel, trainingDay, trainingBlock } = useLocation().state;

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            col={12}
            text={
                `${t('admin.routines.level')}: ${trainingLevel} -
             ${t('admin.routines.block')}: ${trainingBlock} -
              ${t('admin.routines.day')}: ${trainingDay}`
            }
            navbar
            scroll
            alignCenter
        >
            <RoutineTable trainingDayId={trainingDayId} isEditing />
        </MainContainer>
    );
};

export default AdminTraining;
