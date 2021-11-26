import axios from 'axios';
const baseURL = 'https://el-templo.herokuapp.com/api';
const Path =
	'/auth/verify-email?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGVzdC50YzFAbWFpbGluYXRvci5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRydkVWZW43WDI3UTBYN2ZUTmdKSEQuVkw4aEZEdENXVDNrUzd2YUYuRjRyTmhIT0w0YUZqVyIsImZpcnN0TmFtZSI6InRlc3QiLCJpbWciOiJhY2EgdmEgdW5hIGltZyIsImxhc3ROYW1lIjoidGVtcGxvIiwiZGF0ZU9mQmlydGgiOiIxOTk0LzEyLzMwIiwic2V4IjoiTSIsImNvdW50cnkiOiJBcmdlbnRpbmEiLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2Mzc5NDgyMDV9.yYfSXVj0pBVEn2uvfY9zi84TT8DQZbgGlyNn9nHNogk';
const VerifyUser = async () => {
	try {
		const response = await axios.get(`${baseURL + Path}`);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export default VerifyUser;
