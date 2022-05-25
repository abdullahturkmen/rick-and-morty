import React, { useState } from "react";


const Filters = ({setStatus, setSpecies, setGender, updatePageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"];
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    let genders = ["female", "male", "genderless", "unknown"];


    const resetRadioState = () => {
        setStatus("");
        setSpecies("");
        setGender("");
        
      }
    return (
        <div>
            <div className="filter-modal-btn" data-bs-toggle="modal" data-bs-target="#filterModal">
                <i className="fa fa-sliders"></i>
            </div>


            <div className="modal fade" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filters</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <fieldset>
                                <legend>Status</legend>
                                <div className='row px-2 pb-3'>
                                    {
                                    status.map((item, index) => (
                                        <div class="form-check col-12 col-md-6">
                                            <input class="form-check-input" type="radio" name="flexRadioDefaultstatus"
                                                id={item}
                                                onClick={
                                                    (x) => {
                                                        setStatus(item);
                                                    }
                                                }/>
                                            <label class="form-check-label text-capitalize"
                                                for={item}>
                                                {item} </label>
                                        </div>
                                    ))
                                } </div>
                            </fieldset>


                            <fieldset>
                                <legend>Species</legend>
                                <div className='row px-2 pb-3'>
                                    {
                                    species.map((item, index) => (
                                        <div class="form-check col-12 col-md-6">
                                            <input class="form-check-input" type="radio" name="flexRadioDefaultspecies"
                                                id={item}
                                                onClick={
                                                    (x) => {
                                                        setSpecies(item);
                                                    }
                                                }/>
                                            <label class="form-check-label text-capitalize"
                                                for={item}>
                                                {item} </label>

                                        </div>
                                    ))
                                } </div>

                            </fieldset>


                            <fieldset>
                                <legend>Genders</legend>
                                <div className='row px-2'>
                                    {
                                    genders.map((item, index) => (
                                        <div class="form-check col-12 col-md-6">
                                            <input class="form-check-input" type="radio" name="flexRadioDefaultgenders"
                                                id={item}
                                                onClick={
                                                    (x) => {
                                                        setGender(item);
                                                    }
                                                }/>
                                            <label class="form-check-label text-capitalize"
                                                for={item}>
                                                {item} </label>
                                        </div>
                                    ))
                                }</div>
                            </fieldset>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning"
                                onClick={resetRadioState}>Reset</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters
