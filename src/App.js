import React from 'react'
import MainComponent from './MainComponent';
import {Routes,Route} from 'react-router-dom';
import QuestionComponent from './QuestionComponent'

const App = () => {
  return (
    <div>

    <Routes>
     <Route  path="/Second-Animal-Quiz" element={ <MainComponent/>}/>
     <Route path="redirect" element={ <MainComponent/> } />
    </Routes>
    </div>
  )
}

export default App;

     