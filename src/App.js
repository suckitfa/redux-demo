import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,login,logout} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter:{counter}</h1>
      {
        isLogged ? <h3>帅哥，欢迎登入！</h3>:<h3>未登入，不能查看详细信息!</h3>
      }
      <div> 
        <button disabled={isLogged} onClick={() => dispatch(login())}>login</button>
        <button disabled={!isLogged} onClick={() => dispatch(logout())}>logout</button>
        <button onClick={()=>dispatch(increment(1))}>+1</button>
        <button onClick={() => dispatch(increment(100))}>+100</button>
        <button onClick={()=>{dispatch(decrement())}}>-1</button>
      </div>
    </div>
  );
}

export default App;
