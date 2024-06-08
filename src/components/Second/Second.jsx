import React from 'react';
import {Link} from 'react-router-dom';
import "./Second.css"
const Second = () => {
  return (
    <div className="center">
     <div className="box">
     {/* <div className="cross"><h1>X</h1></div> */}
      <div className="heading">
       <h1>Project type</h1>
       <p>Do'nt panic-You also customize this type in settings</p>
      </div>
      <form>
      <div className='timematerial'>
        <div className="btn"><p>Time & Materials</p></div>
        <div className="btn"><p>Fixed Size</p></div>
        <div className="btn"><p>Non-Billable</p></div>
      </div>
      <div className="hourly">
       <h3>Hourly</h3>
       <p>We need hourly rates to track your project's billable amount.</p>
       <div className="client">
        <select id="" name="" className='client1'>
         <option value="hour">Project Hourly Rate</option>
         <option value="day">Project Per Day Rate</option>
         <option value="month">Project Monthly Rate</option>
         <option value="yearly">Project Yearly Rate</option>
        </select>
         <input type="number" placeholder='₹'className='client2'/>
        </div>
       </div>
       <div className="budget">
        <h3>Budget</h3>
        <p>We need hourly rates to track your project's billable amount.</p>
        <select id="" name="" className='client1'>
         <option value="hour">Project Hourly Rate</option>
         <option value="day">Project Per Day Rate</option>
         <option value="month">Project Monthly Rate</option>
         <option value="yearly">Project Yearly Rate</option>
        </select>
       </div>
       <div className="check">
        <input type="checkbox"/>Budget resets every monnth<br/>
        <input type="checkbox"/>send email alerts if project exceeds <span className="high">80.00</span>% of budget.
       </div>
      </form>
       <div className='low'>
       <div className="lower">
       <Link to ="/"><p>{"<Back "} </p></Link>
       <Link to ="/third"><button >Next</button></Link>
      </div>
      <div className="magic">
       <div className="cirle2"></div>
       <div className="cirle2 circle2"></div>
       <div className="cirle2"></div>
       <div className="cirle2"></div>
       <div className="cirle2"></div>
       <div className="cirle2"></div>
      </div>
       </div>
     </div>
    </div>
  )
}

export default Second