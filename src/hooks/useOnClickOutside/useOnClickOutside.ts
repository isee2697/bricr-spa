import { RefObject, useEffect, useRef } from 'react';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = { [Type in HandledEventsType]: HTMLElementEventMap[Type] }[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

const defaultEvents: HandledEvents = [MOUSEDOWN, TOUCHSTART];

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: Handler | null, events = defaultEvents) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!handler) {
      return () => {};
    }

    const listener = (event: PossibleEvent) => {
      if (!ref.current || !handlerRef.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handlerRef.current(event);
    };

    events.forEach(event => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, listener);
      });
    };
  }, [events, handler, ref]);
};
