const useStyles = ({disabled}) => ({
    mainContainer: `card border-rounded my-2 col-12 shadow ${disabled ? 'card-info-training-disabled' : ''}`,
    body: 'd-flex justify-content-center col-12 my-4',
    infoContainer: "d-flex align-items-start flex-column px-2 col-7",
    tagContainer: "d-flex flex-wrap",
    imgContainer: "col-4 d-flex justify-content-center align-items-center",
    img: "border-rounded"
});

export default useStyles;