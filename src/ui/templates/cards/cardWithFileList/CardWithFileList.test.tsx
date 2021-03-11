import React from 'react';

import { EMAILS } from '../../../../api/mocks/email';
import { render } from 'tests';

import { CardWithFileList } from './CardWithFileList';
import { FileType, FileTypeView } from './CardWithFileList.types';

describe('Renders card with files list', () => {
  test('renders', () => {
    const { getByText } = render(
      <CardWithFileList<FileType>
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
  });
});
