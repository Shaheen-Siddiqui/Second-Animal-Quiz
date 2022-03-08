import React from 'react';
import {Link} from 'react-router-dom';
import QuestionBank from './ArrayData';



const TryAgain = ({scoreCount}) => {
  return (
    <div>
<div className="TryagainBox">
 <h1>**!!GAME ENDED!!**</h1>
 <h2 className='Chances'>Chances over you did very Well</h2> <br />
 <h4 className='playaGain'><strong>You got {scoreCount} score out of {QuestionBank.length-1} </strong> </h4>
 <a href='redirect'><button className='tryAgainBtn btn btn-danger'>Play again </button></a> 
 </div>
    </div>
  )
}

export default TryAgain
{/* <Link to="/">Home</Link> */}
