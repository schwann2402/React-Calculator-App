import { useState } from "react"

function Calculator({id, value, color, displayChange}) {
  
  return(
    <>
    <button className='w-100 h-100' style={{backgroundColor: `${color}`}} onClick={() => displayChange(value)}> {id} </button> 
    </>
  )
}

export default function DisplayBody () {
  const [display, setDisplay] = useState("0")

  return (
    <>
    <div className="row g-0" style={{height: 50, border: "1px solid white"}}>
      <div className="col-12">
        <div id="display" className='h-100 text-end p-2'>{display}</div>
      </div>
  </div>
  <div className="row g-0">
    <div className="col-6">
      <Calculator id="AC" value="" color="red" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="/" value="" color="grey"/>
    </div>
    <div className="col-3">
      <Calculator id="x" color="grey"/>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-3">
      <Calculator id="7" value="7" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="8" value="8" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="9" value="9" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="-" color="grey" displayChange = {setDisplay}/>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-3">
      <Calculator id="4" value="4" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="5" value="5" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="6" value="6" color="black" displayChange = {setDisplay}/>
    </div>
    <div className="col-3">
      <Calculator id="+" color="grey" />
    </div>
  </div>
  <div className="row g-0">
    <div className="col-9">
      <div className="row g-0">
        <div className="col-4">
          <Calculator id="1" value="1" color="black" displayChange = {setDisplay}/>
        </div>
        <div className="col-4">
          <Calculator id="2" value="2" color="black" displayChange = {setDisplay}/>
        </div>
        <div className="col-4">
          <Calculator id="3" value="3" color="black" displayChange = {setDisplay}/>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-8">
            <Calculator id="0" value="0" color="black" displayChange = {setDisplay}/>
          </div>
          <div className="col-4">
            <Calculator id="." value="." color="black" displayChange = {setDisplay}/>
          </div>
      </div>
    </div>
    <div className="col-3">
        <Calculator id="=" color="blue"/>
      </div>
    </div>
    </>
  )
}