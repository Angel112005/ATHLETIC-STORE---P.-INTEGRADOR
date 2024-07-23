import React, { useState } from 'react';
import Field from '../molecules/Field';
import Button from '../atoms/Button';

export default function LoginForm({ onSubmit, onCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Field
        type="email"
        name="email"
        label="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Field
        type="password"
        name="password"
        label="Contraseña:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex justify-between mt-6">
        <Button type="submit" text="Iniciar Sesión" className="bg-black text-white hover:bg-yellow-500 hover:text-black" />
        <Button type='button' onClick={onCancel} text="Cancelar" className="bg-gray-400 text-white hover:bg-gray-600" />
      </div>
    </form>
  );
}
