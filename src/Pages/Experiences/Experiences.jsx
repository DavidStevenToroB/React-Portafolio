import React from 'react'
import './Experiences.css'
import { Main } from '../../layouts/Main/Main'
import imgBook from '../../assets/Img/ImgBook.png'
import imgTranslate from '../../assets/Img/image.png'
import imgMusicPlayer from '../../assets/Img/ImgMusicPlayer.png'
import { ImgLinks } from '../../Components/ImgLinks/ImgLinks.jsx'
import { LiNavBar } from '../../Components/LiNavBar/LiNavBar.jsx'

export const Experiences = () => {
  return (
    <Main style={'sectionLinks'} >
      <h2 className='h2Proyects'>Experiencia</h2>
      <aside className='asideExperiences' id='asideDiv'>
        <div className='divLinks'>
          <h2>TITULOS</h2>
          <LiNavBar route={'https://drive.google.com/drive/folders/1uW2BGPRoBG8lcyLr9IySSwmCce5We7FA'} style={'links'} content={'Bachiller Tecnico en programacion de software...'} />
          <LiNavBar route={'https://drive.google.com/drive/folders/1JZrXpf1LPzTNgJrBephA4F4RF-C7ibUD'} style={'links'} content={'Constancia de Asistencia a Tecnologo en analisis y desarrollo de software...'} />
        </div>
        <div className='divLinks'>
          <h2>RECONOCIMIETNOS</h2>
          <LiNavBar route={'https://github.com/DavidStevenToroB/JS-translate'} style={'links'} content={'Mencion de honor por excelencia en el area de programacion...'} />
        </div>
      </aside>
      <aside className='asideExperiences' >
        <h2 className='h2Proyects'>PROYECTOS</h2>
        <section className='sectExperience'>
          <aside className='asideImg'>
            <div>
              <h2>Traductor</h2>
              <ImgLinks route={'https://davidsteventorob.github.io/JS-translate/'} styleA={'aStyle'} style={'imgLinks'} content={imgTranslate} />
            </div>
            <div>
              <h2>Librería</h2>
              <ImgLinks route={'https://libro404-organization.github.io/libro404/'} styleA={'aStyle'} style={'imgLinks'} content={imgBook} />
            </div>
            <div>
              <h2>Reproductor de Musica</h2>
              <ImgLinks route={'https://davidsteventorob.github.io/js-reproductor/'} styleA={'aStyle'} style={'imgLinks'} content={imgMusicPlayer} />
            </div>
          </aside>
        </section>
      </aside>
    </Main>
  )
}

