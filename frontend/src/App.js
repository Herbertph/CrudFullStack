import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

/**
 * Main App component that renders the Users UI.
 *
 * @component
 * @returns {JSX.Element} Rendered App component.
 */
function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  /**
  * Fetches the list of users from the server.
  *
  * @async
  * @function
  */
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800");
      setUsers(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };


  /**
  * useEffect hook to get the list of users when the component is mounted.
  */
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setOnEdit={setOnEdit} getUsers={getUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
