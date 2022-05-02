import Logo from "../Logo/Logo";
import classes from "./MenuBurger.module.scss";


function MenuBurger() {
  return (
    <>
      <div className={classes.MenuBurger}>
        <nav className={classes.navbar}>

          <div className={classes.logo}>
            <Logo/>
          </div>


          <ul className={classes.list}>
            <li>
              <a href="/">
                hello
              </a>
            </li>
            <li>
              <a href="/">
                good bye
              </a>
            </li>
            <li>
              <a href="/">
                contacts
              </a>
            </li>
            <li>
              <a href="/">
                FAQ
              </a>
            </li>
            <li>
              <a href="/">
                Naruto
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  );
}

export default MenuBurger;