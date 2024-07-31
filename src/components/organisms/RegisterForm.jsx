
import React, { useState } from 'react';
import Field from '../molecules/Field';
import Button from '../atoms/Button';

export default function RegisterForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    Nombres: '',
    Apellidos: '',
    Telefono: '',
    Email: '',
    Contraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Field
        type="text"
        name="Nombres"
        label="Nombre(s):"
        value={formData.Nombres}
        onChange={handleChange}
        required
      />
      <Field
        type="text"
        name="Apellidos"
        label="Apellidos:"
        value={formData.Apellidos}
        onChange={handleChange}
        required
      />
      <Field
        type="tel"
        name="Telefono"
        label="Teléfono:"
        value={formData.Telefono}
        onChange={handleChange}
        required
      />
      <Field
        type="email"
        name="Email"
        label="E-mail:"
        value={formData.Email}
        onChange={handleChange}
        required
      />
      <Field
        type="password"
        name="Contraseña"
        label="Contraseña:"
        value={formData.Contraseña}
        onChange={handleChange}
        required
      />
      <div className="flex justify-between mt-6">
        <Button type="submit" className="bg-black text-white hover:bg-yellow-500 hover:text-black">Registrarse</Button>
        <Button type='button' onClick={onCancel} className="bg-gray-400 text-white hover:bg-gray-600">Cancelar</Button>
      </div>
    </form>
  );
}
