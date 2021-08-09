import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [text, setText] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [visibilityText1, setVisibilityText1] = useState('');
  const [visibilityText2, setVisibilityText2] = useState('');
  const [visibilityTime1, setVisibilityTime1] = useState('');
  const [visibilityTime2, setVisibilityTime2] = useState('');
  let fnc;

  useEffect(() => {
    document.addEventListener('visibilitychange', (e) => {
      if (!e.target.hidden) {
        setVisibility(true);
        setVisibilityText1("tab is active")
        setVisibilityTime1(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
      } else {
        setVisibility(false);
        clearTimeout(fnc);
        setVisibilityText2("tab is inactive")
        setVisibilityTime2(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
      }
    });
  }, [fnc]);

  function onClickIosApp () {
    const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    const appName = 'sanalmarket://';
    setText('outside:' + appName);
    window.location.replace(appName);

    fnc = setTimeout(() => {
      setText('inside:' + appUrl);
      window.location.replace(appUrl);
    }, 2000);
  }

  function onClickAndroidApp () {
    // const appUrl = 'https://play.google.com/store/apps/details?id=com.inomera.sm';
    const appName = 'intent://?utm_source=sm&utm_medium=cpc&utm_campaign=sm#Intent;scheme=sanalmarket;package=com.inomera.sm;end'
    // const appName = 'sanalmarket://';
    setText('outside:' + appName)
    window.location.replace(appName);

    // fnc = setTimeout(() => {
    //   setText('inside:' + appUrl);
    //   window.location.replace(appUrl);
    // }, 2000);
  }

  return (
    <div className="container">
      <div>Version: 1.2.6</div>
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      <div>Bilgi: {text} visibility: {visibility ? 'true' : 'false'}</div>
      <div> active: {visibilityText1} time: {visibilityTime1}</div>
      <div> inactive: {visibilityText2} time: {visibilityTime2}</div>
    </div>
  );
}

export default App;
