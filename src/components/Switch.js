function Switch( {callback} ) {



  return ( 
    <>
      <div className="Switch">

        <button onClick={callback}>
          Toggles
        </button>  
      </div>
    </>
  );
}

export default Switch;