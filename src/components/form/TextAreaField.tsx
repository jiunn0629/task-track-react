import { useState } from 'react';

type TextAreaFieldProp = {
	label: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string;
	required?: boolean;
};

const TextAreaField = ({
	label,
	name,
	placeholder,
	value,
	onChange,
	error,
	required,
}: TextAreaFieldProp) => {
	const [touched, setTouched] = useState(false);

	return (
		<fieldset className='fieldset'>
			<label htmlFor={name} className='fieldset-legend'>
				{label}
			</label>
			<textarea
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={() => setTouched(true)}
				placeholder={placeholder}
				required={required}
				className='textarea w-full h-24'
			></textarea>
			{touched && error && <p className='validator-hint mt-0'>{error}</p>}
		</fieldset>
	);
};

export default TextAreaField;
