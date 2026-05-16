"use client"

export default function ContactCard({
  name,
  address,
  phone,
  email,
}) {
  return (
    <div className="card shadow-sm">
      <div className="card-body d-flex align-items-center py-3 px-4">
        {/* Profile Image */}
        <img
          src={"https://tse4.mm.bing.net/th/id/OIP.qqzW6pxxHVFPnRgV27xOagHaJ4?pid=Api&P=0&h=180"}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "120px", height: "120px"}}
        />

        {/* Contact Info */}
        <div className="flex-grow-1 ms-4">
          <span className="mb-1 fw-semibold">{name}</span>
          <div className="d-flex aling-items-center flex-column gap-1 text-muted mb-1">
            <i className="bi bi-geo-alt text-primary me-3"></i>

            <div>
               <div className="d-flex aling-items-center flex-column gap-1 text-muted mb-1"></div> 
              <i className="bi bi-geo-alt text-primary me-2"></i>
              {address}
            </div>
            <div>
                <div className="d-flex aling-items-center flex-column gap-1 text-muted mb-1"></div>
              <i className="bi bi-telephone text-primary me-2"></i>
              {phone}
            </div>
            <div>
                <div className="d-flex aling-items-center flex-column gap-1 text-muted mb-1"></div>
              <i className="bi bi-envelope text-primary me-2"></i>
              {email}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secundary btn-sm"
            title="Editar"
          >
           Editar 
          </button>
          <button
            className="btn btn-outline-secundary btn-sm"
            title="Eliminar"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
