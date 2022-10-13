import * as Dialog from '@radix-ui/react-dialog'
import { ModalProps } from './types'

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 fixed inset-0 transition-all' />
      <Dialog.Content className='fixed h-screen top-0 lg:top-5 left-0 right-0 lg:left-1/4 lg:right-1/4 w-screen lg:w-[90vw] lg:max-w-4xl lg:max-h-[95vh] p-4 bg-brand-orange z-[1600] overflow-y-auto scrollbar-thin scrollbar-track-brand-orange scrollbar-thumb-amber-900'>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
