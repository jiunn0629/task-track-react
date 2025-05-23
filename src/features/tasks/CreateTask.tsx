import { useState } from 'react';
import type { Task } from '../../types/Task';
import TextField from '../../components/form/TextField';
import TextAreaField from '../../components/form/TextAreaField';
import SelectField from '../../components/form/SelectField';

type CreateTaskProps = {
	close: () => void;
};

const CreateTask = ({ close }: CreateTaskProps) => {
	const [formData, setFormData] = useState<Omit<Task, 'id' | 'parentTask'>>({
		summary: '',
		description: '',
		status: 'backlog',
		project: '',
		estimateTime: 0,
		taskType: 'bug',
		priority: 'medium',
		relateTask: [],
		childTask: [],
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: 處理表單提交
		console.log(formData);
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className='flex flex-col'>
			<SelectField
				label='Project'
				name='project'
				value={formData.project}
				onChange={handleChange}
				options={[
					{ value: 'lookr3', label: 'lookr3' },
					{ value: 'tico run', label: 'tico run' },
					{ value: 'datar', label: 'datar' },
				]}
			/>
			<div className='divider'></div>

			<TextField
				label='Summary'
				name='summary'
				placeholder='summary'
				value={formData.summary}
				onChange={handleChange}
				required
			/>
			<TextAreaField
				label='Description'
				name='description'
				placeholder='Add a description...'
				value={formData.description}
				onChange={handleChange}
			/>

			<SelectField
				label='Priority'
				name='priority'
				value={formData.priority}
				onChange={handleChange}
				options={[
					{ value: 'low', label: 'low' },
					{ value: 'medium', label: 'medium' },
					{ value: 'high', label: 'high' },
				]}
			/>

			<div className='flex justify-end gap-2 mt-2'>
				<button className='btn btn-outline' onClick={close}>
					Cancel
				</button>
				<button className='btn btn-primary' onClick={handleSubmit}>
					Create
				</button>
			</div>
		</div>
	);
};

export default CreateTask;
