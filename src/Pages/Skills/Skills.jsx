import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText"
import {
  FaAngular,
  FaGithub,
  FaGitAlt,
  FaReact,
  FaJava
} from 'react-icons/fa'
import {
  RiJavascriptFill
} from "react-icons/ri";
import {
  BiLogoVisualStudio,
  BiLogoSpringBoot
} from 'react-icons/bi'
import {
  SiMongodb,
  SiMysql
} from 'react-icons/si'
import './Skills.css'

export const Skills = () => {
  return (
    <Main style={'sectionSkills'} >
      <h2 id='h2'>MIS HABILIDADES</h2>
      <PText style={'pSkills'} contentText={'Mis herramientas y tecnologías, seleccionadas por su facilidad, calidad y demanda en el mercado, me permiten crear soluciones eficientes, confiables y accesibles para el usuario.'} />
      <section id='sectionSkills'>
        <div className='divContainer'>
          <div>
            <h2>Lenguajes de Programacion</h2>
          </div>
          <aside className='aside'>
            <PText style={'js'} id={'pIcons'} contentText={<RiJavascriptFill className='icons' />} />
            <PText style={'java'} id={'pIcons'} contentText={<FaJava className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <div>
            <h2>FrameWorks</h2>
          </div>
          <aside className='aside'>
            <PText style={'react'} id={'pIcons'} contentText={<FaReact className='icons' />} />
            <PText style={'angular'} id={'pIcons'} contentText={<FaAngular className='icons' />} />
            <PText style={'springboot'} id={'pIcons'} contentText={<BiLogoSpringBoot className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <div>
            <h2>Herramientas de Desarrollo</h2>
          </div>
          <aside className='aside'>
            <PText style={'git'} id={'pIcons'} contentText={<FaGitAlt className='icons' />} />
            <PText style={'gitHub'} id={'pIcons'} contentText={<FaGithub className='icons' />} />
            <PText style={'vs'} id={'pIcons'} contentText={<BiLogoVisualStudio className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <div>
            <h2>Bases de Datos</h2>
          </div>
          <aside className='aside'>
            <PText style={'mysql'} id={'pIcons'} contentText={<SiMysql className='icons' />} />
            <PText style={'mongo'} id={'pIcons'} contentText={<SiMongodb className='icons' />} />
          </aside>
        </div>
        <div className='divContainer' id='divContainerEn'>
          <div>
            <h2>Nivel de Ingles</h2>
          </div>
          <aside className='aside'>
            <PText style={'pEn'} id={'pIcons'} contentText={'B1'} />
          </aside>
        </div>
      </section>
    </Main>
  )
}

