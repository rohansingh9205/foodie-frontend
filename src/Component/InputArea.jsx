import React from 'react'

const InputArea = ({
  label,
  name,
  value,
  onChange,
  type='text',
  placeholder
}) => {

  const today = new Date().toISOString().split("T")[0];

  return (

    <div className='mb-4'>

      <label
        htmlFor={name}
        className='block text-black mb-2 font-semibold'
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        min={type === "date" ? today : undefined}
        className='w-full px-4 py-2 rounded border placeholder:text-xs'
      />

    </div>

  )
}

export default InputArea