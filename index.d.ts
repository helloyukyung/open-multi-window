declare module "open-multi-window" {
  interface Windows {
    url: string;
    name?: string;
  }

  interface WindowOpenOptions {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    resizable?: boolean;
    scrollbars?: boolean;
    menubar?: boolean;
    toolbar?: boolean;
    location?: boolean;
    status?: boolean;
    directories?: boolean;
    fullscreen?: boolean;
    channelmode?: boolean;
    dependant?: boolean;
    dialog?: boolean;
    alwaysRaised?: boolean;
    alwaysLowered?: boolean;
  }

  function openMultiWindow(
    windows: Windows[],
    options?: WindowOpenOptions
  ): Promise<Window[]>;

  export = openMultiWindow;
}
