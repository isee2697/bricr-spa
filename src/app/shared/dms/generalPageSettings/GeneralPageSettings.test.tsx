import React from 'react';
import { DateTime } from 'luxon';

import { DocumentType } from 'app/dms/dmsTemplateDetails/DmsTemplateDetailsContainer.types';
import { render } from 'tests';
import { LastUpdatedProfile } from 'api/types';

import { GeneralPageSettings } from './GeneralPageSettings';

describe('DMS GeneralPageSettings', () => {
  test('renders correctly', () => {
    const onSave = jest.fn();
    const types = Object.keys(DocumentType);

    const { getAllByText, container } = render(
      <GeneralPageSettings types={types} title={'Test DMS'} onSave={onSave} />,
    );

    expect(container.querySelector('.MuiSwitch-root')).toBeInTheDocument();
    expect(getAllByText(/dms.general_page_settings.file_name/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.description/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.version/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.language/).length).toBeGreaterThanOrEqual(1);
  });

  test('render updated by info', () => {
    const onSave = jest.fn();
    const types = Object.keys(DocumentType);
    const updatedBy: LastUpdatedProfile = {
      id: '0001',
      firstName: 'John',
      lastName: 'Doe',
    };

    const dateUpdated = new Date().toISOString();

    const { getByText } = render(
      <GeneralPageSettings
        types={types}
        title={'Test DMS'}
        onSave={onSave}
        updatedBy={updatedBy}
        dateUpdated={dateUpdated}
      />,
    );

    expect(getByText(DateTime.fromISO(dateUpdated).toFormat('dd-LL-yyyy, HH:mm'))).toBeInTheDocument();
    expect(getByText(`${updatedBy.firstName} ${updatedBy.lastName}`, { exact: false })).toBeInTheDocument();
  });
});
