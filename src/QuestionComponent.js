import React from 'react';
import QuestionBank from './ArrayData';

const QuestionComponent = ({QuestionCount,PitchureChange}) => {

  return (<>
      


             <div className='backImage'>
              <h1><span>Question {QuestionCount} /</span> {QuestionBank.length-1} </h1>
              <img className='ImgStyle' src={QuestionBank[QuestionCount].AnimalPic} alt="Animal_image" />
              <h4>Choose the correct answer </h4>
              <div className='btn-fild'>
              {QuestionBank[QuestionCount].buttonOptions.map((Btnoptions,index)=>{
              return <button onClick={()=> PitchureChange(Btnoptions.CorAnswer)} key={index} className="btn btn-dark"> {Btnoptions.option} </button>})}
              </div>
              </div>
              </>


  )
}

export default QuestionComponent
