import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText"
import {
  FaAngular,
  FaGithub,
  FaReact,
  FaJava,
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
      <h2 id='h2'>Habilidades</h2>
      <section id='sectionSkills'>
        <div className='divContainer'>
          <h2>Lenguajes de programacion</h2>
          <aside className='aside'>
            <PText style={'pIcons'} contentText={<RiJavascriptFill className='icons' />} />
            <PText style={'pIcons'} contentText={<FaJava className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <h2>FrameWorks</h2>
          <aside className='aside'>
            <PText style={'pIcons'} contentText={<FaReact className='icons' />} />
            <PText style={'pIcons'} contentText={<FaAngular className='icons' />} />
            <PText style={'pIcons'} contentText={<BiLogoSpringBoot className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <h2>Herramientas de Desarrollo</h2>
          <aside className='aside'>
            <PText style={'pIcons'} contentText={<FaGithub className='icons' />} />
            <PText style={'pIcons'} contentText={<BiLogoVisualStudio className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <h2>Bases de Datos</h2>
          <aside className='aside'>
            <PText style={'pIcons'} contentText={<SiMysql className='icons' />} />
            <PText style={'pIcons'} contentText={<SiMongodb className='icons' />} />
          </aside>
        </div>
        <div className='divContainer'>
          <h2>Nivel de Ingles</h2>
          <aside className='aside'>
            <PText style={'pIcons'} contentText={'B1'} />
          </aside>
        </div>
      </section>
    </Main>
  )
}

