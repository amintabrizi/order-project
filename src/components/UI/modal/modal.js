
import Backdrop from './../backdrop/backdrop';
import classes from './modal.module.css';

const Modal = (props) => {
  return (
    <>
      {
        props.show
          ?
          <>
            <Backdrop modalHandler={props.modalHandler} />
            <div className={classes.Modal}>
              {props.children}
            </div>
          </>
          : null
      }
    </>
  )
}

export default Modal;