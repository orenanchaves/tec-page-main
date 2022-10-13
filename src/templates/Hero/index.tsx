import { useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header'
import { HeroTitle } from '../../components/HeroTitle'

import badgerImg from '/assets/badger-white.png'
import floatImg from '/assets/detail-float.svg'

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const myRef = useRef(null)
  const listenToScroll = () => {
    let heightToHideFrom = 650
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll < heightToHideFrom) {
      setIsVisible(false)
    }
    if (winScroll >= heightToHideFrom) {
      setIsVisible(true)
    }
  }
  // flex flex-col items-end lg:items-start
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <section
      ref={myRef}
      id='home'
      className={`overflow-hidden w-screen bg-delivery bg-center lg:bg-right-bottom  bg-cover bg-no-repeat h-screen flex flex-col justify-center relative transition delay-75 `}
    >
      <Header isPresent={isVisible} />
{/* 
      <img
        src={floatImg}
        width='100'
        height='100'
        loading='lazy'
        alt='adorno lateral, cor laranja'
        className={`absolute -left-[350px] h-[700px] w-[700px] bottom-[10px] hidden invisible md:visible md:flex z-1`}
      /> */}
      <div
        className={`absolute top-[33,33%] bottom-[33,3%] left-[8.1%] right-[0]`}
      >
        <HeroTitle title='Entrega' append />
        <HeroTitle title='Reversa' append />
        <HeroTitle title='Refurb' append />
        <HeroTitle title={`Vamo que `} />
        <HeroTitle title={`vamo. `} />
        <p className='text-neutral-50 text-3xl leading-[4rem] '>
          Site em construção.
        </p>
      </div>
      <img
        src={badgerImg}
        width='100'
        height='100'
        loading='lazy'
        alt='imagem com os dizeres: In God we trust'
        className={`absolute bottom-5 right-10 w-44 h-auto`}
      />
      <footer className='fixed bottom-0 p-6 mt-6 md:m-none w-screen grid place-content-center text-neutral-50'>
        <p className='text-xs md:text-base '>T2C Cargo Transportes | 15.722.160/0001-11</p>
      </footer>
    </section>
  )
}
