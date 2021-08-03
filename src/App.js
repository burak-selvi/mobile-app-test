import './App.css';

function App() {
  // const [iframeSrc, setIframeSrc] = useState('');
  function onClickIosApp () {
    const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    const appName = 'sanalmarket://';
    setTimeout(() => {
      window.location.replace(appUrl);
    }, 100);
    window.location.replace(appName);
  }

  function onClickAndroidApp () {
    const appUrl = 'https://play.google.com/store/apps/details?id=com.inomera.sm';
    const appName = 'sanalmarket://';
    // setIframeSrc(appName);
    setTimeout(() => {
      window.location.replace(appUrl);
    }, 25);
    window.location.replace(appName);
  }

  return (
    <div className="container">
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      {/* <iframe title="app" src={iframeSrc} id="l" width="1" height="1" style={{visibility: 'hidden'}}></iframe> */}
    </div>
  );
}

export default App;
