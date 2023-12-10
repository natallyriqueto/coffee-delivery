import { InputContent } from "./style";

interface InputProps {
    placeholder: string;
}

export function Input({placeholder} : InputProps) {
    return (
        <InputContent placeholder={placeholder} />
    )
}