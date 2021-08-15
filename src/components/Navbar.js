
function Navbar() {
    return(
        <div className="container-fluid p-0">
            
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light pt-5">
                <a className="navbar-brand text-primary font-weight-bold ml-4" href="./"><h1>Poderío UI</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-3">
                    <a className="nav-link font-weight-bold" href="./">Home<i className="bi bi-chevron-compact-right"></i></a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link" href="./">Link<i className="bi bi-chevron-compact-right"></i></a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link" href="./">Link<i className="bi bi-chevron-compact-right"></i></a>
                </li>
              </ul>
              
              <button type="button" className="btn btn-primary mx-5">Comprar<i className="bi bi-arrow-right-short"></i></button>
            </div>
           </nav>
        </div>
    )
}

export default Navbar;