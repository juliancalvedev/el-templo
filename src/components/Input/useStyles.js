const useStyles = ({ transparent, isInvalid, isValid, className, icon }) => {
    return {
        container: `col-12 my-2 
        ${ className }`,

        label: 'form-label',

        inputContent: `input__content d-flex pr-5 
        input__content--${transparent ? 'transparent' : 'general'} 
        ${isValid ? 'input__content-state--is-valid' : ''} 
        ${isInvalid ? 'input__content-state--is-invalid' : ''} `,
        
        input: `form-control input col-3 ${icon || isValid ? 'input--hasIcon' : ''}
        input-color--${transparent ? 'transparent ' : 'general'}
        ${isValid ? 'input-state--is-valid' : ''} 
        ${isInvalid ? 'input-state--is-invalid' : ''}
        `,

        iconContainer: `col-3 d-flex justify-content-center align-items-center ${ icon || isValid ? '' : 'display-none'}`
    }
}

export default useStyles
