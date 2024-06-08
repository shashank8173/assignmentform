import React from 'react';
import {Link} from 'react-router-dom';
import "./First.css"
const First = () => {
  return (
    <div className="center">
     <div className="box">
      <h1>Create a project</h1>
      <form>
       <div className="projectname">
        <label>Project Name</label>
        <input type="text"placeholder='Enter Project name'/>
       </div>
       <div className="projectname">
        <label>Client</label>
        <div className="client">
        <select id="" name="" className='client1'>
         <option value="">Select a client</option>
         <option value="client1">Client1</option>
         <option value="client2">Client2</option>
         <option value="client3">Client3</option>
        </select>
         <p>Or</p><input type="text"placeholder='+ New Client'className='client2'/>
        </div>
       </div>
       <div className="projectname">
        <label>Dates</label>
        <div className="client">
        <input type="date" className="date"/>
        <input type="date"placeholder='+ New Client'className='date'/>
        </div>
       </div>
       <div className="projectname">
        <label>Note</label>
        <textarea type="address"placeholder='optional'/>
       </div>
      </form>
      <div className="low">
      <div className="lower">
       <Link to="/"><p>{"<Back "} </p></Link>
       <Link to="/second"><button >Next</button></Link>
      </div>
      <div className="magic">
       <div className="cirle1 circle1"></div>
       <div className="cirle1"></div>
       <div className="cirle1"></div>
       <div className="cirle1"></div>
       <div className="cirle1"></div>
       <div className="cirle1"></div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default First