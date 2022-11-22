import React from "react";
import './App.css';

const Footer = () => {
    return(
        <div>
            <div className="container text-center">
                <p>Metodos de pago:<img src="imgs/FormasDePago.png" alt="formas de pago, MercadoPago, visa, MasterCard, Rapipago, PagoFacil"/></p>
            </div>
            <div className="bg-dark">
                <div className="container text-center">
                    <div className="row ">
                        <div className="col-4 WhitCol">
                            <h4>Contactanos</h4>
                            <p>Horarios de atencion</p>
                            <p>Lunes a Viernes de 8 a 17 hs</p>
                            <p>0810-455-6769</p>
                            <p>consultas@outlook.com.ar</p>
                        </div>

                        <div className="col-4 WhitCol">
                            <h4>Contactanos</h4>
                            <p>Horarios de atencion</p>
                            <p>Lunes a Viernes de 8 a 17 hs</p>
                            <p>0810-455-6769</p>
                            <p>consultas@outlook.com.ar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;