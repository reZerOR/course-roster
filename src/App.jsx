import "./App.css";
import Cards from "./components/Cards/Cards";
import Sidecarde from "./components/Sidecard/Sidecarde";

function App() {
  return (
    <>
      <header className="">
        <h3 className="text-3xl font-bold text-center my-12">
          Course Registration
        </h3>
      </header>
      <main className="flex gap-6">
        <Cards></Cards>
        <Sidecarde></Sidecarde>
      </main>
    </>
  );
}

export default App;
