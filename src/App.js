import './App.css';

function App() {
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
    setTimeout(() => {
      window.location.replace(appUrl);
    }, 100);
    window.location.replace(appName);
  }

  return (
    <div className="container">
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
    </div>
  );
}

export default App;
