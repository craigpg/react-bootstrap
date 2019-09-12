import * as React from 'react';

import { BsPrefixComponent } from './helpers';

export interface FormCheckLabelProps {
  htmlFor?: string;
}

declare class FormCheckLabel extends BsPrefixComponent<
  'label',
  FormCheckLabelProps
> {}

export default FormCheckLabel;
