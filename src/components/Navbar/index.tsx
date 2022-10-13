import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { FormPartner } from '../FormPartner'
import { Icon } from '@iconify-icon/react'
import { NavLinks } from '../NavLinks'
import link from '../../constants/links'
import { toast } from 'react-hot-toast'
import { FormPartnerTypes } from '../FormPartner/types'
import api from '../../lib/api'
import { FormContact } from '../FormContact'
import { FormContactTypes } from '../FormContact/types'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalPartnerOpen, setModalPartnerOpen] = useState(false)
  const [modalContactOpen, setModalContactOpen] = useState(false)
  const activeAria = isOpen ? 'Fechar menu' : 'Abrir menu'
  let expanded = false

  const handleToggleMenu = (event: React.SyntheticEvent) => {
    if (event.type === 'touchstart') {
      event.preventDefault()
    }
    if (event.type === 'clickaway') {
      setIsOpen(!isOpen)
    }
    setIsOpen(!isOpen)
    expanded = true
  }
  const sendPartnerFormData = async (data: FormPartnerTypes) => {
    try {
      const request = await api.post(import.meta.env.VITE_BACKEND_URL, {
        ...data,
        _template: 'box',
        _subject: 'Contact Partner'
      })

      if (request.status === 200) {
        toast.success('Dados enviados com sucesso! Aguarde nosso contato.')
        setTimeout(() => setModalPartnerOpen(false), 1500)
      }
    } catch (err) {
      console.error(err)
      toast.error('Ops! Ocorreu algo inesperado, por favor, tente novamente!')
    }
  }
  const sendContactFormData = async (values: FormContactTypes) => {
    try {
      const request = await api.post(import.meta.env.VITE_BACKEND_URL, {
        ...values,
        _template: 'box',
        _subject: 'Contact'
      })
      if (request.status === 200) {
        toast.success('Dados enviados com sucesso! Aguarde nosso contato.')
        setTimeout(() => setModalContactOpen(false), 1500)
      }
    } catch (err) {
      console.error(err)
      toast.error('Ops! Ocorreu algo inesperado, por favor, tente novamente!')
    }
  }
  return (
    <div>
      <button
        className='bg-transparent outline-0 border-0  flex md:hidden text-neutral-50 cursor-pointer text-3xl'
        aria-controls='menu'
        aria-expanded={expanded}
        arial-label={activeAria}
        onClick={handleToggleMenu}
      >
        {isOpen ? <Icon icon='ph:x-bold' /> : <Icon icon='ph:list-bold' />}
      </button>
      <nav
        className={` ${
          isOpen &&
          'h-screen bg-brand-blue overflow-hidden w-screen transition  absolute -z-10 inset-0'
        } `}
      >
        <ul
          className={`flex-col ${
            isOpen ? 'flex ' : 'hidden md:flex'
          } md:flex-row items-center md:items-start  pt-36 md:pt-6 gap-4  md:gap-6 `}
        >
          <Dialog.Root
            open={modalContactOpen}
            onOpenChange={setModalContactOpen}
          >
            <Dialog.Trigger asChild>
              <NavLinks>Contato</NavLinks>
            </Dialog.Trigger>
            <FormContact onSubmit={sendContactFormData} />
          </Dialog.Root>

          <Dialog.Root
            open={modalPartnerOpen}
            onOpenChange={setModalPartnerOpen}
          >
            <Dialog.Trigger asChild>
              <NavLinks>Seja parceiro</NavLinks>
            </Dialog.Trigger>
            <FormPartner onSubmit={sendPartnerFormData} />
          </Dialog.Root>

          <NavLinks>
            <a
              href={link.whats}
              rel='noopener noreferrer nofollow'
              target='_blank'
              title='Whatsapp'
            >
              <Icon
                icon='ph:whatsapp-logo'
                className='text-neutral-50 hover:text-brand-orange transition-colors hover:transition-colors delay-75 text-3xl'
              />
            </a>
          </NavLinks>

          <NavLinks>
            <a
              href={link.linkedin}
              rel='noopener noreferrer nofollow'
              target='_blank'
              title='Linkedin'
            >
              <Icon
                icon='fa6-brands:linkedin-in'
                className='text-neutral-50 hover:text-brand-orange transition-colors hover:transition-colors delay-75 text-2xl'
              />
            </a>
          </NavLinks>
        </ul>
      </nav>
    </div>
  )
}
