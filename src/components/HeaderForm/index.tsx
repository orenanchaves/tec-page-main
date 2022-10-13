import * as Dialog from '@radix-ui/react-dialog'
import whiteLogoImg from '/assets/tec-logo.svg'
import arrowLeftImg from '/assets/arrow-left.svg'
import docImg from '/assets/file.svg'
import { HeaderFormProps } from './types'

export const HeaderForm: React.FC<HeaderFormProps> = ({ title}) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
          <div className='w-24 lg:w-32'>
            <img
              src={whiteLogoImg}
              alt='T&C logo branca'
              width={250}
              height={150}
              className='w-full h-auto'
            />
          </div>

        <Dialog.Close
          asChild
          title={'Fechar'}
          type='button'
          className='w-8 lg:w-10 lg:hover:scale-x-105 transition-transform'
        >
          <img
            src={arrowLeftImg}
            alt='arrow right icon'
            width={100}
            height={100}
            loading='lazy'
            className='w-full h-auto'
          />
        </Dialog.Close>
      </div>
      <div className='flex gap-4 items-center text-neutral-50 text-2xl lg:text-3xl '>
        {title}
      </div>
    </div>
  )
}
