import './App.css';
import Cards from './Cards';
import Header from './Header';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />
      {/* Cards */}
      <Cards />
      {/* Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
