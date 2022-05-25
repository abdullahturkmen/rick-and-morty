import React from 'react'

const Pagination = ({setPageNumber}) => {


    let prev = () => {
        setPageNumber((x) => x - 1);
    };

    let next = () => {
        setPageNumber((x) => x + 1);
    };

    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end py-5">
                    <li className="page-item ">
                        <a onClick={prev}
                            className="page-link"
                            href="#"
                            
                            aria-disabled="true">Geri</a>
                    </li>
                    <li className="page-item">
                        <a onClick={next}
                            className="page-link"
                            href="#">İleri</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
