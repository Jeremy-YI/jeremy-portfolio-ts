import Pages from '@/routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
