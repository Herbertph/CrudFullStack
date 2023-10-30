import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

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


/**
 * Form component for adding or editing user data.
 *
 * @component
 * @param {function} getUsers - Function to refresh the list of users.
 * @param {Object|null} onEdit - User data to be edited or null if adding a new user.
 * @param {function} setOnEdit - Function to set a user for editing.
 * @returns {JSX.Element} Rendered Form component.
 */
const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    /**
    * Effect hook to set user data for editing.
    */
    useEffect(() => {
        if (onEdit) {
            ref.current.name.value = onEdit.name;
            ref.current.email.value = onEdit.email;
            ref.current.phone.value = onEdit.phone;
            ref.current.birthdate.value = onEdit.birthdate;
        }
    }, [onEdit]);

    /**
    * Handles the form submission.
    *
    * @async
    * @function
    * @param {Event} e - The form submit event.
    */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.name.value ||
            !user.email.value ||
            !user.phone.value ||
            !user.birthdate.value
        ) {
            return toast.error("Fill in all fields!");
        }


        if (onEdit) {
            await axios
                .put(`http://localhost:8800/${onEdit.id}`, {
                    name: user.name.value,
                    email: user.email.value,
                    phone: user.phone.value,
                    birthdate: user.birthdate.value,
                })
                .then(({ data }) => {
                    toast.success(data.message);
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        } else {
            await axios.post("http://localhost:8800", {
                name: user.name.value,
                email: user.email.value,
                phone: user.phone.value,
                birthdate: user.birthdate.value,
            }).then(({ data }) => {
                toast.success(data.message);
            }).catch((error) => {
                toast.error(error.message);
            });
        }

        user.name.value = "";
        user.email.value = "";
        user.phone.value = "";
        user.birthdate.value = "";

        setOnEdit(null);
        getUsers();
    };
    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
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