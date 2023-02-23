import AgeInput from "./AgeInput"
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { getEstimatedAge } from "../../api/endpoints";

const AgeInputContainer = () => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { mutate, data, isSuccess } = useMutation(getEstimatedAge, {
        onError: () => {
            setErrorMessage("ERROR")
        }
    })

    const res = data?.data

    const onSubmit = (name: string) => {
        mutate(name)
    }

    const childProps = {
        value,
        setValue,
        errorMessage,
        onSubmit,
        res,
        isSuccess
    };
    return (
        <AgeInput {...childProps} />
    )
}

export default AgeInputContainer