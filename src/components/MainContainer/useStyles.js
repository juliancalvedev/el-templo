const useStyles = ({scroll}) => {
    return {
        container: 'col-12 d-flex full-height flex-column',
        bodyContainer: `main-container--noXscroll col-12 d-flex justify-content-center ${!scroll && 'h-100'}`
    }
}

export default useStyles;