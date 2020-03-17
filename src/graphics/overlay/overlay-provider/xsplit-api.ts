interface Window {
  SetVolume: (vol: any) => void
  GetPlayState: () => void
  OnSceneLoad: () => void
}

window.SetVolume = _ => {
  // no audio elements used on the page (yet)
}

window.GetPlayState = () => {
  // i don't know what this is
}

window.OnSceneLoad = () => {
  // called when xsplit renders a screen (including on preview)
}

if (window.external && (window as any).external.SetLocalProperty) {
  // requests that XSplit lets this browser source run at 60fps,
  // otherwise it'd be locked at 30 by defalt
  ;(window as any).external.SetLocalProperty('prop:Browser60fps', '1')
}
