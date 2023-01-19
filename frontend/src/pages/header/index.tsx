/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { logoutAction } from '../../reducers/auth/auth.actions';
import { AuthContext } from '../../context';

export default function Header() {
  const { dispatchAuth, user } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    dispatchAuth(logoutAction());
    history.push('/auth');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exceptionly Task
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 0, marginLeft: '10px' }}>
            {user.user.firstName} {user.user.lastName} |
          </Typography>
          <Button color="inherit" onClick={() => logout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
