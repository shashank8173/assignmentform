
import React from 'react';
import {Link} from 'react-router-dom';
import EveryOne from "../assets/everyone.png";
import Admin from "../assets/admin.png";
import Specific from "../assets/specific.png";
import "./Fourth.css"
const Fourth = () => {
  return (
    <div className="center">
     <div className="box">
      <div className="heading">
       <h1>Who can manage projects</h1>
       <p>Don't panic-You can also customize this permission</p>
      </div>
      <form>
      <div className='every'>
        <div className='listy'>
        <div className="list">
        <img src={EveryOne} />
        <div className='admin'>
         <h3>Everyone</h3>
         <p>All users can now to see it,but guests cannot access the projects.</p>
        </div>
        </div>
        </div>
        <div className='listy'>
        <div className="list">
        <img src={Admin}/>
        <div className='admin'>
         <h3>Only Admin</h3>
         <p>Only admins can manage everything.</p>
        </div>
        </div>
        </div>
        <div className='listy'>
        <div className="list">
        <img src={Specific}/>
        <div className='admin'>
         <h3>Only to Specific people</h3>
         <p>Only some specific people can able to see it.</p>
        </div>
        </div>
        </div>
       </div>
      </form>
      <div className='low'>
      <div className="lower">
       <Link to="/third"><p>{"<Back"} </p></Link>
       <button  >Next</button>
      </div>
      <div className="magic">
       <div className="cirle4"></div>
       <div className="cirle4"></div>
       <div className="cirle4"></div>
       <div className="cirle4 circle4"></div>
       <div className="cirle4"></div>
       <div className="cirle4"></div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Fourth