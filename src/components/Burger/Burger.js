import classes from "./Burger.module.scss";





function Burger() {


  return (
    <>
      <div className={classes.Burger}>
        <div className={`${classes.content}`} >
          <section className={classes.dropbtn}> 
            <button className={classes.dropdown}>
              Dropdown
            </button>

            <ul className={classes.list}>
              <li>
                <a href="https://google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://bing.com">
                  Bing
                </a>
              </li>
              <li>
                <a href="/">
                  ContactsNaruto
                </a>
              </li>
              <li>
                <a href="/">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/">
                  More information
                </a>
              </li>
            </ul>
          </section>



        </div>

      </div>


    </>

  );
}

export default Burger; 