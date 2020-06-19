export interface Location {
  lat?: number;
  lng?: number;
}

export interface LocationMapProps {
  latitudeName: string;
  longitudeName: string;
  disabled?: boolean;
}

export interface Pin {
  uuid: number;
}

export interface MapView {
  graphics: {
    add: (pin: Pin) => void;
    remove: (pin: Pin) => void;
    removeAll: () => void;
  };
}
