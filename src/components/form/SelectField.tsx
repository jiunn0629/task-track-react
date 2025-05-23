import React, { useState } from 'react';

type Option = {
	value: string;
	label: string;
};

type SelectFieldProps = {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: Option[];
	placeholder?: string;
	error?: string;
	required?: boolean;
};

const SelectField = ({
	label,
	name,
	value,
	onChange,
	options,
	placeholder,
	error,
	required = false,
}: SelectFieldProps) => {
	const [touched, setTouched] = useState(false);
	return (
		<fieldset className='fieldset'>
			<label htmlFor={name} className='fieldset-legend'>
				{label}
			</label>
			<select
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={() => setTouched(true)}
				required={required}
				className='select w-full'
			>
				{placeholder && <option value=''>{placeholder}</option>}
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			{touched && error && <p className='validator-hint mt-0'>{error}</p>}
		</fieldset>
	);
};

export default SelectField;
