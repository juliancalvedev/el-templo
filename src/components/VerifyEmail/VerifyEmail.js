import React from 'react';
import axios from 'axios';
import './VerifyEmail.css';

const VerifyEmail = () => {
	const baseURL =
		'https://el-templo.herokuapp.com/api/auth/verify-email?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGVzdC50ZW1wbG9AbWFpbGluYXRvci5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQzRXNkQWpYZlVlc1k2RGY5WGtnYkNPL01Qa3VxbW5xUjNleGZLOGZFWlhLWHRwbVBCeVN6UyIsImZpcnN0TmFtZSI6InRlc3QiLCJpbWciOiJhY2EgdmEgdW5hIGltZyIsImxhc3ROYW1lIjoidGVtcGxvIiwiZGF0ZU9mQmlydGgiOiIxOTk0LzEyLzMwIiwic2V4IjoiTSIsImNvdW50cnkiOiJBcmdlbnRpbmEiLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2Mzc2NDM0MTB9.B3HDt-o5URfYR6VOd7JRs3UtCG9nR6YE6GNdw7krX-8';

	const verifyEmail = async () => {
		try {
			axios.get(`${baseURL}`).then((res) => {
				const Token = res.data;
				console.log(Token);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='verify-main'>
			<button onClick={verifyEmail}>EmailVerificationTest</button>
		</div>
	);
};

export default VerifyEmail;
