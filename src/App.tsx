import { useState } from 'react';
import './App.css';
import MarketPlace from './components/marketPlace';
import NavBar from './components/navBar';
import Products from './data/products';
import sellers from './data/sellers';

function App() {
  const [item, setItem] = useState<any>(Products);
  const [sellersList] = useState<any>(sellers);

  const filterItemCompany = (value: any) => {
    const newItem = Products.filter((newVal) => {
      return newVal.titlePrice.toLowerCase().includes(value.toLowerCase()) ||  newVal.savePrace.toLowerCase().includes(value.toLowerCase())
    });
    setItem(newItem);
  };

  const filterItemSeller = (values: any) => {
    let newItem;
    let res = []
    for (let index = 0; index < values.length; index++) {
      newItem = Products.filter((newVal) => {
        return newVal.seller.toLowerCase().includes(values[index].toLowerCase())
      });
      newItem && res.push(newItem[0])
    }
    res && setItem(res)
  }

  const clearFilter = () => {
    setItem(Products)
  }

  const sort = () => {}


  return (
    <div className="App">
      <NavBar sellers={sellersList} sort={sort} filterItemCompany={filterItemCompany}
        filterItemSeller={filterItemSeller} clearFilter={clearFilter}/>
      <MarketPlace item={item}/>
    </div>
  );
}

export default App;
