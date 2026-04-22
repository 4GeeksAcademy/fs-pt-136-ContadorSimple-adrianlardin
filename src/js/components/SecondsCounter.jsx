import React, { useEffect } from "react";


const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, "0").split("");

    return (
            <div className="clock row d-flex justify-content-center gap-4">
                <div className="col-auto caja">
                    <i className="fa-regular fa-clock"></i>
                </div>
                {digits.map((digit, index) => (
                    <div key={index} className="col-1 caja">
                        {digit}
                    </div>
                ))}
            </div>
    );
};

export default SecondsCounter;