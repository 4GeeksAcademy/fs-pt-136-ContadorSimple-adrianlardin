import React from "react";

const Botones = ({ parar, reanudar, reiniciar }) => {

    const botonParar = () => parar();
    const botonReanudar = () => reanudar();
    const botonReiniciar = () => reiniciar();

    return (
        <div className="botones row d-flex justify-content-center mt-4">
            <div className="col-auto">
                <button onClick={botonParar} className="btn btn-warning fs-3">Parar</button>
            </div>
            <div className="col-auto">
                <button onClick={botonReanudar} className="btn btn-success fs-3">Reanudar</button>
            </div>
            <div className="col-auto">
                <button onClick={botonReiniciar} className="btn btn-danger fs-3">Reiniciar</button>
            </div>
        </div>
    );
};

export default Botones;