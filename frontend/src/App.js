import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
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



function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800");
      setUsers(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

    useEffect(() => {
      getUsers();
    }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form />
        <Grid users={users} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
