import classes from "./Burger.module.scss";





function Burger() {


  return ( 
    <>
      <div className={classes.Burger }>
        <div className={`${classes.content} ${classes}`} >
          <button>
            Dropdown
          </button>

          <ul className={classes.list}>
            <li>
              
            </li>
          </ul>
          
        </div>
        
      </div>

      
    </>

  );
}

export default Burger; 