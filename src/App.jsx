import './App.css'
import { Route , Routes } from 'react-router-dom'

import CreateCrud from './Components/CreateCrud'
import Read from './Components/Read'
import Edit from './Components/CRUDs/Edit'


function App() {

  return (
    <div>
      <h1>CRUD Operations</h1>
      {/* <CreateCrud /> */}

      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<CreateCrud/>}></Route>
        <Route path='/edit' element={<Edit />} ></Route>
        <Route path='*' element={<h2> Path Not found</h2>}></Route>
      </Routes>
    </div>
  )
}

export default App
