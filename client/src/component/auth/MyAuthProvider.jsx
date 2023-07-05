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
      dispatch(logIn(user));
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      dispatch(logToDb(user.sub))
    }
  }, [token])

  return <>{children}</>;
};

export default MyAuthProvider;
