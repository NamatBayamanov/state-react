import { useState } from "react";
import Logo from "../Logo/Logo";
import classes from "./MenuBurger.module.scss";


function MenuBurger() {

  const [actives, setActives] = useState(false);

  function buttonX(event) {
    setActives(!actives);
  };



  

  return (
    <>

    

      <div className={classes.MenuBurger}>


        <nav className={classes.navbar}>
        
          <div className={classes.logo}>
            <Logo />
          </div>


          <ul className={`${classes.list} ${actives ? `${classes.active}` : "" }`}>
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


            
              <div className={ `${classes.external} ${actives ? `${classes.active}` : "" }` } onClick={buttonX}>


                <aside className={`${classes.second}`}>
                  
                </aside>


              </div>

            
          
        </nav>
      </div>

    </>
  );
}

export default MenuBurger;