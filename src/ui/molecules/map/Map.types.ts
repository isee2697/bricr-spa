export type MapProps = {
  lat?: number;
  lng?: number;
  zoom?: number;
  isShowPin?: boolean;
};

export interface Pin {
  uuid: number;
}

export interface MapView {
  graphics: {
    add: (pin: Pin) => void;
    remove: (pin: Pin) => void;
    removeAll: () => void;
  };
  center: [number, number];
}
