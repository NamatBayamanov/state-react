import classes from "./Logo.module.scss";
import { BiAtom } from "react-icons/bi";


function Logo() {
  return ( 
    <>
      <div className={classes.Logo}>
        <div className={classes.content}>
            <h2>
              Mobi-Web <BiAtom className={classes.bi}/>
            </h2>
        </div>
      
      </div>
    </>
  );
}

export default Logo;