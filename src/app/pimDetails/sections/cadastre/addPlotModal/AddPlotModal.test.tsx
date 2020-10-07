import React from 'react';
import { render, fireEvent, wait } from 'tests';

import { AddPlotModal } from './AddPlotModal';

describe('AddPlotModal', () => {
  test('displays modal with information', () => {
    const { getByText } = render(
      <AddPlotModal
        isModalOpened={true}
        loading={false}
        onModalClose={() => {}}
        handleAddPlot={() => Promise.resolve(undefined)}
      />,
    );

    const title = getByText('pim_details.cadastre.add_plot_modal.title');
    const content = getByText('pim_details.cadastre.add_plot_modal.content');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
  test('call onModalClose on cancel', async () => {
    const onModalClose = jest.fn();
    const handleAddPlot = jest.fn(() => Promise.resolve(undefined));
    const { getByText } = render(
      <AddPlotModal isModalOpened={true} loading={false} onModalClose={onModalClose} handleAddPlot={handleAddPlot} />,
    );

    const cancel = getByText('pim_details.cadastre.add_plot_modal.cancel');
    fireEvent.click(cancel);

    await wait(() => {
      expect(handleAddPlot).not.toBeCalled();
    });

    expect(onModalClose).toBeCalled();
  });

  test('call handleAddPlot and onModalClose on confirm', async () => {
    const onModalClose = jest.fn();
    const handleAddPlot = jest.fn(() => Promise.resolve(undefined));
    const { getByText } = render(
      <AddPlotModal isModalOpened={true} loading={false} onModalClose={onModalClose} handleAddPlot={handleAddPlot} />,
    );

    const cancel = getByText('pim_details.cadastre.add_plot_modal.confirm');
    fireEvent.click(cancel);

    await wait(() => {
      expect(handleAddPlot).toBeCalled();
    });

    expect(onModalClose).toBeCalled();
  });
});
