import Hoc from './../../hoc/hoc';
import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <Hoc>
      <div>
        toolbar,sidedraw,backdrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Hoc>
  )
}

export default Layout;