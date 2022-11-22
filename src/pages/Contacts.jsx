import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/Contacts/ContactsList';
import { Title, Header } from '../components/Title/Title.styled';
import { Filter } from '../components/Filter/Filter';
import { Box } from '../components/Box';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';


const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  return (
    <Box display="flex" flexDirection="row"
      justifyContent="space-between"
      bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal"
      width="80%" boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
      <Box as="div" >
        <Header>Phonebook</Header>
        <Form />
      </Box>

      <Box as="div" >
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error && <Loader/>}
        {error && <p> {error} </p>}
        <ContactsList />
      </Box>
    </Box>
  )
};

export default Contacts;