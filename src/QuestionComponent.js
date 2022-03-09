import React from 'react';
import QuestionBank from './ArrayData';

const QuestionComponent = ({QuestionCount,PitchureChange,showAlert}) => {
  return (<>
             <div className='backImage'>
              <h1><span>Question {QuestionCount} /</span> {QuestionBank.length} </h1>
               <h4>{showAlert}</h4>
              <img className='ImgStyle' src={QuestionBank[QuestionCount].AnimalPic} alt="Animal_image" />
              <h4 className='chosCurAns'>Choose the correct answer </h4>
              <div className='btn-fild'>
              {QuestionBank[QuestionCount].buttonOptions.map((Btnoptions,index)=>{
              return <button onClick={()=> PitchureChange(Btnoptions.CorAnswer)} key={index} className="btn btn-dark BtnTogether"> {Btnoptions.option} </button>})}
              </div>
              </div>
              </>

  )
}

export default QuestionComponent
