import './Toast.scss';
import useStyles from "./useStyles";

const Toast = ({ message }) => {

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h6 className={styles.text}>{message}</h6>
      </div>
    </div>
  );
};

export default Toast;
