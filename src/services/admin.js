import {
	privateDelete,
	privateGet,
	privatePost,
	privatePut,
} from '../axios/privateInstance';

const baseURL = '/admin';

export const getUserById = (id) => privateGet({ url: `${baseURL}/users/${id}`});
export const enableOrDisableUser = (id, currentState) => privateGet({ url: `${baseURL}/${currentState ? 'disable' : 'enable'}-user/${id}`});
export const changeUserLevel = (id, newLevel) => privatePut({ url: `${baseURL}/level-user/${id}`, body: { level: newLevel }  });
export const getUsers = ({ offset, search, limit }) => {

	let query = offset || search || limit ? '?' : '';
	let added = false;
	if(query) {
		if(offset){
			query += 'offset=' + offset;
			added = true;
		}
		if(search){
			if(added){
				query += '&';
			}
			query += 'search=' + search;
		}
		if(limit){
			if(added){
				query += '&';
			}
			query += 'limit=' + limit;
		}
	}
	
	return privateGet({ url: `${baseURL}/users${query}` });
}

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

