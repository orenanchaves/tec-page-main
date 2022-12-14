import { useForm, SubmitHandler } from 'react-hook-form'
import { Modal } from '../Modal'
import { HeaderForm } from '../HeaderForm'
import { FormPartnerTypes, FormPartnerProps } from './types'

export const FormPartner: React.FC<FormPartnerProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormPartnerTypes>()

  const handleSendData: SubmitHandler<FormPartnerTypes> = async (data) => {
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
        <HeaderForm title='Cadastro de parceiros'  />
        <div className='flex justify-between items-center gap-4'>
          <div className='flex flex-col gap-1 grow'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='Nome'
              {...register('name', { required: true })}
            />
            {errors?.name && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='CPF'
              type='text'
              inputMode='numeric'
              pattern='[0-9]*'
              {...register('cpf', { required: true })}
            />
            {errors?.cpf && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <input
            className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
            placeholder='Empresa'
            {...register('company', { required: true })}
          />
          {errors?.company && (
            <p className='text-xs text-red-700'>Campo requerido!</p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <input
            className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
            placeholder='Endere??o'
            {...register('address', { required: true })}
          />
          {errors?.address && (
            <p className='text-xs text-red-700'>Campo requerido!</p>
          )}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='Regi??o de interesse'
              {...register('region', { required: true })}
            />
            {errors?.region && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <input
              className='w-full px-2 py-2 md:py-3 lg:px-6 bg-neutral-50 outline-0 focus:ring-1 focus:ring-amber-900 focus:ring-offset-amber-900 focus:ring-offset-1 text-brand-gray placeholder:text-brand-text lg:placeholder:text-lg placeholder:text-sm'
              placeholder='Tipo ve??culo'
              {...register('option', { required: true })}
            />
            {errors?.option && (
              <p className='text-xs text-red-700'>Campo requerido!</p>
            )}
          </div>
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
            placeholder='Motivo do contato'
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
            rows={2}
            placeholder='J?? trabalhou com entregas? Conte-nos um pouco!'
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
