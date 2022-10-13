import { Toaster } from 'react-hot-toast'

import { Hero } from './templates/Hero'

const App: React.FC = () => {
  return (
    <main>
      <Hero />
      <Toaster
        toastOptions={{ style: { zIndex: 1601 } }}
        containerStyle={{ width: '100%' }}
      />
    </main>
  )
}

export default App
