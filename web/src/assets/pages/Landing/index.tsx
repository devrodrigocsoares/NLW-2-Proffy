import React from  'react';

import logoImg from '../../images/logo.svg'
import landingImg from '../../images/landing.svg'

import studyIcon from '../../images/icons/study.svg'
import giveClassesIcon from '../../images/icons/give-classes.svg'
import purpleHeartIcon from '../../images/icons/purple-heart.svg'

import './styles.css'

  function Landing (){
    return (
    
    <div id="page-landing">

        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src= {logoImg} alt = "Proffy"></img>
            <h2>Sua plataforma de estudos online!</h2>
          </div>

          <img 
            src={landingImg} 
            alt="Plataforma de Estudos." 
            className="hero-image"
          />
              

        <div className="button-container">
          <a href="" className="study">
            <img src= {studyIcon} alt="estudar"/>
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src= {giveClassesIcon} alt="dar aula"/>
            Dar aula
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon}alt="coração roxo"/>
        </span>

        </div>

    </div>

    )
  }

  export default Landing;