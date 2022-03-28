import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import InputSelect from '../../../../components/InputSelect/InputSelect'
import MainContainer from '../../../../components/MainContainer/MainContainer'
import Tag from '../../../../components/Tag/Tag'
import Text from '../../../../components/Text/Text'
import TextArea from '../../../../components/TextArea/TextArea'
import useFetch from '../../../../hooks/useFetch'
import { getTagsList, postNewExercise } from '../../../../services/admin'

const AdminCreateEditExercise = () => {
    const lang = localStorage.getItem('lang').toUpperCase();
    const { t } = useTranslation()

    const [newExerciseData, setNewExerciseData] = useState({
        titleES: '',
        titleEN: '',
        descriptionES: '',
        descriptionEN: '',
        tags: [],
        video: ''
    });
    const [tagsList, setTagsList] = useState();
    const [submitIsDisabled, setSubmitIsDisabled] = useState(true)

    const [tagsListFetch, tagsListError, apiCallGetTagsList] = useFetch({
        service: () => getTagsList(),
        callNow: true,
        globalLoader: true,
        callback: () => {
            let auxArr = tagsListFetch.tags
            auxArr.unshift({
                _id: 'default',
                titleEN: "Select Tags",
                titleES: "Seleccione Tags"
            })
            setTagsList(auxArr)
        },
    });

    const [newExerciseResponse, newExerciseError, apiCallCreateNewExercise] = useFetch({
        service: () => postNewExercise(newExerciseData),
        globalLoader: true,
        callback: () => { },
    });

    const handleOnChangeInputs = (e) => {
        setNewExerciseData({
            ...newExerciseData,
            [e.target.name]: e.target.value
        })
    }

    const addTag = (e) => {
        const tagId = e.target.value
        if (tagId !== 'default') { // Prevent Default
            if (!newExerciseData?.tags.some((tag) => tag === tagId)) { // Prevent repetitive Tags
                setNewExerciseData({
                    ...newExerciseData,
                    tags: [...newExerciseData.tags, tagId]
                })
            }
        }
    }

    const deleteTag = (tag) => {
        const auxArr = [...newExerciseData?.tags]
        for (let i = 0; i < auxArr.length; i++) {
            if (auxArr[i] === tag) {
                auxArr.splice(auxArr.indexOf(tag), 1)
            }
        }
        setNewExerciseData({
            ...newExerciseData,
            tags: auxArr
        })
    }

    const onSubmit = () => {
        apiCallCreateNewExercise()
    }

    useEffect(() => {
        if (
            newExerciseData?.titleES === '' ||
            newExerciseData?.titleEN === '' ||
            newExerciseData?.descriptionES === '' ||
            newExerciseData?.descriptionEN === '' ||
            newExerciseData?.tags?.length === 0
        ) {
            setSubmitIsDisabled(true)
        } else {
            setSubmitIsDisabled(false)
        }
    }, [newExerciseData])

    // console.log(newExerciseData)
    // console.log(tagsList)
    // console.log(alerts)

    return (
        // TODO Poner Translate al TopBar
        <MainContainer col='12' navbar scroll topbar back bg={1} color={2} text={'Crear Nuevo Ejercicio'} >
            <div className='col-12 d-flex flex-column justify-content-start align-items-center h-100'>
                <div className='col-10 d-flex flex-column align-items-center'>
                    <Input
                        label={t(`admin.exercises.video`)}
                        placeholder='<iframe>...'
                        name='video'
                        onChange={handleOnChangeInputs}
                    />
                    <Input
                        label={t(`admin.exercises.spanishName`)}
                        placeholder={t(`admin.exercises.spanishName`)}
                        name='titleES'
                        onChange={handleOnChangeInputs}
                    />
                    <TextArea
                        label={t(`admin.exercises.spanishDescription`)}
                        placeholder={t(`admin.exercises.spanishDescription`)}
                        name='descriptionES'
                        onChange={handleOnChangeInputs}
                    />
                    <Input
                        label={t(`admin.exercises.englishName`)}
                        placeholder={t(`admin.exercises.englishName`)}
                        onChange={handleOnChangeInputs}
                        name='titleEN'
                    />
                    <TextArea
                        label={t(`admin.exercises.englishDescription`)}
                        placeholder={t(`admin.exercises.englishDescription`)}
                        name='descriptionEN'
                        onChange={handleOnChangeInputs}
                    />
                    {tagsList ?

                        <div className='w-100 mt-2'>
                            <InputSelect
                                readOnly
                                label={t(`admin.exercises.tags`)}
                                name='tags'
                                onClick={(e) => addTag(e)}
                                options={tagsList?.map((tag) => {
                                    return {
                                        value: tag._id,
                                        name: `${tag[`title${lang}`]}`,
                                    };
                                })}
                                value={true}
                            />
                            {newExerciseData?.tags <= 0 &&
                                <div className='col-12 d-flex justify-content-start'>
                                    <Text
                                        text={t(`admin.exercises.minOneTag`)}
                                        size={1}
                                        color={1}
                                    />
                                </div>
                            }
                        </div>
                        :
                        <div className='mt-4'>
                            <Text text={'Cargando Tags'} />
                        </div>
                    }
                    <div className='col-12 d-flex align-items-center flex-wrap mt-2 pb-4'>
                        {newExerciseData?.tags?.map((tag) => {
                            const tagToShow = tagsList.find(e => e._id === tag)
                            return <Tag
                                key={tag}
                                text={`${tagToShow[`title${lang}`]}`}
                                onClick={() => deleteTag(tag)}
                            />
                        })}
                    </div>
                </div>

                <div className='col-10 my-3'>
                    <Button text={t('admin.exercises.createExercise')} onClick={onSubmit} disabled={submitIsDisabled} />
                </div>
            </div>
        </MainContainer>
    )
}

export default AdminCreateEditExercise