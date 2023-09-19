
import search from '../assets/search.svg'

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul><li><span className='LogoM'>Mysti</span><span className='LogoX'>X</span></li></ul>
        </nav>

        <h2>
          <div className='Hcontainer'>
            <input type="text" className='Hsearch' placeholder="Buscar..." />
          </div>
        </h2>
      </header>
    </>
  );
}

export default Header;
