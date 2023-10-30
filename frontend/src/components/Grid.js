import styled from 'styled-components';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import React, { useState } from 'react';


const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
max-width: 800px;
margin: 20px auto;
word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Tbody = styled.tbody``;

export const Th = styled.th`
text-align: start;
border-bottom: inset;
padding-bottom: 5px;

@media (max-width: 768px) {
    ${(props) => props.onlyWeb && 'display: none;'}
}
`;

export const Td = styled.td`
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
width: ${(props) => (props.width ? props.width : 'auto')};

@media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none;'}
}
`;


/**
 * Grid component that displays a table of users.
 *
 * @component
 * @param {Object[]} users - List of users to display in the table.
 * @param {function} setOnEdit - Function to set a user for editing.
 * @param {function} getUsers - Function to refresh the list of users.
 * @returns {JSX.Element} Rendered Grid component.
 */
const Grid = ({ users, setOnEdit, getUsers }) => {


    /**
    * Handles the user edit action.
    *
    * @functions
    * @param {Object} item - The user item to edit.
    */
    const handleEdit = (item) => {
        setOnEdit(item);
    };


    /**
     * Handles the user delete action.
     *
     * @async
     * @function
     * @param {number} id - The ID of the user to delete.
     */
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8800/${id}`)
            .then(({ data }) => {
                toast.success(data.message);
                getUsers();
            }).catch((error) => {
                toast.error(error.message);
            });
        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Name </Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Phone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.name}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyWeb>{item.phone}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
