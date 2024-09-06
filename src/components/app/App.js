import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Services from '../services/Services';
import Form from '../form/Form';
import Works from '../works/Works';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Services />
      <Works />
      <Form />
      <footer className="Footer" />
    </div>
  );
}

export default App;
