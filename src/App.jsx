

function App() {

  return (
    <>
    <header className="bg-darkBlue text-white px-5 py-4">
      <nav className="d-flex justify-content-between pb-3">
        <h2 className="fw-bold fs-1">Boldo</h2>
        <div className="d-flex justify-content-center gap-3">
         <a className="text-white text-decoration-none" href="#">Product</a>
         <a className="text-white text-decoration-none" href="#">Services</a>
         <a className="text-white text-decoration-none" href="#">About</a>
         <button className="rounded-pill my-1 px-3 fw-bold">Log In</button>
        </div>
      </nav>

      <div className="row gap-5">
      <article className="p-5 col">
        <h1 className="fs-1">Save time by buidling fast with Boldo Template</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eligendi ducimus corrupti deleniti vero beatae asperiores amet tempore natus dolor. Quis numquam exercitationem harum deserunt ipsam voluptate expedita pariatur magnam.</p>
        <div className="d-flex gap-3">
          <button className="rounded-pill px-4 fw-bold bg-teal p-1">Buy templates</button>
          <button className="rounded-pill px-4 fw-bold p-2 btn btn-outline-light">Explore</button>
        </div>
      </article>
      <article className="col">
        <div className="row h-50">
        <figure className="col bg-peach border-1 rounded-4"><p>Big box</p></figure>
        </div>

        <div className="row gap-3 h-50">
        <figure className="col bg-danger rounded-4"><p>Smal box one</p></figure>
        <figure className="col bg-info rounded-4"><p>Small box two</p></figure>
        </div>
      </article>
      </div>
    </header>



    <main>
      <section>
        <h2>Handshake infograpsic mass market crowdfunding iteration</h2>
        <article>
          <div>
            <figure></figure>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
            <a href="#">Explore page</a>
          </div>
          <div>
            <figure></figure>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
            <a href="#">Explore page</a>
          </div>
          <div>
            <figure></figure>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
            <a href="#">Explore page</a>
          </div>
        </article>
      </section>
    </main>
   


   <footer>
      <article className="row p-5 m-0">
        
      <div className="col">
        <h2>Boldo</h2>
        <p className="w-50">Incidunt eos nobis sit, provident voluptates minus in quidem ad perspiciatis repellat. Amet inventore nam reiciendis impedit quos, dignissimos vel explicabo eaque.</p>
        <p className="pt-4">All right reserved.</p>
      </div>

      <article className="col d-flex justify-content-around">
        <div>
          <h2>Landing</h2>
          <div className="d-flex flex-column gap-4">
            <a className="text-muted text-decoration-none" href="#">Home</a>
            <a className="text-muted text-decoration-none" href="#">Products</a>
            <a className="text-muted text-decoration-none" href="#">Services</a>
          </div>
        </div>

        <div>
          <h2>Conpany</h2>
          <div className="d-flex flex-column gap-4">
            <a className="text-muted text-decoration-none" href="#">Home</a>
            <a className="text-muted text-decoration-none" href="#">Creers</a>
            <a className="text-muted text-decoration-none" href="#">Services</a>
          </div>
        </div>
        
        <div>
          <h2>Recources</h2>
          <div className="d-flex flex-column gap-4">
            <a className="text-muted text-decoration-none" href="#">Blog</a>
            <a className="text-muted text-decoration-none" href="#">Products</a>
            <a className="text-muted text-decoration-none" href="#">Services</a>
          </div>
        </div>
      </article>

      </article>
   </footer>
    </>
  )
}

export default App
