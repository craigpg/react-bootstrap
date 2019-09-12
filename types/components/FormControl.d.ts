import * as React from 'react';
import Feedback from './Feedback';
import { BsPrefixComponent } from './helpers';

export interface FormControlProps {
  size?: 'sm' | 'lg';
  plaintext?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: React.FormEventHandler<this>;
  type?: string;
  id?: string;
  isValid?: boolean;
  isInvalid?: boolean;
}

declare class FormControl<
  As extends React.ElementType = 'input'
> extends BsPrefixComponent<As, FormControlProps> {
  static Feedback: typeof Feedback;
}

export default FormControl;
