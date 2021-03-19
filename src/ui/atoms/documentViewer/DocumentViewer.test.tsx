import React from 'react';
import userEvent from '@testing-library/user-event';

import { render } from 'tests';

import { DocumentViewer } from './DocumentViewer';
import { DocumentViewerHeader } from './DocumentViewerHeader';

describe('DocumentViewer', () => {
  const fakeUri = 'http://test.picture.com/myImage.png';
  const fakePfUri = 'http://test.picture.com/myPdf.pdf';

  it('shows header and click next', async () => {
    const nextFn = jest.fn();
    const prevFn = jest.fn();

    const fakeDocs = [{ uri: fakeUri }, { uri: fakePfUri }];
    const state = {
      documents: fakeDocs,
      config: { header: { disableFileName: false } },
      currentFileNo: 0,
      currentDocument: { uri: fakeUri },
    };
    const { getByText, getByTestId } = render(
      <DocumentViewerHeader state={state} previousDocument={prevFn} nextDocument={nextFn} />,
    );

    expect(getByText('myImage.png')).toBeInTheDocument();
    expect(getByText('1 common.number.of 2')).toBeInTheDocument();

    await userEvent.click(getByTestId('document-viewer-next-button'));
    expect(nextFn).toHaveBeenCalled();
  });

  it('shows header without title and clicks back', async () => {
    const nextFn = jest.fn();
    const prevFn = jest.fn();

    const fakeDocs = [{ uri: fakeUri }, { uri: fakePfUri }];
    const state = {
      documents: fakeDocs,
      config: { header: { disableFileName: false } },
      currentFileNo: 1,
      currentDocument: { uri: fakeUri },
    };
    const { getByText, getByTestId, queryByText } = render(
      <DocumentViewerHeader state={state} previousDocument={prevFn} nextDocument={nextFn} />,
    );

    expect(getByText('2 common.number.of 2')).toBeInTheDocument();
    expect(queryByText('myPdf.pdf')).toBeNull();

    await userEvent.click(getByTestId('document-viewer-previous-button'));
    expect(prevFn).toHaveBeenCalled();
  });

  it('shows no header', async () => {
    const nextFn = jest.fn();
    const prevFn = jest.fn();

    const fakeDocs = [{ uri: fakeUri }];
    const state = {
      documents: fakeDocs,
      config: { header: { disableFileName: false } },
      currentFileNo: 1,
      currentDocument: { uri: fakeUri },
    };
    const { queryByText } = render(
      <DocumentViewerHeader state={state} previousDocument={prevFn} nextDocument={nextFn} />,
    );

    expect(queryByText('2 common.number.of 2')).toBeNull();
    expect(queryByText('myPdf.pdf')).toBeNull();
  });

  it('shows correct number and title', async () => {
    const { getByText } = render(<DocumentViewer documents={[{ uri: fakeUri }, { uri: fakePfUri }]} />);

    expect(getByText('myImage.png')).toBeInTheDocument();
    expect(getByText('1 common.number.of 2')).toBeInTheDocument();
  });
});
