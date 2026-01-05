import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import { auth } from './service/authApi';
import ImageUploader from './service/Image_upload';
import ImageFileInput from './components/common/ImageFileInput';
const imageUploader = new ImageUploader()
// 왜 CardEditor에서 사용할 컴포넌트를 index.js에 선언하였나?
// props는 상위 컴포넌트에서 하위 컴포넌트로만 전달 가능함.
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
)
//publick>index.html <div> 위치 파악
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(auth)
root.render(
  <>
    <BrowserRouter>
    <App FileInput={FileInput}/>
    </BrowserRouter>
  </>
);
