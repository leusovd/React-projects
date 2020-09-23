import React from 'react';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6 d-flex justify-content-center">
                {left}
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-start">
                {right}
            </div>
        </div>
    );
};

export default Row;