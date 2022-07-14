import { TableRow } from '@mui/material';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
const Customer = (props) => {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt='profile' />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.email}</TableCell>
      <TableCell>
        <DeleteIcon />
      </TableCell>
    </TableRow>
    // <div>
    //   <CustomerProfiles id={props.id} image={props.image} name={props.name} />
    //   <CustomerInfo
    //     birthdat={props.birthday}
    //     gender={props.gender}
    //     email={props.email}
    //   />
    // </div>
  );
};
// const CustomerProfiles = (props) => {
//   return (
//     <div>
//       <p>{props.id}</p>
//       <img src={props.image} alt='profile' />
//       <p>{props.name}</p>
//     </div>
//   );
// };
// const CustomerInfo = (props) => {
//   return (
//     <div>
//       <p>{props.birthday}</p>
//       <p>{props.gender}</p>
//       <p>{props.email}</p>
//     </div>
//   );
//};
export default Customer;
