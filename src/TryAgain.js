import React from 'react';
import QuestionBank from './ArrayData';
import {Link} from 'react-router-dom'


const TryAgain = ({scoreCount,setQuestionCount,NextData,QuestionCount}) => {

  return (
    <div>
<div className="TryagainBox">
 <h1>**!!GAME ENDED!!**</h1>
 <h2 className='Chances'>Chances over you did very Well</h2> <br />
 <h4 className='playaGain'><strong>You got {scoreCount} score out of {QuestionBank.length} </strong> </h4>
 <a href='/Second-Animal-Quiz/redirect'><button className='tryAgainBtn btn btn-danger'>Play again </button></a> 
 </div>
    </div>
  )
}

export default TryAgain
