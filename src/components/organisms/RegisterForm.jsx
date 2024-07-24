// import React, { useState } from 'react';
// import Field from '../molecules/Field';
// import Button from '../atoms/Button';

// export default function RegisterForm({ onSubmit, onCancel }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//       <Field
//         type="text"
//         name="firstName"
//         label="Nombre(s):"
//         value={formData.firstName}
//         onChange={handleChange}
//         required
//       />
//       <Field
//         type="text"
//         name="lastName"
//         label="Apellidos:"
//         value={formData.lastName}
//         onChange={handleChange}
//         required
//       />
//       <Field
//         type="tel"
//         name="phone"
//         label="Teléfono:"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />
//       <Field
//         type="email"
//         name="email"
//         label="E-mail:"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <div className="flex justify-between mt-6">
//         <Button type="submit" text="Registrarse" className="bg-black text-white hover:bg-yellow-500 hover:text-black" />
//         <Button onClick={onCancel} text="Cancelar" className="bg-gray-400 text-white hover:bg-gray-600" />
//       </div>
//     </form>
//   );
// }




import React, { useState } from 'react';
import Field from '../molecules/Field';
import Button from '../atoms/Button';

export default function RegisterForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
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
        name="firstName"
        label="Nombre(s):"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <Field
        type="text"
        name="lastName"
        label="Apellidos:"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <Field
        type="tel"
        name="phone"
        label="Teléfono:"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Field
        type="email"
        name="email"
        label="E-mail:"
        value={formData.email}
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
