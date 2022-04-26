import {
	privateDelete,
	privateGet,
	privatePost,
	privatePut,
} from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = () => privateGet({ url: `${baseURL}/users` });

export const getExercises = () => privateGet({ url: `${baseURL}/exercise` });

export const getLevels = () => privateGet({ url: `level` });

export const getLevelByNumber = (levelNumber) => privateGet({ url: `training/level/${levelNumber}` })

export const getExerciseById = ({ id }) => privateGet({ url: `${baseURL}/exercise/${id}` });

export const getRoutineById = ({ id }) => privateGet({ url: `training/routine/${id}` });

export const postNewTag = ({ titleES, titleEN, bodyPart }) =>
	privatePost({ url: `${baseURL}/tag`, body: { titleES, titleEN, bodyPart } });

export const postNewExercise = ({
	titleES,
	titleEN,
	descriptionES,
	descriptionEN,
	tags,
	video }) => {
	return privatePost({
		url: `${baseURL}/exercise`, body: {
			titleES,
			titleEN,
			descriptionES,
			descriptionEN,
			tags,
			video
		}
	});
}

export const putEditExercise = ({ id, body }) => {

	return privatePut({
		url: `${baseURL}/exercise/${id}`, body: {
			titleES: body.titleES,
			titleEN: body.titleEN,
			descriptionES: body.descriptionES,
			descriptionEN: body.descriptionEN,
			tags: body.tags,
			video: body.video
		}
	});
}

export const putEditedTag = ({ id, titleES, titleEN, bodyPart }) =>
	privatePut({ url: `${baseURL}/tag/${id}`, body: { titleES, titleEN, bodyPart } });

export const getTagsList = () => privateGet({ url: `${baseURL}/tag` });

export const deleteTag = (id) => privateDelete({ url: `${baseURL}/tag/${id}` });

export const getBodyParts = () => privateGet({ url: `/public/body-parts` });

