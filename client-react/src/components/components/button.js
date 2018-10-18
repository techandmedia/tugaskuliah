import React from 'react';

const Button = props => {
  return (
    <div style={buttonStyle} >
      {props.label}
    </div>)
}

export default Button

const buttonStyle = {
  width: 150, // lebar button dibuat standar
  height: 'auto', // tinggi button auto mengikuti jumlah huruf
  borderRadius: 5,
  borderStyle: 'solid',
  borderColor: '#00a8ff',
  textAlign: 'center',
  color: '#e84118',
  backgroundColor: '#f5f6fa',
  paddingTop: 7,
  paddingRight: 10,
  paddingBottom: 7,
  paddingLeft: 10
}

// git config --global core.autocrlf false > suapay tidak ada warning warning: LF will be replaced by CRLF in package.json
// karena terdapat perbedaan antara sistem Windows dan Unix/Linux/Mac