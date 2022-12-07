declare global {
  interface Window {
    ChannelIO: any;
  }
}

export function openChannel() {
  window.ChannelIO('showMessenger');
}
