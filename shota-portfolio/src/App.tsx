// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-white'>
      <Header />
      <section className='text-light-black' id='about'>
        <div className='container flex items-center justify-center mx-auto py-20 flex-col md:flex-row'>
          <div className='w-1/2 flex flex-col items-center justify-center'>
            <h1>新井 将太</h1>
            <h1>Shota Arai</h1>
            <p>2000年6月9日生</p>
            <p>滋賀県出身</p>
          </div>
          <div className='w-1/2 flex items-center justify-center'>
            <img
              src='./imgs/shota.jpg'
              alt='Shota Arai'
              width='75%'
              sizes='30vw'
              className='rounded-full max-w-[75%] md:max-w-[348px]'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
