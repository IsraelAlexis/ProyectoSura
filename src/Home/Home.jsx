import "./Home.css"

import basedatos from "../utils/basedatos.json"


export function Home() {

    console.log(basedatos.length)
    

    return (

        <>
           <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">HOLA {basedatos[0].nombreUsuario} <span className="fuente"></span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim accusantium? Facilis alias, earum in, veritatis dicta accusamus sunt, illum quod officia necessitatibus asperiores. Quae suscipit nostrum, molestiae autem cupiditate est nihil voluptate, dolorem quasi cumque eius! Id ab reiciendis ad ullam dignissimos cumque inventore dicta quia, nostrum rem fugiat?
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tu Grupo Familiar</option>
                        <option value="1">one</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="row mt-5">
                        <div className="col-12 col-md-2"><i class="bi bi-person-arms-up fs-1 fuente "></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Medico de Familia</h4>
                        <p>{basedatos[0].medicoDeFamilia}</p>
                        </div>  
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-person-circle fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Grupo ingreso</h4>
                        <p>{basedatos[0].grupoDeIngreso}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-briefcase-fill fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Estado Afiliacion</h4>
                        <p>Activo</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-1">
                    <div className="col-12 col-md-2"><i class="bi bi-hospital fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">IPS</h4>
                        <p>{basedatos[0].ips}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>Paciente {basedatos[0].nombreUsuario}, estas son tus proximas Citas:</h5>
                    </div>
                </div>
            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        basedatos[0].citasMedicas.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2 fuente">
                                        <h3>{cita.especialidad}</h3>
                                        <h4><i class="bi bi-calendar-check"></i> {cita.fecha}</h4>
                                        <h4>{cita.direccion}</h4>
                                        
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