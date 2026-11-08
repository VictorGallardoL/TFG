
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router";

import Inicio from "./pages/Inicio";
import PanelLayout from "./components/PanelLayout";

function PaginaProvisional({
  titulo,
  descripcion,
}: {
  titulo: string;
  descripcion: string;
}) {
  return (
    <section className="panel-pagina">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <div className="panel-tarjeta">
        <h2>Sección en desarrollo</h2>
        <p>
          Esta funcionalidad se incorporará en los próximos
          sprints.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/app" element={<PanelLayout />}>
          <Route
            index
            element={
              <PaginaProvisional
                titulo="Panel principal"
                descripcion="Bienvenido a BMVISION."
              />
            }
          />
          <Route
            path="partidos"
            element={
              <PaginaProvisional
                titulo="Mis partidos"
                descripcion="Aquí podrás gestionar tus partidos."
              />
            }
          />
          <Route
            path="perfil"
            element={
              <PaginaProvisional
                titulo="Mi perfil"
                descripcion="Aquí podrás gestionar tu cuenta."
              />
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <main className="panel-no-encontrada">
              <h1>Página no encontrada</h1>
              <Link to="/">Volver al inicio</Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
