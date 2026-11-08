import { Link } from "react-router";
import { useState } from "react";
import {
  HandFist,
  ArrowRight,
  Clock3,
  MapPin,
  Menu,
  Target,
  X,
  ChartColumnBig,
} from "lucide-react";
import "../App.css";

const funcionalidades = [
  {
    icono: Target,
    titulo: "Lanzamientos y goles",
    descripcion:
      "Consulta los lanzamientos y los goles.",
  },
  {
    icono: ChartColumnBig,
    titulo: "Posesión",
    descripcion:
      "Compara las estadísticas de posesión entre los equipos.",
  },
  {
    icono: MapPin,
    titulo: "Mapas de calor",
    descripcion:
      "Visualiza las zonas de mayor actividad dentro del campo.",
  },
  {
    icono: Clock3,
    titulo: "Eventos del partido",
    descripcion:
      "Consulta las acciones detectadas del partido.",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Sube el partido",
    descripcion: "Selecciona la grabación que quieras analizar.",
  },
  {
    numero: "02",
    titulo: "Procesa el vídeo",
    descripcion: "El sistema analiza las acciones del partido.",
  },
  {
    numero: "03",
    titulo: "Consulta los resultados",
    descripcion: "Explora las estadísticas.",
  },
];

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <div className="pagina">
      <header className="cabecera">
        <div className="contenedor cabecera-interior">
          <a className="marca" href="#inicio" onClick={cerrarMenu}>
            <span className="marca-icono">
              <HandFist size={23} />
            </span>
            <span>BMVISION</span>
          </a>

          <nav
            id="navegacion"
            className={`navegacion ${menuAbierto ? "abierta" : ""}`}
            aria-label="Navegación principal"
          >
            <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
            <a href="#funcionalidades" onClick={cerrarMenu}>
              Funcionalidades
            </a>
            <a href="#como-funciona" onClick={cerrarMenu}>
              Cómo funciona
            </a>
            <Link
              to="/app"
              className="nav-acceder"
              onClick={cerrarMenu}
            >
              Acceder
            </Link>
          </nav>

          <button
            className="boton-menu"
            type="button"
            aria-controls="navegacion"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero contenedor" id="inicio">
          <div className="hero-contenido">
            <span className="etiqueta">
              <span className="punto-etiqueta" />
              ANÁLISIS
            </span>

            <h1>
              Nueva forma de analizar 
              <span> partidos de balonmano</span>
            </h1>

            <p className="hero-descripcion">
              Transforma las grabaciones de balonmano en información
              útil para analizar lo que sucede en la pista.
            </p>

            <div className="hero-acciones">
              <a href="#funcionalidades" className="boton boton-principal">
                Explorar funcionalidades
                <ArrowRight size={18} />
              </a>
              <a href="#como-funciona" className="boton boton-secundario">
                Cómo funciona
              </a>
            </div>
          </div>

          <div className="vista-previa">
            <div className="vista-cabecera">
              <div className="vista-titulo">
                <ChartColumnBig size={16} />
                Resumen del partido
              </div>
              <span className="vista-demo">Vista ilustrativa</span>
            </div>

            <div className="marcador">
              <div className="equipo">
                <span>EQUIPO LOCAL</span>
                <strong>28</strong>
              </div>
              <span className="marcador-separador">:</span>
              <div className="equipo">
                <span>EQUIPO VISITANTE</span>
                <strong>25</strong>
              </div>
            </div>

            <div className="pista-panel">
              <div className="panel-cabecera">
                <span>Actividad en pista</span>
                <span>Mapa de calor</span>
              </div>

              <div className="pista">
                <svg
                  viewBox="0 0 360 180"
                  role="img"
                  aria-label="Representación de una pista de balonmano"
                >
                  <rect x="5" y="5" width="350" height="170" rx="3" />
                  <line x1="180" y1="5" x2="180" y2="175" />
                  <circle cx="180" cy="90" r="20" />
                  <path d="M 5 30 Q 105 90 5 150" />
                  <path d="M 355 30 Q 255 90 355 150" />
                  <rect x="5" y="68" width="15" height="44" />
                  <rect x="340" y="68" width="15" height="44" />
                </svg>
                <div className="calor calor-1" />
                <div className="calor calor-2" />
                <div className="calor calor-3" />
              </div>
            </div>

            <div className="posesion">
              <div className="posesion-titulo">
                <span>Posesión de balón</span>
                <span>54% / 46%</span>
              </div>
              <div className="posesion-barra">
                <div className="posesion-local" />
                <div className="posesion-visitante" />
              </div>
              <div className="posesion-leyenda">
                <span><i className="punto-local" /> Local</span>
                <span><i className="punto-visitante" /> Visitante</span>
              </div>
            </div>
          </div>
        </section>

        <section className="seccion-funcionalidades" id="funcionalidades">
          <div className="contenedor">
            <div className="seccion-encabezado">
              <span className="subtitulo">FUNCIONALIDADES</span>
              <h2>Plataforma para guardar todas tus estadísticas</h2>
            </div>

            <div className="funcionalidades-grid">
              {funcionalidades.map(({ icono: Icono, titulo, descripcion }) => (
                <article className="funcionalidad" key={titulo}>
                  <div className="funcionalidad-icono">
                    <Icono size={24} strokeWidth={1.8} />
                  </div>
                  <h3>{titulo}</h3>
                  <p>{descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seccion-proceso" id="como-funciona">
          <div className="contenedor">
            <div className="seccion-encabezado">
              <span className="subtitulo">CÓMO FUNCIONA</span>
              <h2>Obteniendo estadísticas de manera sencilla</h2>
            </div>

            <div className="pasos-grid">
              {pasos.map((paso) => (
                <article className="paso" key={paso.numero}>
                  <span className="paso-numero">{paso.numero}</span>
                  <h3>{paso.titulo}</h3>
                  <p>{paso.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie-interior">
          <span>BMVISION</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
