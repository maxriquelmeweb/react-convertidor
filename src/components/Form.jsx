import React, { Fragment, useState, useEffect } from 'react';
import Letters from './Letters';


const Form = ({ valorDolar }) => {

    //state para el peso chileno
    const [cl, guardarCL] = useState(0);
    //state para el dolar
    const [dolar, guardarDolar] = useState(0);
    //state para el peso dominicano
    const [dom, guardarDom] = useState(0);
    //
    const [clase, guardarClase] = useState('col-md-4');


    //actualiza cuando ingresamos en peso chileno
    const actualizarDesdeCL = e => {
        if (isNaN(e)) {
            guardarCL('');
            guardarDolar(0);
            guardarDom(0);
            return;
        }
        guardarCL(e);
        let dolar = (e / valorDolar).toFixed(4);
        guardarDolar(dolar);
        let dom = (e / 13).toFixed(4)
        guardarDom(dom);
    }

    //actualiza cuando ingresamos dolar
    const actualizarDesdeDolar = e => {
        if (isNaN(e)) {
            guardarDolar('');
            guardarDom(0);
            guardarCL(0);
            return;
        }
        guardarDolar(e);
        let cl = (e * valorDolar).toFixed(4);
        guardarCL(cl);
        let dom = (cl / 13).toFixed(4)
        guardarDom(dom);
    }

    //actualiza cuando ingresamos en peso dominicano
    const actualizarDesdeDom = e => {
        if (isNaN(e)) {
            guardarDom('');
            guardarDolar(0);
            guardarCL(0);
            return;
        }
        guardarDom(e);
        let cl = (e / 13).toFixed(4);
        guardarCL(cl);
        let dolar = (cl / valorDolar).toFixed(4);
        guardarDolar(dolar);
    }

    // UseEffect que actualizara las clases de los input cuando el dolar super los 9999
    useEffect(() => {
        if (dolar > 9999) {
            guardarClase('col-md-12')
        } else {
            guardarClase('col-md-4')
        }
    }, [dolar]);

    return (
        <Fragment>
            <div className="container">
                <nav className="navbar navbar-light bg-light justify-content-md-center">
                    <a className="navbar-brand" href="/#">Convertidor de monedas</a>
                </nav>
                <div className="row mt-3 justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Puedes convertir desde cualquier.
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className={clase}>
                                        <label>Peso Chileno</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input type="number" className="form-control form-control-lg" placeholder="Ingrese valor" value={cl}
                                                onChange={e => actualizarDesdeCL(parseInt(e.target.value))} onKeyDownCapture={cl === 0 ? () => guardarCL('') : null} />
                                        </div>
                                    </div>
                                    <div className={clase}>
                                        <label>Dólar Estadounidense</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input type="number" className="form-control form-control-lg" placeholder="Ingrese valor" value={dolar}
                                                onChange={e => actualizarDesdeDolar(parseInt(e.target.value))} onKeyDownCapture={dolar === 0 ? () => guardarDolar('') : null} />
                                        </div>
                                    </div>
                                    <div className={clase}>
                                        <label>Peso Dominicano</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input type="number" className="form-control form-control-lg" placeholder="Ingrese valor" value={dom}
                                                onChange={e => actualizarDesdeDom(parseInt(e.target.value))} onKeyDownCapture={dom === 0 ? () => guardarDom('') : null} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {cl < 1000000000 && cl > -1000000000 ? cl === '' ? null :
                                <Letters
                                    cl={cl}
                                /> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default Form;