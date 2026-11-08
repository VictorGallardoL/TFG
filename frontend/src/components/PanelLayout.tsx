
import { useState } from "react";
import {
  HandFist,
  House,
  LayoutDashboard,
  CalendarDays,
  UserRound,
  Menu,
  X,
} from "lucide-react";

import { Link, NavLink, Outlet } from "react-router";
import "../PanelLayout.css";

const enlaces = [
  {
    ruta: "/app",
    texto: "Panel principal",
    icono: LayoutDashboard,
  },
  {
    ruta: "/app/partidos",
    texto: "Mis partidos",
    icono: CalendarDays,
  },
  {
    ruta: "/app/perfil",
    texto: "Mi perfil",
    icono: UserRound,
  },
];

export default function PanelLayout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="panel-layout">
      {menuAbierto && (
        <button
          className="panel-fondo-movil"
          aria-label="Cerrar navegación"
          onClick={cerrarMenu}
        />
      )}

      <aside
        id="panel-sidebar"
        className={`panel-sidebar ${
          menuAbierto ? "abierto" : ""
        }`}
      >
        <div className="panel-marca">
          <div className="panel-logo">
            <HandFist size={23} />
          </div>
          <span>BMVISION</span>

          <button
            type="button"
            className="panel-cerrar"
            aria-label="Cerrar menú"
            onClick={cerrarMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav
          className="panel-navegacion"
          aria-label="Secciones de la plataforma"
        >
          {enlaces.map(({ ruta, texto, icono: Icono }) => (
            <NavLink
              key={ruta}
              to={ruta}
              end
              onClick={cerrarMenu}
              className={({ isActive }) =>
                `panel-enlace ${isActive ? "activo" : ""}`
              }
            >
              <Icono size={20} />
              <span>{texto}</span>
            </NavLink>
          ))}
        </nav>

        <div className="panel-inferior">
          <Link to="/" onClick={cerrarMenu}>
            <House size={20} />
            <span>Página de inicio</span>
          </Link>
        </div>
      </aside>

      <div className="panel-contenido">
        <header className="panel-header">
          <button
            type="button"
            className="panel-menu-movil"
            aria-label="Abrir navegación"
            aria-controls="panel-sidebar"
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(true)}
          >
            <Menu size={24} />
          </button>

          <span>BMVISION</span>
        </header>

        <main className="panel-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
