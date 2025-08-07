import React, { useState } from 'react';

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    cmp: '',
    revenue: '',
    target: '',
    year: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStock = () => {
    setStocks([...stocks, { ...formData, id: Date.now() }]);
    setFormData({ name: '', cmp: '', revenue: '', target: '', year: '' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📊 Mahipal’s Equity Research Hub</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input name="name" placeholder="Stock Name" value={formData.name} onChange={handleChange} />
        <input name="cmp" placeholder="CMP" value={formData.cmp} onChange={handleChange} />
        <input name="revenue" placeholder="Target Revenue" value={formData.revenue} onChange={handleChange} />
        <input name="target" placeholder="Target Price" value={formData.target} onChange={handleChange} />
        <input name="year" placeholder="Target Year" value={formData.year} onChange={handleChange} />
        <button onClick={handleAddStock}>Add Stock</button>
      </div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Stock</th>
            <th>CMP</th>
            <th>Target ₹</th>
            <th>Target Year</th>
            <th>Target Revenue</th>
            <th>Upside (%)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.cmp}</td>
              <td>{stock.target}</td>
              <td>{stock.year}</td>
              <td>{stock.revenue}</td>
              <td>
                {((parseFloat(stock.target) - parseFloat(stock.cmp)) / parseFloat(sto
