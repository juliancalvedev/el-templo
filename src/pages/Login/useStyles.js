const useStyles = ({ transparent = true, isInvalid, isValid }) => {
    return {
        input: `form-control input ${{ ...(transparent && 'input--transparent') },
            { ...(isInvalid && 'is-invalid') },
            { ...(isValid && 'is-valid') }
            }`
    }
}

export default useStyles
