import { useEffect } from 'react';
import { useAuth0 } from 'react-native-auth0';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logToDb } from '../../redux/actions';

const MyAuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)
  const { user } = useAuth0();

  useEffect(() => {
    if (user && !token) {
      console.log('LOG_IN');
      dispatch(logIn(user));
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      console.log('LOG_TO_DB');
      dispatch(logToDb(user.sub))
    }
  }, [token])

  useEffect(() => {
    console.log('MyAuthProvider mounted!!');
  }, []);

  return <>{children}</>;
};

export default MyAuthProvider;
