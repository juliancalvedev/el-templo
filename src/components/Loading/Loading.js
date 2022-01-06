import './Loading.scss';
import useStyles from './useStyles';

const Loading = () => {

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading;
