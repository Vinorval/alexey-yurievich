import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Services from '../services/Services';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Services />
      <footer className="Footer" />
    </div>
  );
}

export default App;
