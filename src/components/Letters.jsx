import React, { Fragment } from 'react';
import NumeroALetras from '../NumeroLetras.js';

const Letters = ({ cl }) => {

    return (
        <Fragment>
            <div className="card-header">
                {cl < 0 ? `MENOS ${NumeroALetras(Math.abs(cl))}` : NumeroALetras(cl)}
            </div>
        </Fragment>
    );
}

export default Letters;