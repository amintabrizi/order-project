import classes from './backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div onClick={props.modalHandler} className={classes.modalBackdrop}></div>
  )
}

export default Backdrop;