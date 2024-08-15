import React from 'react';

const HollowText = ({ text, color }) => {
  const textStyle = {
    WebkitTextFillColor: 'transparent', // Torna o preenchimento do texto transparente
    WebkitTextStroke: color, // Define a cor da borda do texto
    WebkitTextStrokeWidth: '1px', // Define a largura da borda
  };

  return (
    <h1 className="text-6xl font-wallpoet cursor-pointer " style={textStyle} >
      {text}
    </h1>
  );
};

export default HollowText;