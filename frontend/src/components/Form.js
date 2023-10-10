import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
display: flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 120px;
padding: 0 10px;
border: 1px solid #ccc;
border-radius: 5px;
height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #000;
color: #fff;
height: 42px;
`;



const Form = ({ onEdit }) => {
    const ref = useRef();
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Name</Label>
                <Input name="name" />
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Phonne</Label>
                <Input name="phone" />
            </InputArea>
            <InputArea>
                <Label>Birth Date</Label>
                <Input name="birthdate" type="date" />
            </InputArea>

            <Button type="submit">Save</Button>
        </FormContainer>
    );
};

export default Form;