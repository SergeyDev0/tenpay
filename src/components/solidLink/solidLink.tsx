import styles from "./SolidLink.module.scss";

interface Text {
  text: string,
}

const SolidButton = (props: Text): JSX.Element => {
  return (
    <button className={styles.button}>
      {props.text}
    </button>
  )
};

export default SolidButton;
