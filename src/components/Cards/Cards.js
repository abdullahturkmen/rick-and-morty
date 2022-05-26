import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Cards = ({results}) => {

    let display;

    if (results) {
        display = results.map((x) => {
            let {id, name, image} = x;
            return (

                <div className="col" key={id}>
                <div className="card shadow-sm">
                <img src={image} className="bd-placeholder-img card-img-top" width="100%"  loading="lazy"/>
                  
                  <div className="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div className="d-flex justify-content-between
                      align-items-center">
                      <div className="btn-group">
                        
                          <Link to={`${id}`}  className="btn btn-sm
                          btn-info">View</Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
        });
    } else {
        //display = "Karakter Bitti";
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4
        g-3">
            {display}
        </div>
    )
}

export default Cards
