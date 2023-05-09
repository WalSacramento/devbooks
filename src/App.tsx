import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/global'

import { Search } from './pages/Search'
import { Books } from './pages/Books'
import { BookDatail } from './pages/BookDatail'


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/books/:bookId' element={<BookDatail/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
