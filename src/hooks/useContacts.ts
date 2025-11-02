import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useContacts = () => {
    const contacts = useSelector((state: RootState) => state.contacts.items);
    return { contacts };
};

export default useContacts;