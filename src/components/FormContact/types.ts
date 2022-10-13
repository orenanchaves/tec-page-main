export interface FormContactTypes {
  name: string
  email: string
  phone: number
  subject: string
  message: string
}
export interface FormContactProps {
  onSubmit: (data: FormContactTypes) => Promise<void>
}
