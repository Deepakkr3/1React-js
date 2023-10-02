import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  // {
  //   name: "Focaccia",
  //   ingredients: "Bread with italian olive oil and rosemary",
  //   price: 6,
  //   photoName: "pizzas/focaccia.jpg",
  //   soldOut: false,
  // },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Manu() {
  const piz = [1];
  const len = piz.length;
  return (
    <>
      <p>
        Every time you order, you get a hot and fresh pizza delivered at your
        doorstep in less than thirty minutes. *T&C Apply. Hurry up and place
        your order now!{" "}
      </p>
      <main className="menu">
        <h1>our manu</h1>
        {len ? (
          <ul className="pizzas">
            {pizzaData.map((p) => {
              return <Pizza pizaObj={p} key={p.name} />;
            })}
          </ul>
        ) : (
          <h1>we are preapring</h1>
        )}

        {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
        soldOut={false}
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
        soldOut={false}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
        soldOut={false}
      />
      */}
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container" className="header"></div>

      <Header />

      <Manu />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> this is the first piza shop</h1>
    </header>
  );
}

function Pizza({ pizaObj }) {
  return (
    <li className={`${pizaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizaObj.photoName} alt="pizza img" />
      <h1>{pizaObj.name}</h1>
      <h2>{pizaObj.ingredients}</h2>

      <spain>
        {pizaObj.soldOut ? <strong>soldout</strong> : pizaObj.price}
      </spain>
    </li>
  );
}

function Footer() {
  const time = new Date().getTime().toLocaleString();
  const x = true;
  return (
    <div className="order">
      {x && <p>we are open heare</p>}
      <button className="btn">button</button>
      <Order openTime={time} />
    </div>
  );
}

function Order(props) {
  return <div>{props.openTime}</div>;
}

//pizzza

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
