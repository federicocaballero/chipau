import './App.css';
import FormAdress from './components/formAdress';
import FormControl from './components/formControl';
import PizzaCard from './components/pizzaCard';
import PizzaMenu from './containers/pizzaMenu';

function App() {
  return (
    <div>
      <PizzaMenu/>
      {/* <PizzaCard/> */}
      <FormControl/>
      {/* <FormAdress/> */}
    </div>
  );
}

export default App;
