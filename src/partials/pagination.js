import React from 'react';

const Pagination = (props) => {
    if(!props.pagination){
        return null;
    }
    const current = props.pagination.currentPage;
    const last = props.pagination.lastPage;
    let pageLink = [];

    if(current != 1) {
        pageLink.push(
            <li className="page-item">
                <a className="page-link" href={`?page=<${current - 1}`} aria-label="Previous">
                    Previous
                </a>
            </li>
        );
    } else {
        pageLink.push(
            <li className="page-item disabled">
                <a className="page-link" aria-label="Previous">
                    Previous
                </a>
            </li>
        )
    }
    for(let i = current - 2; i <= current + 2 && i <= last; i++){
        if(i < 1) continue;
        else if(i == current) {
            pageLink.push(
                <li className="page-item active">
                    <a className="page-link" href={`?page=${i}`}>{i}</a>
                </li>
            )
        } else {
            pageLink.push(
                <li className="page-item">
                    <a className="page-link" href={`?page=${i}`}>{i}</a>
                </li>
            )
        }
    }
    if(current !== last){
        pageLink.push(
            <li className="page-item">
                <a className="page-link" href={`?page=${current + 1}`} aria-label="Next">
                    Next
                </a>
            </li>
        )
    } else {
        pageLink.push(
            <li className="page-item disabled">
                <a className="page-link" aria-label="Next">
                    Next
                </a>
            </li>
        )
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {pageLink}
            </ul>
        </nav>
    )
}

export default Pagination;