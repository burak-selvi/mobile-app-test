import './App.css';
import {useEffect, useState} from 'react';

function App() {
  // const [iframeSrc, setIframeSrc] = useState('');
  const [text, setText] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [visibilityText1, setVisibilityText1] = useState('');
  const [visibilityText2, setVisibilityText2] = useState('');

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === "visible") {
        setVisibilityText1("tab is active")
        setVisibility(true);
      } else {
        setVisibilityText2("tab is inactive")
        setVisibility(false);
      }
    });
  }, []);

  function onClickIosApp () {
    const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setText('outside:' + appName);
    window.location.replace(appName);
    setTimeout(() => {
      setText('inside:' + appUrl);
      window.location.replace(appUrl);
    }, 2000);
  }

  function onClickAndroidApp () {
    const appUrl = 'https://play.google.com/store/apps/details?id=com.inomera.sm';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setText('outside:' + appName)
    window.location.replace(appName);
    setTimeout(() => {
      setText('inside:' + appUrl)
      if (!visibility) {
        return;
      }
      window.location.replace(appUrl);
    }, 5000);
  }

  return (
    <div className="container">
      <div>Version: 1.1.4</div>
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      <div>Bilgi: {text} visibility: {visibility ? 'true' : 'false'}</div>
      <div>Bilgi - document-hidden: {document.hidden ? 'true' : 'false'}</div>
      <div>Bilgi - document-webkitHidden: {document.webkitHidden ? 'true' : 'false'}</div>
      <div>Bilgi - document-mozHidden: {document.mozHidden  ? 'true' : 'false'}</div>
      <div>Bilgi - document-msHidden: {document.msHidden  ? 'true' : 'false'}</div>
      <div> active: {visibilityText1} time: {new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}</div>
      <div> inactive: {visibilityText2} time: {new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}</div>
      {/* <iframe title="app" src={iframeSrc} id="l" width="1" height="1" style={{visibility: 'hidden'}}></iframe> */}
    </div>
  );
}

export default App;
