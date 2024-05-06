import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "../../components/contactForm/contactForm.jsx";
import { SearchBox } from "../../components/searchBox/searchBox.jsx";
import { ContactList } from "../../components/contactList/contactList.jsx";
import { Loading } from "../../components/loading/loading.jsx";
import { Error } from "../../components/error/error.jsx";

import { fetchContactsThunk } from "../../redux/contacts/contactsOps.js";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <Loading />}
      {error && <Error />}
      {items && <ContactList />}
    </>
  );
};
