//! why to use context api
//? using context api is nessasry bcoz there is a problem with props drilling like we cant use parenent element data to greatgrand son like
//?parent >child1 >child2 >child3 so there is not a way that child 3 can get the data frm parent hence we use useContext

//TODO context api = a way to pass data through the compoent to the component treee without passing props manually
//!createContext = create a context object
//! context = it is a component which provides the context vaklue to its children
//!useContext (consumer) = a hooks which allows to consume a context

//? makesure create context always provides a componet so use capital letter to make variables

const url = "https://catfact.ninja/fact";

const fact = fetch(url).then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});
