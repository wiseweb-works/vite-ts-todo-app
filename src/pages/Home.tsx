import { AddTodo, Header, TodoList } from '../components';

const Home = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
