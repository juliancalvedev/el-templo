const useStyles = ({ scroll }) => {
    return {
        container: 'col-12 d-flex full-height flex-column',
        bodyContainer: `col-12 d-flex justify-content-center ${!scroll ? 'h-100' : 'main-container--noXscroll'}`
    }
}

export default useStyles;