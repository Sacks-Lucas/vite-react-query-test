
const AgeInput = (props: AgeInputProps) => {
    const { errorMessage, isSuccess, onSubmit, res, setValue, value } = props;

    return (
        <div>
            <div> Age Input </div>
            <input onChange={({ target }) => setValue(target.value)} value={value} />
            <button type="button" onClick={() => onSubmit(value)}>Search</button>
            {isSuccess ? (
                <>
                    <div>Success</div>
                    <div>{`Estimated Age: ${res.age}`}</div>
                </>
            ) : (
                <div>{errorMessage}</div>
            )}
        </div>
    )
}

interface AgeInputProps {
    value: string;
    setValue: (value: string) => void;
    errorMessage: string;
    onSubmit: (name: string) => void;
    res: any;
    isSuccess: boolean;
}

export default AgeInput