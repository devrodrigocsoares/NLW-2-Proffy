import React from 'react'

import wppImg from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

      function TeacherItem(){
        return (
          <article className="teacher-item">
          <header>
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFjgjfilaGO6Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=WQQB2VuxFOIzSCIs4pdKup0VaT3tH0YjSFsav_Vp1UA" alt="Rodrigo C Soares"/>
              <div>
                  <strong>Rodrigo C Soares</strong>
                  <span>Desenvolvimento Web | Mobile / Estrutura de Dados</span>
              </div>
          </header>
    
          <p>
            Discente formando em BSI (Bacharelado em Sistemas de Informção) pelo 
            IFCE campus Cedro com pós graduação em codar com Stacks Js pela 
            Rocketseat.
            <br/> <br/> 
            React Js | React Native
          </p>

          <footer>
              <p>Preço/hora
                  <strong>R$ 50,00</strong>
              </p>

              <button type="button">
                <img src={wppImg} alt="Whatsapp"></img>
                Entrar em contato
              </button>
          </footer>
    </article>

        )
      }

      export default TeacherItem;
          
         