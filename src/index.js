import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
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


function App() {
    return (
        <div className="container">
            {/* <h1>Hello React</h1> */}
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const styleHeader = { color: "red", fontSize: "48px", textTransform: "upperCase" }
    const styleHeader = {}
    return (<header className="header"><h1 style={styleHeader}>Fast React Pizza Co.</h1></header>);
}

function Menu() {

    const pizza = pizzaData;
    // const pizza = [];
    const numPizzas = pizza.length;

    return (<main className="menu">
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
            <>

                <p>Fast React Pizza Co. Provides wide range of Pizzas, made all from our stone oven, all organic and delicious maintaining the authentic taste</p>

                <ul className="pizzas">
                    {pizzaData.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                </ul>
            </>
        ) :
            <p>We're Currently Working on our menu. Please come back later!!</p>
        }



        {/* <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" price="6" image="pizzas/focaccia.jpg" />
        <Pizza name="Margherita" ingredients="Tomato and mozarella" price="10" image="pizzas/Margherita.jpg" />
        <Pizza name="Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price="12" image="pizzas/Spinaci.jpg" /> */}
    </main>);

}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10
    const closeHour = 20
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)

    // if (hour >= openHour && hour <= closeHour) alert("We're Currently Open");
    // else alert("Sorry, We're Currently Closed!")
    return <footer className="footer">
        {isOpen ? (<Order closeHour={closeHour} openHour={openHour} />) : <div>
            <p>We're Currently Closed, Order or Visit Us Tommorow between {openHour}:00 - {closeHour}:00.</p>
        </div>}
    </footer>
    // return React.createElement('footer', null, "We're Currently Closed!")
}
function Order({ openHour, closeHour }) {
    return (<div className="order">
        <p>We're Open from {openHour}:00 - {closeHour}:00, Come visit us or order online.</p>
        <button className="btn">Order</button>
    </div >
    );
}

function Pizza({ pizzaObj }) {
    return (<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`} >
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            {/* {pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>{pizzaObj.price}</span>)} */}
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
        </div>

    </li >);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);