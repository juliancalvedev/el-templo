import './Paragraph.scss'
const Paragraph = ({type='dark',text,onClick}) => {
    return (
        <div>
            <p className={`paragraph paragraph--${type} m-1`} onClick={onClick}>
                {text}
            </p>
        </div>
    )
}

export default Paragraph
