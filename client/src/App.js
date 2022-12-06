import * as React from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = React.useState('');
  const [users, setUsers] = React.useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/users")
      .then(response => response.json())
          // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setUsers(data.users))
    },[])



  const handleChange = (event) => {
    setUser(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let currUser = users.find(user => user.name.toLowerCase() === event.target.value )

    window.location.href = "/"+currUser.id;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="user-label">User</InputLabel>
            <Select
              labelId="user-label"
              id="user"
              value={user}
              onChange={handleChange}
              label="User"
              name="user"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                users.slice(0,3).map( user => <MenuItem key={user.id} value={user.name.toLowerCase()}>{user.name}</MenuItem> )
              }
            </Select>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
              </Button>
          </FormControl>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}