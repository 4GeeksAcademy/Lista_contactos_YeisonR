"use client"

import { useState } from "react"

export default function AddContacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    console.log("Hola");
    
    
  } 

  return (
    <div className="card border-0 shadow-sm" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div className="card-body p-4">
        <h2 className="text-center mb-4 fw-bold">Agrega Un Nuevo Contacto</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label small fw-medium">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ingrese Nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label small fw-medium">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingrese Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label small fw-medium">
              Teléfono
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ingrese Teléfono"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label small fw-medium">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Ingrese Dirección"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            save
          </button>

          <div className="text-center mt-3">
            <a
              href="#"
              className="text-decoration-underline text-primary small"
              onClick={(e) => {
                e.preventDefault()
                onCancel?.()
              }}
            >
              or get back to contacts
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
