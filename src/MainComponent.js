import React, { useState } from 'react'
import QuestionBank from './ArrayData'
import QuestionComponent from './QuestionComponent'
import TryAgain from './TryAgain'


const MainComponent = () => {
      let [QuestionCount,setQuestionCount]=useState(0);
      let [tryPageHide,setTryPageHide]=useState(false);
      let [scoreCount,setScoreCount]=useState(0);
      let [welcomePageHide,setWelcomePageHide]=useState(true);
      let [change,setChange]=useState();
      let [showAlert,setShowAlert]=useState();

    const QuestionTrue=(event)=>{
     let value = event.target.value
      setChange(value)
    }
    const goingToNext=()=>{
      if (change==null){
        setChange('must have to write something')}
      else{
        setWelcomePageHide(false)}
    }

      const PitchureChange=(CorAnswer)=>{
      if (CorAnswer==true){
        setScoreCount(scoreCount+1);
      }else{
        setShowAlert('The Answer is Wrong')
      }
      const NextData = QuestionCount+1
      if (NextData<QuestionBank.length) {
      if (CorAnswer==true){
        setQuestionCount(NextData) 
        setShowAlert('')
      }

      }else{
        setTryPageHide(true)
      }}
return (<>
      
 {welcomePageHide? (  <div className="BorderBox welcomePage">
      <h1 className='animalQGame'><strong> Welcome To Animal Quiz Game </strong> </h1>
      <h2 className='EnterYname'>Enter your name </h2>
      <h5><strong>{change}</strong> </h5>
      <input type="text" name="text" id="" placeholder='your name' onChange={QuestionTrue} />
      <button  type="submit" className="btn btn-dark" onClick={goingToNext}>Let's play</button> 
      </div> ):


<>
{ tryPageHide?  (<TryAgain
                  scoreCount={scoreCount}
                  setQuestionCount={setQuestionCount}
                  QuestionCount={QuestionCount}
                  // NextData={NextData}
                  />) 

                :(<QuestionComponent 
                  QuestionCount={QuestionCount}
                  PitchureChange={PitchureChange}
                  showAlert={showAlert}
                />)

}
</>
}
</>)}
export default MainComponent;