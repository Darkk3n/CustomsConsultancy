import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

interface IProps {
	fieldName: string;
	placeholder: string;
	control: any;
}

export const PhoneInput = ({ fieldName, placeholder, control }: IProps) => {
	return (
		<Controller
			render={({ field: { onChange, name, value } }) => (
				<PatternFormat
					className='w-100 mt-1 mb-1 p-1'
					type='tel'
					format={'###-###-####'}
					placeholder={placeholder}
					mask='_'
					onChange={onChange}
					name={name}
					value={value} />
			)}
			name={fieldName}
			control={control}
			defaultValue=''
		/>
	)
}
