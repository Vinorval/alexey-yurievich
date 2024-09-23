import './App.css';
import AppHeader from '../appHeader/AppHeader';
import Form from '../form/Form';
import { Routes, Route } from 'react-router';
import HomePage from '../../pages/HomePage';
import ServicePage from '../../pages/ServicePage';
import ProductPage from '../../pages/ProductPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/products/:name" element={<ProductPage />} />
      </Routes>
      <Form />
      <footer className="Footer" />
    </div>
  );
}

export default App;