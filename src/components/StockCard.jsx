import React from 'react';

const StockCard = ({ stock }) => {
  const { name, cmp, target, year, revenue } = stock;

  const upside = ((parseFloat(target) - parseFloat(cmp)) / parseFloat(cmp) * 100).toFixed(1);

  return (
    <tr>
      <td>{name}</td>
      <td>{cmp}</td>
      <td>{target}</td>
      <td>{year}</td>
      <td>{revenue}</td>
      <td>{upside}%</td>
    </tr>
  );
};

export default StockCard;
