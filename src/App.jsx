import './App.css'
import MapView from './components/MapView'
import Locacion from './components/Locacion'
import Header from './components/Header'
import Controles from './components/Controles'
import Botones from './components/Botones'

function App() {

  return (
    <div className="App">
      <Header></Header>
     {/*  <MapView></MapView>     */} 
   {/*  <Controles></Controles> */}
    {/*   <Locacion></Locacion>  */}
    <Botones></Botones>
    </div>
  )
}

export default App
