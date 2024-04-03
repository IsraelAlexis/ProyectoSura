import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Formulario.css"
import Swal from 'sweetalert2'
import baseDatosCliente from "../utils/baseDatosCliente.json"

export function Formulario(){

    const[verplaca,guardarPlaca]=useState("")
    const[vercontraseña,guardarContraseña]=useState("")
    const[verusuario,guardarUsuario]=useState("")

    
    let enrutador=useNavigate()
    

    function procesarFormulario(evento){
        evento.preventDefault()
        let busqueda=baseDatosCliente.find(function(usuario) {
            return(usuario.documento==verusuario && usuario.contraseña==vercontraseña
             && usuario.placa==verplaca)
    })
    if (busqueda==undefined) {
        
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario Incorrecto",
            footer: 'Intenta de nuevo'
            
          });
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Bienvenido",
            showConfirmButton: false,
            timer: 1500
          });
        
     
          
    setTimeout (enrutador("/home", {state:{usuario:busqueda}}),5000) 
    
    }
        
    }

    return(
        <>
        <section className="container" >
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-6">
                    <img src="../../src/assets/logo sura.webp" alt=""className="img-fluid" />
                    <form className="border rounded p-4" onSubmit={procesarFormulario}>
                        <h2 className="fuente">Gestiona Servicios</h2>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-car-front-fill"></i></span>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="placa" 
                            id="placa"
                            onChange={function(evento){
                                guardarPlaca(evento.target.value)
                            }}
                        />
                        </div>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Usuario" 
                            id="identificacion"
                            onChange={function(evento){
                                guardarUsuario(evento.target.value)
                            }}
                        />
                        </div>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i></span>
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Contraseña"
                            id="contraseña"
                            onChange={function(evento){
                                guardarContraseña(evento.target.value)
                            }} 
                            />
                        </div>
                        <button type="submit" class="fondoboton">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )}