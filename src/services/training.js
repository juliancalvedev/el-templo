import { privateGet } from '../axios/privateInstance';

const baseURLTraining = '/training';
const baseURLRoutine = '/routine';


export const getNivelationRoutine = () =>
	privateGet({
		url: `${baseURLTraining}${baseURLRoutine}/622ffe11fa41859eb50469b2`
	});
