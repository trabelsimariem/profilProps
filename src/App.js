
import './App.css';
import React from 'react'
import Profil from './Components/Profil';

const info = [
  {
    Name: `Mariem Trabelsi`,
      Datebirth:`20 November 1994`,
      Bio: 'I recently graduated with a professional master`s degree from the faculty of sciences sfax , where i studied metrology and instrumentation',
      Proffession: `fullstack js developer`,
    },
  ];
const App = () => {
 const handleClick = (Name, Bio, Proffession) => alert(`${Name} 
     ${Bio}
      ${Proffession}`)
  
  return (
    <div>
      {info.map((info) =>
        <Profil info={info} handleClick={handleClick} >
       
<ul class="profile-social-links">
    <li><i class="fa fa-facebook"></i></li>
    <li> <i class="fa fa-twitter"></i></li>
    <li><i class="fa fa-github"></i></li>
    <li><i class="fa fa-behance"></i></li>
  </ul>


        </Profil>
      )}
    </div>
  )
}

export default App
