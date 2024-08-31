const CustomButton = ({
	txt = "",
	bgCol = "",
	onClick = () => {},
	txtCol = "",
}) => {
	return (
		<button
			className="py-3 px-8"
			style={{ backgroundColor: bgCol, color: txtCol, border: 0 }}
		>
			{txt}
		</button>
	);
};

export default CustomButton;
