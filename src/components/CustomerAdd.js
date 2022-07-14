import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';

const styles = { hidden: { display: 'none' } };

const CustomerAdd = () => {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    file: null,
    userName: '',
    birthday: '',
    gender: '',
    fileName: '',
    email: '',
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlFileChange = (e) => {
    e.preventDefault();
    setInput({ ...input, file: e.target.files[0], fileName: e.target.value });
  };
  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInput((prev) => {
      return { ...prev, ...nextState };
    });
  };
  const handleFormSubmit = () => {
    //db에 추가기능 구현
    setInput({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      fileName: '',
      email: '',
    });
    //추가 버튼 누르면 없어짐
    setOpen(false);
  };
  return (
    <div>
      <Container>
        <Button variant='contained' color='primary' onClick={handleClickOpen}>
          고객추가
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>고객추가</DialogTitle>
          <DialogContent>
            <input
              style={styles.hidden}
              id='raised-button-file'
              accept='image/*'
              type='file'
              name='file'
              file={input.file}
              value={input.fileName}
              onChange={handlFileChange}
            />
            <br />
            <label htmlFor='raised-button-file'>
              <Button
                variant='contained'
                color='primary'
                component='span'
                name='file'
              >
                {input.fileName === '' ? '프로필이미지' : input.fileName}
              </Button>
            </label>
            <br />

            <TextField
              label='이름'
              variant='standard'
              name='username'
              type='text'
              value={input.userName}
              onChange={handleValueChange}
            />
            <TextField
              label='생년월일'
              variant='standard'
              name='birthday'
              type='text'
              value={input.birthday}
              onChange={handleValueChange}
            />
            <TextField
              label='성별'
              variant='standard'
              type='rext'
              name='gender'
              value={input.gender}
              onChange={handleValueChange}
            />
            <TextField
              label='이메일'
              variant='standard'
              name='email'
              type='text'
              value={input.email}
              onChange={handleValueChange}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant='contained'
              color='primary'
              onClick={handleFormSubmit}
            >
              추가
            </Button>
            <Button variant='outlined' color='primary' onClick={handleClose}>
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default CustomerAdd;
