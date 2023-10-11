import React from 'react'
import '../Home/home.css'n
import Logo from '../../img/mk.png'
import Imagem01 from '../../img/mateus01.png'
import Imagem02 from '../../img/mateus02.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import 'animate.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import Typing from 'react-typing-animation';
import Habilidades from '../img/quem-eu-sou.png'

const Home = () => {
  return (
    <div className='content-fundo-topo'>
      <div className='navbar'>
        <img src={Logo} className='animate__fadeIn'></img>
        <nav>
          <ul>
            <li>
              <a href='#'>HOME</a>
            </li>
            <li>
              <a herf='#'>EXPERIÊNCIAS</a>
            </li>
            <li>
              <a href='#'>SITES</a>
            </li>
            <li>
              <a href='#'>CERTIFICAÇÕES</a>
            </li>
          </ul>
        </nav>
        <label href='#'>CONTATO</label>
      </div>
      <div className="container-header ">
        <div className="titulo-header animate__fadeInLeft">
          <p>BEM VINDO!</p>
          <h1>Mateus Pitta</h1>
          <h2>Front-End</h2>
          <a>Profissional aplicado e criativo, sempre buscando soluções tecnológicas estratégicas para sua empresa!</a>
          <div className='icones'>
            <div className='editar-icone'>
              <a href="https://www.github.com/Mateuskrp"><GitHubIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://linkedin.com/in/mateus-pitta/"><LinkedInIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://www.instagram.com/mateuskronbauerr/"><InstagramIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://www.facebook.com/mateuspitta.pitta/"><FacebookIcon /></a>
            </div>
          </div>
        </div>
        <div className="imagem-topo animate__fadeRight">
          <img src={Imagem01}></img>
        </div>
      </div>
      <div className='container-quem-sou'>
        <div className='imagem02'>
          <img src={Imagem02}></img>
        </div>
        <div className='texto-sou'>
          <h5>SOBRE MIM</h5>
          <h1>Quem sou eu?</h1>
          <Typing><span>Meu nome é Mateus Pitta, sou desenvolvedor Front-End, com solidas habilidades
            em liguagem de programação. Meu principal objetivo é crescer na área de tecnologia,
            trazendo diversas soluções tecnologicas, tanto para a sociedade com para diversas empresas. Gosto de trabalhar em equipe, me comunicar bastante, definir metas ou objetivos,
            colaborar para o crescimento da empresa ... </span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={13} />
          </Typing>

          <div className='idade-cidade'>
            <div className='icone-idade'>
              <div className='texto-icone'>
                <EventAvailableIcon fontSize='small' />
                <label>IDADE</label>
              </div>
              <p>22 Anos</p>
            </div>

            <div className='icone-idade'>
              <div className='texto-icone'>
                <LocationOnIcon fontSize='small' />
                <label>CIDADE</label>
              </div>
              <p>Dourados/MS</p>
            </div>

            <div className='icone-idade'>
              <div className='texto-icone'>
                <ContactEmergencyIcon fontSize='small' />
                <label>CARTEIRA</label>
              </div>
              <p>AB</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home