const Home = () => {
  const data = {
    name: "Vineet Mali",
  };

  let date = new Date();

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <h1 className="text-5xl font-semibold bg-linear-r from-primary via-secondary p-8">
          Welcome to Todo App
        </h1>
        <h3 className="text-3xl font-semibold text-primary-content pl-8">
          Hello {data.name}
        </h3>
      </div>
      <div className="flex flex-row-reverse">
        <p className="m-8 text-3xl font-medium">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Home;
