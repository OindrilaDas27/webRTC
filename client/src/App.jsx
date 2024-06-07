import './App.css';
import { Route, Routes } from 'react-router-dom';
import CallPage from './page/CallPage/CallPage';
import HomePage from './page/HomePage/HomePage';
import NoMatch from './page/NoMatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route path='/:id' element={ <CallPage /> }/>
      <Route path='/' element={ <HomePage /> }/>
      <Route path='*' element={ <NoMatch /> }/>
    </Routes>
  );
}

export default App;