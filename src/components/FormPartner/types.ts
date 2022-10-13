export interface FormPartnerTypes {
  name: string
  email: string
  cpf: number
  role: string
  company: string
  address: string
  region: string
  option: string
  phone: number
  subject: string
  message: string
}
export interface FormPartnerProps {
  onSubmit: (data: FormPartnerTypes) => Promise<void>
}
