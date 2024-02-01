const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Riley",
      breed: "Chihuahua Mix",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Addy",
      breed: "Corat",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Emma",
      breed: "Coonhound",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
