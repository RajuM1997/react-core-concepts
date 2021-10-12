import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Rubel", "Bapparaz", "Koober", "Bappy"];

  const cinemas = [
    {
      nayok: "Koober",
      nayika: "Kopila",
    },
    {
      nayok: "Rubel",
      nayika: "Moushumi",
    },
    {
      nayok: "Razzak",
      nayika: "Shabana",
    },
  ];

  return (
    <div className="App">
      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
      </ul>
      {cinemas.map((cinema) => (
        <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>
      ))}
    </div>
  );
}

function Person(props) {
  // console.log(props);
  const person = {
    backgroundColor: "skybule",
    border: "3px solid lightsalmon",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok:{props.nayok}</h2>
      <h4>Nayika:{props.nayika}</h4>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  );
}

/*
<p id="title">Title</p>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bapparaj" nayika="chekha"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
       <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="chekha"></Person>
      <Person name={nayoks[3]} nayika="Kopila"></Person>
*/
/*
      <Friend phone="0196845" address="Noakhali"></Friend>
      <Friend phone="0186845" address="Rongpur"></Friend>
      <Friend phone="0166845" address="Jessore"></Friend>
      <Friend phone="0176845" address="Dhaka"></Friend>
      
*/

export default App;
