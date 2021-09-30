import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [text, setText] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [visibilityText1, setVisibilityText1] = useState('');
  const [visibilityText2, setVisibilityText2] = useState('');
  const [visibilityTime1, setVisibilityTime1] = useState('');
  const [visibilityTime2, setVisibilityTime2] = useState('');
  const [isMobile, setMobile] = useState('');
  let fnc;

  useEffect(() => {
    document.addEventListener('visibilitychange', (e) => {
      if (!e.target.hidden) {
        setVisibility(true);
        setVisibilityText1("tab is active")
        setVisibilityTime1(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
      } else {
        window.close();
        setVisibility(false);
        clearTimeout(fnc);
        setVisibilityText2("tab is inactive")
        setVisibilityTime2(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
      }
    });
  }, [fnc]);

  function onClickIosApp () {
    const appName = 'https://m2bf.adj.st?adj_t=xz9rbcr';
    setText('app name:' + appName);
    window.location.replace(appName);
    
    // const appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
    // const appName = 'sanalmarket://';
      // let now = new Date().valueOf();

    // fnc = setTimeout(() => {
    //   setText('inside:' + appUrl);
    //   window.location.replace(appUrl);
    // }, 2000);
        // if (new Date().valueOf() - now > 2100) {
        //   clearTimeout(fnc);
        //   window.close();
        //   return;  
        // }
    // window.location.replace(appName);
    //   fnc = setTimeout(() => {
    
    //     setText('inside:' + appUrl);
    //     let msg = 'App Store \'a Yönlendiriliyor...';
    //     if (window.confirm(msg)) {
    //       window.location.replace(appUrl);
    //     } else {
    //       window.close();
    //     }    
    //   }, 2000);
    
  }

  function onClickAndroidApp () {
    // const appUrl = 'https://play.google.com/store/apps/details?id=com.inomera.sm';
    // const appName = 'intent://?utm_source=sm&utm_medium=cpc&utm_campaign=sm#Intent;scheme=sanalmarket;package=com.inomera.sm;end'
    // const appName = 'sanalmarket://';
    const appName = 'https://m2bf.adj.st?adj_t=xz9rbcr';
    setText('outside:' + appName)
    window.location.replace(appName);

    // fnc = setTimeout(() => {
    //   setText('inside:' + appUrl);
    //   window.location.replace(appUrl);
    // }, 2000);
  }

  return (
    <div className="container">
      <div>Version: 1.4.1</div>
      <button onClick={onClickIosApp}>Click for the IOS App</button>
      <button onClick={onClickAndroidApp}>Click for the ANDROID App</button>
      <div>Navigator: {navigator.userAgent.toLowerCase()}</div>
      <div>Bilgi: {text} visibility: {visibility ? 'true' : 'false'}</div>
      <div> active: {visibilityText1} time: {visibilityTime1}</div>
      <div> inactive: {visibilityText2} time: {visibilityTime2}</div>
      <div>Mobile: {navigator.userAgentData.mobile ? 'true' : 'false'}</div>
    </div>
  );
}

export default App;

/*
closeIcon = faTimesCircle;
  popupVisible = true;
  timer: any;

  constructor(private platform: Platform, private _gtmService: GtmService) {}

  @HostListener('document:visibilitychange', ['$event'])
  onChangeVisibility(event: any): void {
    if (event.target.hidden) {
      clearTimeout(this.timer);
    }
  }

  isPopupVisible(): boolean {
    return this.popupVisible;
  }

  onInsideViewPort(): void {
    if (this.popupVisible) {
      this._gtmService.sendPageView({ event: 'ecommerceMobileAppView', eventType: 'Mobile App View' });
    }
  }

  onClickPopupClose(): void {
    this.popupVisible = false;
  }

  onClickOpenApp(): void {
    const url = 'https://m2bf.adj.st?adj_t=xz9rbcr';
    let appUrl: string, appName: string;
    this._gtmService.sendPageView({ event: 'ecommerceMobileAppClick', eventType: 'Mobile App Click' });
    this.onClickPopupClose();

    if (this.platform.ANDROID) {
      // utm parameters will be updated
      appUrl =
        'intent://?utm_source=sm#Intent;scheme=sanalmarket;package=com.inomera.sm;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.inomera.sm;end';
      window.location.replace(appUrl);
      return;
    }

    if (this.platform.IOS) {
      appUrl = 'https://apps.apple.com/tr/app/migros-sanal-market/id397585390?l=tr';
      appName = 'sanalmarket://';
    }

    window.location.replace(appName);
    this.timer = setTimeout(() => {
      if (this.platform.SAFARI) {
        // only for safari
        const msg = "App Store 'a Yönlendiriliyor...";
        if (window.confirm(msg)) {
          window.location.replace(appUrl);
        } else {
          window.close();
        }
      } else {
        window.location.replace(appUrl);
      }
    }, 2000);
  }
*/
