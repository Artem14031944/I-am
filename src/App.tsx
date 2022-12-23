import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

const App:FC = () => {

  const { recentPosts } = useSelector((state: any) => state.mainReducer);


  console.log(recentPosts, 'recentPosts')
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
