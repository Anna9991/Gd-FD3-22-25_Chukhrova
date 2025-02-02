import React from 'react';
// import logo from './logo.svg';
import './App.css';

// types
type MenuItem = {
  label: string;
  link: string;
};

type ItemShopProps = {
  label: string;
  price: number;
  url: string;
  count: number;
}

type ItemShopTableProps = {
  items: ItemShopProps[]
}


const menuItems: MenuItem[] = [
  { label: "Главная", link: "/" },
  { label: "Товары", link: "/" },
  { label: "О нас", link: "/" },
  { label: "Контакты", link: "/" },
];

const shopItems: ItemShopProps[] = [
  {
    label: "Laptop",
    price: 1000,
    url: "https://picsum.photos/id/2/400/300",
    count: 3,
  },
  {
    label: "Laptop2",
    price: 1000,
    url: "https://picsum.photos/id/2/400/300",
    count: 5,
  },
  {
    label: "Mug",
    price: 30,
    url: "https://picsum.photos/id/30/400/300",
    count: 10,
  },
  {
    label: "Mug2",
    price: 30,
    url: "https://picsum.photos/id/30/400/300",
    count: 15,
  },
  {
    label: "High heel shoes",
    price: 100,
    url: "https://picsum.photos/id/21/400/300",
    count: 1,
  },
  {
    label: "High heel shoes2",
    price: 100,
    url: "https://picsum.photos/id/21/400/300",
    count: 2,
  },
  {
    label: "Berries",
    price: 10,
    url: "https://picsum.photos/id/102/400/300",
    count: 15,
  },
];


// components
function ItemShop(props: ItemShopProps) { // grid
  return (
    <div className="item-card">
      <img src={props.url} alt={props.label} className="item-image"/>
      <div className="item-details">
        <h3>{props.label}</h3>
        <p>Цена: ₽{props.price}</p>
        <p>Штук: {props.count}</p>
      </div>
    </div>
  );
}

function ItemShopTable(props: ItemShopTableProps) { // table
  return (
    <table>
      <thead>
        <tr>
          <th>Фото</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Штук</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((i, idx) =>
          <tr key={idx}>
            <td><img src={i.url} alt={i.label} /></td>
            <td>{i.label}</td>
            <td>₽{i.price}</td>
            <td>{i.count}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <h1>IShop</h1>
        </div>
        <nav className="menu">
          {menuItems.map((i, idx) => <a href={i.link} key={idx}>{i.label}</a> )}
        </nav>
      </header>

      {/* grid implementation */}
      {/* <main className="main-grid">
        {shopItems.map(i =>
          <ItemShop 
          label={i.label}
          price={i.price}
          url={i.url}
          count={i.count}
        />)}
      </main> */}

      {/* table implementation */}
      <main className="main-table">
        <ItemShopTable items={shopItems}/>
      </main>
    </div>
  );
}

export default App;
