import React, { useState, useEffect} from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import mainLogo from './assets/img/logo.png';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Details from './components/Details/Details';

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  //console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  

  return (
    <div classNameName="App">


<header className="main-header">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={mainLogo}
              height="50px" alt="" /></a>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active text-uppercase" aria-current="page"
                  href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-uppercase" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-uppercase" href="#"
                  tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search"
                placeholder="Search Character Name" aria-label="Search" />
              <button className="btn btn-success"
                type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <section className="py-5 text-start container">
        <div className="row py-lg-5">
          <div className="col-lg-10 col-md-8 mx-auto py-5">
            <h1 className="text-light">Album example</h1>
            <p className="lead text-light">Something short and leading about the
              collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it
              entirely.</p>
            <p>
              <a href="#" className="btn btn-success rounded-pill btn-lg my-2">Main
                call to action</a>
              <a href="#" className="btn btn-outline-success rounded-pill btn-lg
                my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>
    </header>

    <main>

      <div className="album py-5">
        <div className="container">

          
              <Cards results={results}/>
         
        </div>
      </div>

    </main>

    <Details />
    <Filters />

    </div>
  );
}

export default App;
