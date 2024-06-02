export const Header: React.FC = () => {
    return (
      <header className='h-auto w-full bg-light-black flex items-center justify-center'>
        <div className='container flex items-center flex-col md:flex-row'>
          <div className='h-full flex items-center mx-auto px-10 py-5 text-white font-bold'>
            <div className='gnav-item'><a href='App.tsx'>SHOTA ARAI</a></div>
          </div>
          <nav className='flex flex-row-reverse max-w-3xl mx-auto py-5'>
            <ul className='h-full w-full flex items-center justify-between'>
              <li className='gnav-item'><a href='#about'>ABOUT</a></li>
              <li className='gnav-item'><a href='#works'>WORKS</a></li>
              <li className='gnav-item'><a href='#skills'>SKILL</a></li>
              <li className='gnav-item'><a href='#contact'>CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };