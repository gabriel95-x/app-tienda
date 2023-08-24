import React, { useState } from 'react'

const OrderForm = ({ total, onConfirm }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mail, setMail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { nombre, apellido, mail }
        onConfirm(user)
    }

    return (
        <div className="card border-danger  mt-2 text-start ">
            <div className="card-header bg-transparent border-secondary ">
                <h1>Confirmar Orden</h1>
            </div>
            <div className="card-body ">
                <form
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                    
                >
                    <div className="col-md-4">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Mail</label>
                        <input
                            type="email"
                            id="exampleInputEmail1"
                            className="form-control"
                            onChange={(e) => setMail(e.target.value)}
                            aria-describedby="emailHelp"
                            required
                        ></input>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">Total a pagar: ${total} </label>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-8">
                        <button type="submit" className="btn  btn-primary btn-block">
                            Finalizar compra
                        </button>
                    </div>
                </form>
            </div>
        </div>)
}

export default OrderForm