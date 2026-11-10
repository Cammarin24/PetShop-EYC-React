import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import AdminHome from './components/AdminHome';
import NewUser from './components/NewUser';

function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const handleUserCreated = (nuevoUsuario) => {
    setListaUsuarios([...listaUsuarios, nuevoUsuario]);
    setVistaActual('home');
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Barra de navegación superior con estilo de la tienda */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 text-warning">
            🐾 PetShop-EYC <span className="text-white fs-6 fw-normal">| Panel Admin</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-2">
              <Button 
                variant={vistaActual === 'home' ? 'warning' : 'outline-light'} 
                className="fw-semibold px-3"
                onClick={() => setVistaActual('home')}
              >
                Home Admin
              </Button>
              <Button 
                variant={vistaActual === 'nuevo-usuario' ? 'warning' : 'outline-light'}
                className="fw-semibold px-3"
                onClick={() => setVistaActual('nuevo-usuario')}
              >
                + Nuevo Usuario
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido dinámico principal */}
      <main className="py-4">
        {vistaActual === 'home' ? (
          <AdminHome 
            usuarios={listaUsuarios} 
            onNavigateToNewUser={() => setVistaActual('nuevo-usuario')} 
          />
        ) : (
          <NewUser 
            onUserCreated={handleUserCreated} 
            onBack={() => setVistaActual('home')}
          />
        )}
      </main>

      {/* Pie de página institucional */}
      <footer className="bg-dark text-white text-center py-3 mt-auto border-top border-secondary">
        <Container>
          <p className="small mb-0 text-white-50">PetShop-EYC © 2026 -  (Duoc UC)</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;