import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Header />
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;
