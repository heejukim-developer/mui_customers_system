import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Container } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const App = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('');
  // <db연동>
  // const[customers,setCustomer]=useState({});
  useEffect(() => {
    //db연동
    //loadData();
  });
  //   const loadData =async()=>{
  //     await axios
  //     .get('url')
  //     .then((response) => {
  //         setCustomets(response.data)
  //     })
  //     .catch((err)=> console.err(err.message));
  //   };
  const customers = [
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '여진구',
      birthday: '780604',
      gender: '남자',
      email: 'gu@gmail.com',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '김연아',
      birthday: '980604',
      gender: '여자',
      email: 'kim@gmail.com',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '송중기',
      birthday: '780604',
      gender: '남자',
      email: 'song@naver.net',
    },
  ];
  const handleValueChange = (e) => {
    setSearchKeyWord(e.target.value);
  };
  const filteredComponents = (data) => {
    data = data.filter((c) => {
      console.log('===', c.name);
      // -1; 값이 있다는 소리
      return c.name.indexOf(searchKeyWord) > -1;
    });
    console.log('data===', data);

    return data.map((c) => {
      return (
        <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          email={c.email}
        />
      );
    });
  };
  return (
    <Container fluid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              고객관리시스템
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                value={searchKeyWord}
                onChange={handleValueChange}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          width: '100%',
          height: '30px',
          justifyContent: 'center',
          display: 'flex',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <CustomerAdd />
      </div>
      <Paper>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>email</TableCell>
              <TableCell>delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              filteredComponents(customers)
            ) : (
              <TableRow>
                <TableCell colSpan='7' variant='determinate'>
                  데이터가 없습니다
                </TableCell>
              </TableRow>
            )}

            {/* {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  email={c.email}
                />
              );
            })} */}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default App;
