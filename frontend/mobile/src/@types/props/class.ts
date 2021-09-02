type Class = {
  key: string
  subject: string
  description: string
  price: number
  status: number
  educator: {
    key: string
    avatar: string
    name: string
    bio: string
    email: string
    whatsapp: string
  }
}
export default Class
