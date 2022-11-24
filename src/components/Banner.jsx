import React from "react";
import '../App.css';

const Banner = () => {
    return(
        <div>
            <div>
                <p className="d-flex justify-content-center"><img src="imgs/Banner1.jpg" alt="logo de nike con fondo negro" className="imgBanner"></img></p>
            </div>
            <div className="container text-center">
                <div className="row justify-content-around">
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/af1-looney-tunes.jpg" alt="zapatillas af1 looney tunes balcnas y celestes" className="img-fluid"/></p>
                        <h4> Af1 Looney Tunes</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-warning ">Mas Informacion</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                    
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/af1-High-Have-A-Nike-Day-.jpg" alt="zapatillas af1 high have a nike color rosa, verde y negro" className="img-fluid"/></p>
                        <h4> Af1 high have a nike day</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-warning ">Mas Informacion</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                    
                    <div className="col-3 shadow p-3 mb-5 bg-body rounded">
                        <p><img src="imgs/Jordan-4-Retro-Red-Thunder.jpg" alt="zapatillas Jordan modelo Retro Red Thunder color gris, negro y roja" className="img-fluid"/></p>
                        <h4> Jordan modelo Retro Red Thunder</h4>
                        <div>
                            <p><a href="" target="_blank" className="btn btn-warning ">Mas Informacion</a></p>
                            <button className="btn btn-secondary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;