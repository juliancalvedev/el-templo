import Tag from "../Tag/Tag"
import Text from "../Text/Text"
import useStyles from "./useStyles"

const CardInfoTraining = ({ text, tags }) => {

    const styles = useStyles();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.body}>

                <div className={styles.imgContainer}>
                    <img className={styles.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Galletita_Sonrisas.jpg/245px-Galletita_Sonrisas.jpg' width='120' height='120' />
                </div>

                <div className={styles.infoContainer}>
                    <div>
                        <Text text={text} size={4} bold />
                    </div>
                    <div className={styles.tagContainer}>
                        {tags?.map(t => <Tag type={2} color={5} bold text={t} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfoTraining
