import {
	Select as SelectBase,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./SelectBase";

interface SelectProps {
	optionsType: string,
	options: { value: string; label: string }[],
	onValueChange: (value: string) => void;
	defaultValue?: string,
	className?: string,
}

const Select: React.FC<SelectProps> = ({ optionsType, options, onValueChange, defaultValue, className }) => {
	return (
		<div className={className}>
			<SelectBase onValueChange={onValueChange} defaultValue={defaultValue}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder={`Select ${optionsType.toLowerCase()}`} />
				</SelectTrigger>
				<SelectContent>
					{options.map((option, index) => (
						<SelectItem key={index} value={option.value}>{option.label}</SelectItem>
					))}
				</SelectContent>
			</SelectBase>
		</div>
	);
};

export default Select;