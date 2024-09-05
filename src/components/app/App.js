import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Services from '../services/Services';
import Form from '../form/Form';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Services />
      <Form />
      <footer className="Footer" />
    </div>
  );
}

export default App;
