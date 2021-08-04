import './App.css';
import {useState} from 'react';

function App() {
  // const [iframeSrc, setIframeSrc] = useState('');
  const [text, setText] = useState('');

  function onClickIosApp () {
    const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setText('outside:' + appName);
    window.location.replace(appName);
    setTimeout(() => {
      setText('inside:' + appUrl);
      window.location.replace(appUrl);
    }, 5000);
  }

  function onClickAndroidApp () {
    const appUrl = 'https://play.google.com/store/apps/details?id=com.inomera.sm';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setText('outside:' + appName)
    window.location.replace(appName);
    setTimeout(() => {
      setText('inside:' + appUrl)
      window.location.replace(appUrl);
    }, 5000);
  }

  return (
    <div className="container">
      <div>Version: 1.0.4</div>
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      <div>Bilgi: {text}</div>
      <iframe title="app" src={iframeSrc} id="l" width="1" height="1" style={{visibility: 'hidden'}}></iframe>
    </div>
  );
}

export default App;
