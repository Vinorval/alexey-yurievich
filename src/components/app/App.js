import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Form from '../form/Form';
import { Routes, Route } from 'react-router';
import HomePage from '../../pages/HomePage';
import ServicePage from '../../pages/ServicePage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="продукт1С/:name" />
      </Routes>
      <Form />
      <footer className="Footer" />
    </div>
  );
}

export default App;
