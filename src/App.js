
import Header from './Component/Layout/Header';
import TodosList from './Component/Todos/TodosList';
import TodosProvider from './store/TodosProvider.js';

function App(props) {

  return (
    <TodosProvider>
      <Header />
      <TodosList />
    </TodosProvider>
  );
}

export default App;

