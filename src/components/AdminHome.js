import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';

function AdminHome({ usuarios = [], onNavigateToNewUser }) {
  return (
    <Container className="py-4">
      {/* Cabecera idéntica a tu proyecto original */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h1 className="fw-bold text-dark">Panel de Administración</h1>
          <p className="text-muted">Gestión general de PetShop-EYC - Control de usuarios y registros</p>
        </Col>
        <Col xs="auto">
          {onNavigateToNewUser && (
            <Button variant="primary" className="shadow-sm fw-bold px-4" onClick={onNavigateToNewUser}>
              <i className="bi bi-person-plus-fill me-2"></i>+ Nuevo Usuario
            </Button>
          )}
        </Col>
      </Row>

      {/* Tarjetas de Métricas del Negocio */}
      <Row className="mb-4">
        <Col md={4} className="mb-3">
          <Card className="border-0 shadow-sm bg-white border-start border-primary border-4">
            <Card.Body>
              <h6 className="text-muted text-uppercase fw-bold small">Total Registrados</h6>
              <h2 className="fw-bold text-primary mb-0">{usuarios.length + 3}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="border-0 shadow-sm bg-white border-start border-success border-4">
            <Card.Body>
              <h6 className="text-muted text-uppercase fw-bold small">Inventario Activo</h6>
              <h2 className="fw-bold text-success mb-0">45 Productos</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="border-0 shadow-sm bg-white border-start border-warning border-4">
            <Card.Body>
              <h6 className="text-muted text-uppercase fw-bold small">Estado del Sistema</h6>
              <h2 className="fw-bold text-warning mb-0">Operativo</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de Usuarios con el estilo limpio de tu tienda */}
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white py-3 border-bottom">
          <h5 className="mb-0 fw-bold text-secondary">Listado de Usuarios del Sistema</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="align-middle mb-0">
            <thead className="table-light text-uppercase fs-7">
              <tr>
                <th className="ps-4">#</th>
                <th>Nombre Completo</th>
                <th>Correo Electrónico</th>
                <th>Rol Asignado</th>
              </tr>
            </thead>
            <tbody>
              {/* Datos base iniciales */}
              <tr>
                <td className="ps-4 fw-bold">1</td>
                <td>Camilo Marín (Admin)</td>
                <td>camilo.admin@petshop.cl</td>
                <td><span className="badge bg-danger px-3 py-2">Administrador</span></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold">2</td>
                <td>María González</td>
                <td>maria.gonzalez@ejemplo.com</td>
                <td><span className="badge bg-primary px-3 py-2">Cliente</span></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold">3</td>
                <td>Esteban Soto</td>
                <td>esteban.soto@ejemplo.com</td>
                <td><span className="badge bg-secondary px-3 py-2">Vendedor</span></td>
              </tr>

              {/* Nuevos usuarios agregados en tiempo real */}
              {usuarios.map((user, index) => (
                <tr key={index}>
                  <td className="ps-4 fw-bold">{index + 4}</td>
                  <td>{user.nombre}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge px-3 py-2 ${user.rol === 'Administrador' ? 'bg-danger' : user.rol === 'Vendedor' ? 'bg-secondary' : 'bg-primary'}`}>
                      {user.rol}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminHome;