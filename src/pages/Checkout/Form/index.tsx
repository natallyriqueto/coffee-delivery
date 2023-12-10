import { InputContent } from "@/components/Input/style";
import { FormContainer } from "./style";


export function Form() {
    return (
        <FormContainer>
            <InputContent placeholder="CEP" />
            <InputContent placeholder="Rua" />
            <div>
                <InputContent placeholder="Número" />
                <InputContent placeholder="Complemento" />
            </div>
            <div>
                <InputContent placeholder="Bairro" />
                <InputContent placeholder="Cidade" />
                <InputContent placeholder="UF" />
            </div>
        </FormContainer>
    )
}