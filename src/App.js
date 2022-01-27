import './App.css';
import React from 'react';
import './mil.css'
import {Mil, Floor, Mil3, Mil2} from './components/createMilNode';
import CreateDisks from './animations/abc';
import { ContinueBotton, EndtBotton, FasterButton, ManualtBotton, ResetBotton, SlowerButton, StartBotton, StopBotton } from './components/Buttons';
//import {CreateDisks} from './components/Disks'


function App() {
  
  return (

     <div className="container" id="page2">
       <div className="mil1">
         <Mil />
         <Mil2 />
         <Mil3 />
         <Floor />
         <StartBotton />
         <EndtBotton />
         <ContinueBotton />
         <ResetBotton />
         <ManualtBotton />
         <StopBotton />
         <FasterButton />
         <SlowerButton />
       </div>
      <CreateDisks />
     </div>
    );

}

export default App;

