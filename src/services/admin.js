import {
	privateDelete,
	privateGet,
	privatePost,
	privatePut,
} from '../axios/privateInstance';

const baseURL = '/admin';

export const getUsers = () => privateGet({ url: `${baseURL}/users` });

export const postNewTag = ({ titleES, titleEN, bodyPart }) =>
	privatePost({ url: `${baseURL}/tag`, body: { titleES, titleEN, bodyPart } });

export const postNewExercise = ({
	titleES,
	titleEN,
	descriptionES,
	descriptionEN,
	tags,
	video }) => {
	privatePost({
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

export const putEditedTag = ({ id, titleES, titleEN, bodyPart }) =>
	privatePut({ url: `${baseURL}/tag/${id}`, body: { titleES, titleEN, bodyPart } });

export const getTagsList = () => privateGet({ url: `${baseURL}/tag` });

export const deleteTag = (id) => privateDelete({ url: `${baseURL}/tag/${id}` });

export const getBodyParts = () => privateGet({ url: `/public/body-parts` });

