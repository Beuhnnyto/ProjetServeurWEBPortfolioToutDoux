import React from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import SpaceSquad from '../assets/SpaceSquad.png'
import AlpineBouzeb from '../assets/AlpineBouzeb.png'
import YourEfrei from '../assets/YourEfrei.png'
import PyAutoOrganise from '../assets/PyAutoOrganise.png'
import AdminGestion from '../assets/AdminGestion.sh.png'


const Home = () => {
  return (
    <>
    

    <Navbar />
  <main >
    <section>
  <div className="text-center p-10 py-10">
          <h2 id="about" className="text-5xl py-2 text-lime-600 font-medium md:text-6xl">
            Kevin Thon-Baie
          </h2>
          <h3 className="text-2xl py-2  md:text-3xl">
            Rompicheur Ultime
          </h3>
          <p className="text-md py-5 leading-8  max-w-xl mx-auto md:text-xl">
            Je suis tu es vous etes nous sommes mais avant tout je savons sachez parce je suis un savant qui se savonne.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <AiFillLinkedin className='hover:scale-105 hover:text-lime-400'/>
            <AiOutlineGithub className='hover:scale-105 hover:text-lime-400'/>
            
          </div>
        </div>
      </section>
      <section className='flex-col text-center items-center'>
<div>
  <h3 id='skills' className="text-3xl py-1">G tro 2 skillz</h3>
  <p className="text-md py-2 leading-8"></p>
</div>
<div className="flex justify-center">
  <div className='font-serif grid grid-cols-1 md:grid-cols-2 md:px-10 gap-10 justify-center mx-auto'>
    <div className="text-center border-2 border-lime-400 shadow shadow-lime-400 p-10 rounded-xl my-10 max-w-md">
      <h3 className="text-3xl font-semibold underline text-[#e3d9e7] font-mono pt-8 pb-2">
        JEU sé
      </h3>
      <p className="py-2 flex-wrap">
        <span className='underline font-extrabold'>Lé lang </span> : LEU FRANSE, L'ARRJAN <br />
        <span className='underline font-extrabold'>LEU SOFT</span> : ma maman elle a dit keu j'ai thé jan ty
      </p>
    </div>

    <div className="text-center border-2 border-lime-400 shadow shadow-lime-400 p-10 rounded-xl my-10 max-w-md">
      <h3 className="text-3xl font-semibold underline text-[#e3d9e7] font-mono pt-8 pb-2">
        skillz
      </h3>
      <p className="py-2 flex-wrap">
        <span className='underline font-extrabold'> leu hack </span> : Jeu sé teu dé dauss daunn moa 10000000 de vbucks <br />
        <span className='underline font-extrabold'> Ma maman</span> : Ma moman ell a di ke j'ai thé 1 kdo du ssiel <br />
      </p>
    </div>
  </div>
</div>

</section>
<section className='py-10'>
<div className='flex flex-col items-center'>
  <h3 id='projects' className="text-3xl py-1">Projects</h3>
  </div>
  <div className='grid grid-cols-1 md:grid-cols-3 md:px-10 gap-10 justify-center mx-auto'>
  <div className='flex flex-col items-center'>
    <img src={SpaceSquad} alt='SpaceSquad'  width={250} height={250} />
    <p className='text-center'>SpaceSquad is a website team project retracing the history of space exploration with minigames and others functionalities</p>
    <p className='text-center'> Built with HTML CSS and Javascript</p>
  </div>

  <div className='flex flex-col items-center'>
    <img src={AlpineBouzeb} alt='AlpineBouzeb'  width={250} height={250}/>
    <p className='text-center'>Bouzeb Motos is a website for searching and filtering motorbikes.</p>
    <p className='text-center'> Built with AlpineJS HTML and TailwindCSS </p>
  </div>
  <div className='flex flex-col items-center'>
    <img src={YourEfrei} alt='YourEfrei'  width={250} height={250}/>
    <p className='text-center'>YourEfrei is a website simulating the intranet of Efrei, it's a project with front and Backend.</p>
    <p className='text-center'> Built with React, NodeJS, Express, MySQL and CSS </p>
  </div>
  <div className='flex flex-col items-center'>
    <img src={PyAutoOrganise} alt='PyAutoOrganise' width={250} height={250} />
    <p className='text-center'>PyAutoOrganise is a python script that organizes all downloaded files in a folder by extension.</p>
    <p className='text-center'> Built with Python </p>
    </div>
    <div className='flex flex-col items-center'>
    <img src={AdminGestion} alt='AdminGestion'  width={250} height={250}/>
    <p className='text-center'>AdminGestion is a bash script that allows you to manage users and groups on Linux.</p>
    <p className='text-center'> Built with Bash </p>
    </div>
  </div>

</section>
<section className='py-10'>
<div className='flex flex-col items-center'>
  <h3 id='contact' className="text-3xl py-1">Contact</h3>
  </div>
  <h4 className='text-center'>Please contact me by mail: </h4>
  <a href='mailto:adam.malek@efrei.net'>
  <HiMail className="mx-auto text-white text-4xl hover:scale-105 hover:text-lime-400" />
    </a>

</section>

        
    
  </main>
  </>
  )
}

export default Home