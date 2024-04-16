/* eslint-disable react/jsx-no-undef */
import './App.css'
import About from './component/About/About'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import Service from './component/Service/Service'

function App() {

  return (

    <div className="app">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Service></Service>
    </div>
  )
}

export default App
// background-image: linear-gradient(to left bottom, #121314, #1c1d1e, #252827, #303231, #3c3d3b); 
// background-image: linear-gradient(to left bottom, #272325, #231e21, #1f191d, #1a141a, #160d17, #150b16, #140914, #130713, #160a14, #180e15, #1a1016, #1c1317); 
// background-image: linear-gradient(to left bottom, #1d1d1d, #1c1b1c, #1a1a1b, #19181a, #181619, #181619, #181619, #181619, #19181a, #1a1a1b, #1c1b1c, #1d1d1d); 
 