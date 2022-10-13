import { LogoProps } from './types'
import logoImg from '/assets/tec-logo.png'
export const Logo: React.FC<LogoProps> = ({ width, height, py }) => {
  return (
    <div
      className={`w-44 lg:max-w-[${width}] lg:h-${height} ${
        py && 'lg:py-12 py-4'
      } `}
    >
      <a href='#home'>
        <img
          src={logoImg}
          alt='logo T&C Logistics Company'
          width={100}
          height={100}
          loading='lazy'
          className='w-full h-auto'
        />
      </a>
    </div>
  )
}
