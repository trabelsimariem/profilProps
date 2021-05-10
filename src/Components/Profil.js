import React from 'react'

const Profil = ({info ,handleClick,children}) => {
    return (
        <div>

            <div className="profile-card">
  <header>
    {/* here’s the avatar  */}
    <a target="_blank" href="#">
      <img src="./user.jpg" className="hoverZoomLink" />
    </a>
    {/* name */}
    <h1>{info.Name}</h1>
    {/*date of birth*/}
    <h2>{info.Datebirth}</h2>
  {/*proffession*/}
    <h2>{info.Proffession} </h2>           
  </header>
  {/* bit of a bio; who are you? */}
  <div className="profile-bio">
    <p>{info.Bio} </p>
          </div>
       <button class="btn btn-5" onClick={()=>handleClick(info.Name, info.Datebirth, info.Bio, info.Proffession)} >Click me</button>
                                     <div>  {children} </div>

        </div>
        </div>
    )
}

export default Profil
