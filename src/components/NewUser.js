import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function NewUser({ onUserCreated, onBack }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    rol: 'Cliente',
    password: ''
  });

  const [alerta, setAlerta] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica exigida en pautas
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.password.trim()) {
      setAlerta({ tipo: 'danger', texto: 'Todos los campos obligatorios deben ser completados correctamente.' });
      return;
    }

    if (!formData.email.includes('@')) {
      setAlerta({ tipo: 'warning', texto: 'El correo electrónico ingresado no es válido (falta el símbolo @).' });
      return;
    }

    if (onUserCreated) {
      onUserCreated(formData);
    }

    setAlerta({ tipo: 'success', texto: `¡Usuario "${formData.nombre}" registrado con éxito en PetShop-EYC!` });
    
    setFormData({
      nombre: '',
      email: '',
      rol: 'Cliente',
      password: ''
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="border-0 shadow">
            <Card.Header className="bg-dark text-white text-center py-4">
              <h3 className="mb-0 fw-bold">Registro de Nuevo Usuario</h3>
              <p className="text-white-50 small mb-0">Módulo de Administración - PetShop-EYC</p>
            </Card.Header>
            <Card.Body className="p-4 p-md-5">
              {alerta && (
                <Alert variant={alerta.tipo} onClose={() => setAlerta(null)} dismissible>
                  {alerta.texto}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label className="fw-semibold">Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="correo@dominio.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRol">
                  <Form.Label className="fw-semibold">Rol del Sistema</Form.Label>
                  <Form.Select
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label className="fw-semibold">Contraseña Temporal</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="dark" type="submit" size="lg" className="fw-bold">
                    Guardar Usuario
                  </Button>
                  {onBack && (
                    <Button variant="outline-secondary" onClick={onBack} className="mt-2">
                      Volver al Panel
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewUser;