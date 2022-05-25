import React, {useState, useEffect, Component} from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Details from './components/Details/Details';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import mainLogo from './assets/img/logo.png';
import Footer from './components/Footer/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App"></div>

            <Routes>
                <Route path='/'
                    element={<Home/>}/>
                <Route path='/:id'
                    element={<Details/>}/>
            </Routes>
        </Router>
    );
}

const Home = () => {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, setStatus] = useState("");
    let [species, setSpecies] = useState("");
    let [gender, setGender] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData;
    // console.log(fetchedData.info);
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);


    return (
        <div className="App">


            <header className="main-header">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                    <Link to="/" className="navbar-brand"><img src={mainLogo}
                                height="50px"
                                alt=""/></Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active text-uppercase">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-uppercase" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-uppercase" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <Search setSearch={setSearch}/>
                        </div>
                    </div>
                </nav>

                <section className="py-5 text-start container">
                    <div className="row py-lg-5">
                        <div className="col-lg-10 col-md-8 mx-auto py-5">
                            <h1 className="text-light">Rick and Morty</h1>
                            <p className="lead text-light">a never-ending fart joke wrapped around a studied look into nihilism</p>
                            <p>
                                <a href="#" className="btn btn-success rounded-pill btn-lg my-2">Main
                                                                                        call to action</a>

                            </p>
                        </div>
                    </div>
                </section>
            </header>

            <main className='home-main'>

                <div className="album py-5">
                    <div className="container">


                        <Cards results={results}/>

                    </div>

                    <Pagination setPageNumber={setPageNumber}/>
                </div>

            </main>

            <Footer/>

            <Filters setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}/>

        </div>
    );
}

export default App;
