import './App.css';
import {useEffect, useState} from 'react';

function App() {
  // const [iframeSrc, setIframeSrc] = useState('');
  const [text, setText] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [visibilityText1, setVisibilityText1] = useState('');
  const [visibilityText2, setVisibilityText2] = useState('');
  const [visibilityTime1, setVisibilityTime1] = useState('');
  const [visibilityTime2, setVisibilityTime2] = useState('');
  let fnc;

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === "visible") {
        setVisibilityText1("tab is active")
        setVisibilityTime1(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
        setVisibility(true);
      } else {
        setVisibilityText2("tab is inactive")
        setVisibilityTime2(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
        setVisibility(false);
        clearTimeout(fnc);
      }
    });
  }, [fnc]);

  function onClickIosApp () {
    const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setText('outside:' + appName);
    window.location.replace(appName);
    fnc = setTimeout(() => {
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
    console.log('visi', visibility)
    fnc = setTimeout(() => {
      setText('inside:' + appUrl);
      window.location.replace(appUrl);
    }, 2000);
  }

  return (
    <div className="container">
      <div>Version: 1.1.7</div>
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      <div>Bilgi: {text} visibility: {visibility ? 'true' : 'false'}</div>
      <div>Bilgi - document-hidden: {document.hidden ? 'true' : 'false'}</div>
      <div>Bilgi - document-webkitHidden: {document.webkitHidden ? 'true' : 'false'}</div>
      <div>Bilgi - document-mozHidden: {document.mozHidden  ? 'true' : 'false'}</div>
      <div>Bilgi - document-msHidden: {document.msHidden  ? 'true' : 'false'}</div>
      <div> active: {visibilityText1} time: {visibilityTime1}</div>
      <div> inactive: {visibilityText2} time: {visibilityTime2}</div>
      {/* <iframe title="app" src={iframeSrc} id="l" width="1" height="1" style={{visibility: 'hidden'}}></iframe> */}
    </div>
  );
}

export default App;
