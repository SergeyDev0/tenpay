import styles from "./OutlineLink.module.scss";

interface Text {
  text: string,
}

const OutlineButton = (props: Text): JSX.Element => {
  return (
    <button className={styles.button}>
      {props.text}
    </button>
  )
};

export default OutlineButton;
