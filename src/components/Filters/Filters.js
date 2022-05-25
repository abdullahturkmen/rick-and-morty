import React from 'react'

const Filters = ({setStatus, setSpecies, setType, setGender}) => {
    return (
        <div>
            <div className="filter-modal-btn" data-bs-toggle="modal" data-bs-target="#filterModal">
                <i className="fa fa-sliders"></i>
            </div>


            <div className="modal fade" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filtreleme</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger" onClick={() => {
                  setStatus("Dead");
              }}>Left</button>
  <button type="button" class="btn btn-warning" onClick={() => {
                  setGender("Female");
              }}>Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filters
