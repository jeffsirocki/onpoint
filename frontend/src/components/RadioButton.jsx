import React from 'react';

const RadioButton = ({
                         options = [],
                         name,
                         selectedValue,
                         onChange,
                         className = '',
                         optionClassName = '',
                     }) => {
    return (
        <div className={`flex items-center ${className}`}>
            {options.map((option, index) => (
                <label
                    key={option.value}
                    className="flex items-center cursor-pointer"
                    aria-label={option.label}
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className="hidden"
                    />
                    <span
                        className={`px-3 py-1 text-sm font-medium ${
                            selectedValue === option.value
                                ? 'bg-blue-800 text-white'
                                : 'bg-blue-500 text-gray-200 hover:bg-blue-700'
                        } ${index === 0 ? 'rounded-l-md' : ''} ${
                            index === options.length - 1 ? 'rounded-r-md' : ''
                        } ${optionClassName}`}
                    >
            {option.label}
          </span>
                </label>
            ))}
        </div>
    );
};

export default RadioButton;