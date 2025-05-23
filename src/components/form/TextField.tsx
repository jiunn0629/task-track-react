import { useState } from 'react';

type TextFieldProps = {
	label?: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	required?: boolean;
};

const TextField = ({
	label,
	name,
	placeholder,
	value,
	onChange,
	error,
	required = false,
}: TextFieldProps) => {
	const [touched, setTouched] = useState(false);

	return (
		<fieldset className='fieldset'>
			<label htmlFor={name} className='fieldset-legend'>
				{label}
			</label>
			<input
				type='text'
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={() => setTouched(true)}
				placeholder={placeholder}
				required={required}
				className='input validator w-full'
			/>
			{touched && error && <p className='validator-hint mt-0'>{error}</p>}
		</fieldset>
	);
};

export default TextField;
