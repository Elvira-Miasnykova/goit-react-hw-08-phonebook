import { Form } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { Title, Header } from './Title.styled';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  return (
    <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
      <Header>Phonebook</Header>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p> {error} </p>}
      <ContactsList />
    </Box>
  )
};