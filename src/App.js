import { createContext } from 'react';
import './App.css';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/headerContainer';
import ChildA from './component/ChildA';

const data = createContext();

function App() {
  const name = "Nimra";
  const age = 21;
  const gender = "female";

  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
      {/* <data.Provider value={{ name, gender, age }}>
        <ChildA />
      </data.Provider> */}
    </div>
  );
}

export default App;
export { data };
