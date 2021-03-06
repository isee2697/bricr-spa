// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      MutationObserver: typeof MutationObserver;
    }
  }
}

global.MutationObserver = class {
  disconnect(): void {}
  observe(target: Node, options?: MutationObserverInit): void {}
  takeRecords(): MutationRecord[] {
    return [];
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
