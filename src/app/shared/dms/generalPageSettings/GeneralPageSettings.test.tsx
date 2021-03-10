import React from 'react';

import { render } from 'tests';

import { GeneralPageSettings } from './GeneralPageSettings';

describe('DMS GeneralPageSettings', () => {
  test('renders correctly', () => {
    const onSave = jest.fn();

    const { getAllByText, container } = render(<GeneralPageSettings title={'Test DMS'} onSave={onSave} />);

    expect(container.querySelector('.MuiSwitch-root')).toBeInTheDocument();
    expect(getAllByText(/dms.general_page_settings.file_name/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.description/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.version/).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(/dms.general_page_settings.language/).length).toBeGreaterThanOrEqual(1);
  });
});
