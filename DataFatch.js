import React  from 'react';
import useFatch from './useFatch';



const DataFatch = () => {
 
  const {data,loading,errorMsg} = useFatch("https://jsonplaceholder.typicode.com/todos");
 
  const loadingMessage = <p>Todo is Loading...</p>;
  const ErrorHandler = <p>Error has occurred.</p>;

  const todoElement =
    data &&
    data.map((todo) => (
      <p key={todo.id}>{todo.title}</p>
    ));

  return (
    <div>
      <h1>DataFetch</h1>
      {errorMsg && ErrorHandler}
      {loading && loadingMessage}
      {!loading && !errorMsg && todoElement}
    </div>
  );
};

export default DataFatch;
