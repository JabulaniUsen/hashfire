import React from 'react';

interface InputFieldProps {
  label?: string; 
  type?: string; 
  placeholder?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  name?: string; 
  required?: boolean;
  errorMessage?: string;
  disabled?: boolean; 
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text', 
  placeholder = '',
  value,
  onChange,
  name,
  required = false,
  errorMessage,
  disabled = false,
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {/* Input */}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full transition-all border rounded-xl px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
      {/* Error Message */}
      {errorMessage && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
