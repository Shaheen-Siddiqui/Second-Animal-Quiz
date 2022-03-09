import React from 'react'
import MainComponent from './MainComponent';
import {Routes,Route} from 'react-router-dom';
import QuestionComponent from './QuestionComponent'

const App = () => {
  return (
    <div>

<QuestionComponent/>

    {/* <Routes>
     <Route  path="/" element={ <MainComponent/>}/>
     <Route path="redirect" element={ <MainComponent/> } />
    </Routes> */}
    </div>
  )
}

export default App;

     