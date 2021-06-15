import styled from 'styled-components';

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
    ${CursorPointer}
`;

const Label = styled.label`
    ${CursorPointer}
`;


const Choices = ({ openFood, choiceRadio }) => {
    return (
        <>
            <h2>Choose one</h2>
            {
                openFood.choices.map(choice => (
                    <>
                        <RadioInput
                            type="radio"
                            id={choice}
                            name='choice'
                            value={choice}
                            checked={choiceRadio.value === choice}
                            onChange={choiceRadio.onChange}
                        />
                        <Label className='soda-label' htmlFor={choice}>{choice}</Label>
                    </>
                ))
            }
        </>
    )
}

export default Choices
