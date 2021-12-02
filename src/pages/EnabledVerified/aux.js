<div className='container d-flex justify-content-center col '>
	{!emailIsVerified && (
		<div>
			<Title text={t('auth.enabledVerified.emailNotVerified.title')} />
			<AuxText
				text={t('auth.enabledVerified.emailNotVerified.auxText')}
			/>
			<Button
				title={t(
					'auth.enabledVerified.emailNotVerified.btnResendEmail'
				)}
				onClick={() => handleResendVerifyEmail(savedEmail)}
			/>
		</div>
	)}
	{emailIsVerified && !enabled && (
		<div>
			<Title text={t('auth.enabledVerified.accountNotEnabled.title')} />
			<AuxText
				text={t('auth.enabledVerified.accountNotEnabled.auxText')}
			/>
			<Button
				title={t('auth.enabledVerified.accountNotEnabled.btnBack')}
				onClick={navToLogin}
			/>
		</div>
	)}
</div>;
