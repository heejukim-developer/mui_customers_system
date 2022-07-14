import React from 'react';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const App = () => {
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
  return (
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
          {customers.map((c) => {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );

  // <div>
  //   <Customer
  //     id={customers[0].id}
  //     image={customers[0].image}
  //     name={customers[0].name}
  //     birthday={customers[0].birthday}
  //     email={customers[0].email}
  //   />
  //   <Customer
  //     id={customers[1].id}
  //     image={customers[1].image}
  //     name={customers[1].name}
  //     birthday={customers[1].birthday}
  //     email={customers[1].email}
  //   />
  //   <Customer
  //     id={customers[2].id}
  //     image={customers[2].image}
  //     name={customers[2].name}
  //     birthday={customers[2].birthday}
  //     email={customers[2].email}
  //   />
  // </div>
};

export default App;
