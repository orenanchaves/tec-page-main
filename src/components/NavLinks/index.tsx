import { NavLinksProps } from './types'

export const NavLinks: React.FC<NavLinksProps> = ({ children, onClick }) => {
  return (
    <li
      className=' text-neutral-50 text-lg md:text-xl xl:text-2xl px-2 py-4 hover:text-brand-orange transition-colors hover:transition-colors delay-75 cursor-pointer'
      aria-label={'menu item'}
      role='menuitem'
      onClick={onClick}
    >
      {children}
    </li>
  )
}
