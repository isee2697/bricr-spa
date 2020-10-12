import { AppointmentModel } from '@devexpress/dx-react-scheduler';

export type AppointmentNodeProps = {
  props: {
    params: {
      data: AppointmentModel;
      type: 'horizontal' | 'vertical';
    };
  };
};
