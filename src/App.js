import { Filter } from "./components/Filter/Filter";
import { TopMenu } from "./components/TopMenu/TopMenu";
import { DenseTable } from "./components/Table/Table";
import './App.css'
function App() {
  return (
    <>
      <TopMenu/>
      <Filter/>
      <br/>
      <br/>
      <DenseTable/>
    </>
  );
}

export default App;
