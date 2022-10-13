import { Navbar } from '../Navbar'
import { Logo } from '../Logo'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ isPresent }) => {
  return (
    <header
      className={`${
        isPresent ? 'bg-brand-blue ' : 'bg-transparent'
      } fixed  top-0 left-0 right-0 min-w-screen w-screen px-8 lg:px-36 py-8 flex flex-row justify-between items-center z-50`}
    >
      <Logo width='421.2px' height='22.8px' />

      <Navbar />
    </header>
  )
}
