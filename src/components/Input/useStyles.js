const useStyles = ({ transparent, isInvalid, isValid, className }) => {
    return {
        container: `col-md-4 my-3
        ${ className }`,

        inputContent: `input__content d-flex pr-5 
        input__content--${transparent ? 'transparent' : 'general'} 
        ${isValid ? 'input__content-state--is-valid' : ''} 
        ${isInvalid ? 'input__content-state--is-invalid' : ''} `,
        
        input: `form-control input col-3
        input-color--${transparent ? 'transparent ' : 'general'}
        ${isValid ? 'input-state--is-valid' : ''} 
        ${isInvalid ? 'input-state--is-invalid' : ''}
        `,

        iconContainer: 'col-3 d-flex justify-content-center align-items-center'
    }
}

export default useStyles
