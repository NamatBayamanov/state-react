function Lightbulbs( {on} ) {

  

  return ( 
    <>
      <div className="Lightbulbs">

        <h2>
          this lightbulbs is {on ? "On" : "off"}
        </h2>

      </div>
    </>
  );
}

export default Lightbulbs;