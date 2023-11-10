import React, { useState } from 'react';

function FormField({ label, type, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default FormField;
