import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SecondsCounter from "./components/SecondsCounter";
import Botones from "./components/Botones";

let seconds = 0;
let intervalId = null;

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
    root.render(
        <>
            <Botones parar={parar} reanudar={reanudar} reiniciar={reiniciar} />
            <SecondsCounter seconds={seconds} />
        </>
    );
};

const parar = () => clearInterval(intervalId);

const reanudar = () => {
    intervalId = setInterval(() => { seconds++; render(); }, 1000);
};

const reiniciar = () => {
    clearInterval(intervalId);
    seconds = 0;
    render();
};

intervalId = setInterval(() => { seconds++; render(); }, 1000);
render();