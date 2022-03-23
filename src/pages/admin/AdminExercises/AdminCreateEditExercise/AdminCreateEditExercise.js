import React, { useState, useEffect } from 'react'
import Input from '../../../../components/Input/Input'
import InputSelect from '../../../../components/InputSelect/InputSelect'
import MainContainer from '../../../../components/MainContainer/MainContainer'
import Text from '../../../../components/Text/Text'
import TextArea from '../../../../components/TextArea/TextArea'
import useFetch from '../../../../hooks/useFetch'
import { getTagsList } from '../../../../services/admin'

const AdminCreateEditExercise = () => {
    const lang = localStorage.getItem('lang').toUpperCase();

    const [newExerciseData, setNewExerciseData] = useState({
        titleES: '',
        titleEN: '',
        descriptionES: '',
        descriptionEN: '',
        tags: [],
        video: ''
    });

    const [tagsList, tagsListError, apiCallGetTagsList] = useFetch({
        service: () => getTagsList(),
        globalLoader: true,
        callback: () => { },
    });
    useEffect(() => {
        apiCallGetTagsList()
    }, [])


    // console.log(tagsList?.tags[0]._id)

    return (
        <MainContainer col='12' navbar scroll topbar back bg={1} color={2} text={'Crear Nuevo Ejercicio'} >
            <div className='col-12 d-flex flex-column justify-content-start align-items-center h-100'>
                <div className='col-10 d-flex flex-column align-items-center'>
                    <Input
                        label={
                            // t(`admin.tags.englishName`)
                            'Nombre en Español'
                        }
                        placeholder={"Título en Español"}
                    />
                    <TextArea
                        label='Descripción en Español'
                        placeholder={"Descripción en Inglés"}
                    />
                    <Input
                        label={
                            // t(`admin.tags.englishName`)
                            'Nombre en inglés'
                        }
                        placeholder={"Título en Inglés"}

                    />
                    <TextArea
                        label='Descripción en Inglés'
                        placeholder={"Descripción en Inglés"}

                    />
                    {tagsList ?
                        <div className='w-100 mt-2'>
                            <InputSelect
                                readOnly
                                label={
                                    // t(`admin.tags.category`)
                                    'Tags'
                                }
                                name='tags'
                                // =======================================
                                // Hacer que el input select pase un ID
                                // =======================================
                                options={tagsList?.tags?.map((tag) => {
                                    return {
                                        id: tag._id,
                                        name: `${tag[`title${lang}`]}`
                                    };
                                })}
                                value={true}
                            // style={
                            // 	newTagData?.bodyPart ===
                            // 		'Seleccione una categoría' ||
                            // 		newTagData?.bodyPart ===
                            // 		'Select a Category' ||
                            // 		newTagData?.bodyPart === ''
                            // 		? { color: 'red' }
                            // 		: { color: 'blue' }
                            // }
                            />
                        </div>
                        :
                        <div className='mt-4'>
                            <Text text={'Cargando Tags'} />
                        </div>
                    }
                </div>
            </div>
        </MainContainer>
    )
}

export default AdminCreateEditExercise