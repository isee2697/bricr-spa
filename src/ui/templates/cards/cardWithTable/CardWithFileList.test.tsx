import React from 'react';

import { EMAILS } from 'api/mocks/email';
import { render } from 'tests';

import { CardWithTable } from './CardWithTable';
import { FileType, FileTypeView } from './CardWithTable.types';

describe('Renders card with files list', () => {
  test('renders', () => {
    const { getByText, getAllByTestId } = render(
      <CardWithTable<FileType>
        onAdd={() => {}}
        titleId="Email example"
        titleAmount={EMAILS.length}
        view={FileTypeView.Email}
        files={EMAILS as FileType[]}
        onUploadFiles={files => () => {}}
        actions={{
          onEdit: { exec: () => {} },
          onDelete: { exec: () => {} },
        }}
      />,
    );

    const element = getByText('Email example');

    expect(element).toBeInTheDocument();
    expect(getAllByTestId('list-table-item').length).toEqual(3);
  });
});
