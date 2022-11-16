import { useState } from "react";

import { nanoid } from 'nanoid';
import { Box } from "../Box";
import { LabelStyled, InputStyled, ButtonStyled } from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";

export function Form() { 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        };
        
    };

    const addNewContact = (newContact) => {
    const foundContact = contacts.find(contact => contact.name === newContact.name);
    
    (foundContact)
      ? window.alert(`${newContact.name} is alredy in contacts`)
      : dispatch(addContact(newContact))
    console.log(addContact(newContact));
  };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: e.currentTarget.name.value,
            number: e.currentTarget.phone.value,
            id: nanoid(),
        };
        setName('');
        setPhone('');
        addNewContact(newContact);
        console.log(newContact);
        

    };

    
    
        return (
            <Box as="form" onSubmit={handleSubmit} bg="muted"  border="normal" borderRadius="normal" borderColor="accent" display="block" p={3} mb={3} >
                <LabelStyled>
                    Name
                    <InputStyled
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                    />
                </LabelStyled>
                <LabelStyled>
                    Number
                    <InputStyled
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                    onChange={handleChange}
                    />
                </LabelStyled>
                <ButtonStyled type="submit">Add contact</ButtonStyled>
            </Box>
        );
 
}