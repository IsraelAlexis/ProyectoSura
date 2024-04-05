import "./Home.css"

import baseDatosCliente from "../utils/baseDatosCliente.json"

import { useLocation } from "react-router-dom"


export function Home() {

    let location=useLocation() //recibiendi cositas
    let usuario=location.state?.usuario
    
    console.log(usuario)

    console.log(baseDatosCliente.length)
    

    return (

        <>
           <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Bienvenid@ a Autos Sura</h3>
                        <h2 className="text-muted"> {usuario.nombreUsuario} <span className="fuente"></span></h2>
                        <p>En este espacio, puedes observar la cantidad de servicios que le has realizado a tu vehiculo
                        </p>
                        <img src="../../src/assets/img/Asistencia-siempre-con-el-Seguro-de-Autos-SURA.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="row mt-5">
                        <div className="col-12 col-md-2"><i class="bi bi-credit-card-2-front fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Placa</h4>
                        <p>{usuario.placa}</p>
                        </div>  
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-car-front-fill fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Tipo de vehiculo</h4>
                        <p>{usuario.tipoVehiculo}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-truck fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Marca</h4>
                        <p>{usuario.marca}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-bicycle fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Linea</h4>
                        <p>{usuario.linea}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h5>Sr(a) {usuario.nombreUsuario}, estos son los servicios que has realizado a tu vehículo:</h5>
                    </div>
                </div>
            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        usuario.revisiones.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2 fuente">
                                    <h4>Fecha: <i class="bi bi-calendar-check"></i>  {cita.fecha}</h4>
                                    <hr />
                                        <h3>Servicio:{cita.servicio}</h3>
                                        
                                        <h4>Estado servicio: {cita.estadoServicio}</h4>
                                        <h4>Resultado: {cita.resultado}</h4>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )

}