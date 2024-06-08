import React from 'react';
import {Link} from 'react-router-dom';
import IM from  "../assets/list.jpg";
import BR from "../assets/board.jpg";
import "./Third.css"
const Third = () => {
  return (
    <div className="center">
     <div className="box">
      <div className="heading">
       <h1>Select a view</h1>
       <p> You can also customize this view in settings</p>
      </div>
      <form>
      <div className='timex'>
        <div className='listy'>
        <div className="list"><img src={IM}/>
        </div>
        </div>
        <div className='listy'>
        <div className="list"><img src={BR}/>
        </div>
        </div>
       </div>
      </form>
      <div className='low'>
      <div className="lower">
       <Link to="/second"><p>{"<Back "} </p></Link>
       <Link to="/fourth"><button >Next</button></Link>
      </div>
      <div className="magic">
       <div className="cirle3"></div>
       <div className="cirle3"></div>
       <div className="cirle3 circle3"></div>
       <div className="cirle3"></div>
       <div className="cirle3"></div>
       <div className="cirle3"></div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Third