import { HeroTitleProps } from './types'

export const HeroTitle: React.FC<HeroTitleProps> = ({ title, append }) => {
  return (
    <h2 className='font-bold text-neutral-50 text-4xl lg:text-5xl xl:text-[70px] lg:leading-none'>
      {title} {append && <span className='text-brand-orange'>&</span>}
    </h2>
  )
}
