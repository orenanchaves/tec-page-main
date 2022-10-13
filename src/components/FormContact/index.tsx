import { useForm, SubmitHandler } from 'react-hook-form'
import { Modal } from '../Modal'
import { HeaderForm } from '../HeaderForm'
import { FormContactTypes, FormContactProps } from './types'

export const FormContact: React.FC<FormContactProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormContactTypes>()

  const handleSendData: SubmitHandler<FormContactTypes> = async (data) => {
    await onSubmit(data)
    reset()
  }
  return (
    <Modal>
      <form
        method='POST'
        className='flex flex-col w-full px-4 lg:px-16 gap-4 py-6'
        onSubmit={handleSubmit(handleSendData)}
      >
        <input type='text' name='_honey' style={{ display: 'none' }} />
        <HeaderForm title='Contato' />
        <div className='flex flex-col gap-1 mt-6'>
          <input
            className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
            placeholder='Nome'
            {...register('name', { required: true })}
          />
          {errors?.name && (
            <p className='text-xs text-red-700'>Campo requerido!</p>
          )}
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='E-mail'
              type='email'
              {...register('email', { required: true })}
            />
            {errors?.email && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='Telefone'
              type='phone'
              inputMode='tel'
              {...register('phone', { required: true })}
            />
            {errors?.phone && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <input
            className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
            placeholder='Assunto'
            {...register('subject', { required: true })}
          />
          {errors?.subject && (
            <p className='text-xs text-red-700'>Campo requerido!</p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <textarea
            {...register('message', { required: true })}
            id='message'
            cols={10}
            rows={4}
            placeholder='Mensagem'
            className='overflow-auto scrollbar-thin p-4 resize-none w-full bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-text placeholder:text-brand-text placeholder:text-sm lg:placeholder:text-lg'
          />
          {errors?.message && (
            <p className='text-xs text-red-700'>Campo requerido!</p>
          )}
        </div>
        <div>
          <button
            type='submit'
            className='bg-brand-blue text-neutral-50 text-xl lg:text-2xl px-8 w-full lg:w-40 lg:px-12 py-4 outline-0 focus:ring-1 focus:ring-offset-1 focus:ring-brand-blue/60 focus:ring-offset-brand-blue/30'
          >
            Enviar
          </button>
        </div>
      </form>
    </Modal>
  )
}
