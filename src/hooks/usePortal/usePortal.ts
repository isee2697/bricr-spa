import { useRef, useEffect } from 'react';

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  return rootContainer;
};

const addRootElement = (rootElem: Element) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild ? document.body.lastElementChild.nextElementSibling : null,
  );
};

export const usePortal = (id: string) => {
  const rootElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent ?? createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();
      }

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  if (!rootElemRef.current) {
    rootElemRef.current = document.createElement('div');
  }

  return rootElemRef.current;
};
