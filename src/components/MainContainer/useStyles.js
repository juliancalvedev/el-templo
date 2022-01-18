const useStyles = ({ backgroundImg, scroll, topbar }) => {
    return {
        container: `col-12 d-flex align-items-center flex-column ${backgroundImg ? 'backgroundImg backgroundImg--' + backgroundImg : ''} full-height`,
        bodyContainer: `col-11 d-flex flex-column justify-content-between ${scroll ? '' : 'h-100'}`
    }
}

export default useStyles;