import { useRef } from "react";
import IconDate from "../../assets/Icons/IconDate";



const InputDate = ({className,type,placeholder,name,value,handleChange,ref,onFocus,onBlur}) => {

const inputDateRef = useRef();
const onFocusDate = () => (inputDateRef.current.type = 'date');
const onBlurDate = () => (inputDateRef.current.type = 'text');

    return (
                	<div className='input__date col-md-4 my-3 relative'>
					<input
						className={className ,'inputs col-12 d-flex pr-5 '}
						type={type}
						placeholder={placeholder}
						name={name}
						defaultValue={value}
						onChange={handleChange}
						ref={inputDateRef}
						onFocus={onFocusDate}
						onBlur={onBlurDate}
					/>
					<div className='input-date-icon justify-content-end align-items-center'>
					<IconDate/>
					</div>
			</div>
		);
}

export default InputDate
