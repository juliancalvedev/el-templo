const useStyles = ({ scroll }) => {
    return {
        container: 'col-12 d-flex full-height flex-column',
        bodyContainer: `col-12 d-flex justify-content-center ${scroll ? 'main-container--noXscroll' : 'h-100'}`
    }
}

export default useStyles;