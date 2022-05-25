import React, {useState, useEffect, Component} from 'react';
import {Outlet, Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import mainLogo from '../../assets/img/logo.png';
import Footer from '../Footer/Footer';

const Detils = () => {
    let {id} = useParams();

    let [fetchedData, updateFetchedData] = useState([]);
    let {
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image
    } = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div className="Details">

            <header className="">
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

                        </div>


                        <ol className="breadcrumb d-flex">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {name}</li>
                        </ol>
                    </div>
                </nav>
            </header>

            <main>

                <div className="container">
                    <div className="col-lg-12 user-detail mb-5">
                        <div className="card bg-dark d-flex align-items-center justify-content-center ">
                            <div className="w-100"><img src={image}
                                    alt=""
                                    className="rounded-circle"/></div>
                            <div className="text-center ">
                                <h2 className="name text-light">
                                    {name}</h2>
                                <p className="job text-light">

                                    {
                                    (() => {
                                        if (status === "Dead") {
                                            return <div className="badge bg-danger me-2">
                                                {status}</div>;
                                        } else if (status === "Alive") {
                                            return <div className=" badge bg-success me-2">
                                                {status}</div>;
                                        } else {
                                            return <div className="badge bg-secondary me-2">
                                                {status}</div>;
                                        }
                                    })()
                                }
                                    <span className='badge bg-info'>
                                        {species}</span>
                                </p>

                                <table class="table table-warning">

                                    <tbody>
                                        <tr>
                                            <th scope="row">Type</th>
                                            <td>{type}</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td>{gender}</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Origin</th>
                                            <td>{
                                                origin ?. name
                                            }</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Last Location</th>
                                            <td>{
                                                location ?. name
                                            }</td>
                                        </tr>
                                    </tbody>

                                </table>

                                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                    <li className="icon ">
                                        <span className="fa fa-twitter  text-light"></span>
                                    </li>
                                    <li className="icon mx-2">
                                        <span className="fa fa-facebook text-light"></span>
                                    </li>
                                    <li className="icon me-2">
                                        <span className="fa fa-google-plus text-light"></span>
                                    </li>
                                    <li className="icon ">
                                        <span className="fa fa-instagram text-light"></span>
                                    </li>
                                </ul>
                                <p className="dis pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    )
}

export default Detils
