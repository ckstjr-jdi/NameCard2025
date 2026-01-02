import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { auth } from './service/authApi';
//publick>index.html <div> 위치 파악
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(auth)
root.render(
  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </>
);
