import React from 'react'
import MainComponent from './MainComponent';
import {Routes,Route} from 'react-router-dom';
import QuestionComponent from './QuestionComponent'

const App = () => {
  return (
    <div>

    <Routes>
     <Route exact path="/Second-Animal-Quiz" element={ <MainComponent/>}/>
     <Route exact path="/Second-Animal-Quiz/redirect" element={ <MainComponent/> } />
    </Routes>
    </div>
  )
}

export default App;

     