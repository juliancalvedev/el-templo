import './Paragraph.scss'
const Paragraph = ({type='dark',text}) => {
    return (
        <div>
            <p className={`paragraph paragraph--${type} m-1`}>{text}</p>
        </div>
    )
}

export default Paragraph
