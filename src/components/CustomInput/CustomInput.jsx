const CustomInput = ({
	name,
	type,
	value,
	placeholder = "",
	bgCol = "",
	onChange = () => {},
	txtCol = "",
	borderColor,
}) => {
	return (
		<input
			placeholder={placeholder}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			className="bg-transparent "
			style={{
				color: txtCol,
				border: 0,
				borderBottom: "2px solid",
				borderColor: borderColor,
				width: "100%",
			}}
		/>
	);
};

export default CustomInput;
