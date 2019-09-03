import * as React from 'react';
import Feedback from './Feedback';
import { BsPrefixComponent } from './helpers';

export interface FormControlProps<T> {
  innerRef?: React.LegacyRef<this>;
  size?: 'sm' | 'lg';
  plaintext?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: React.FormEventHandler<T>;
  type?: string;
  id?: string;
  isValid?: boolean;
  isInvalid?: boolean;
}

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

declare class FormControl<
  As extends React.ElementType = 'input'
> extends BsPrefixComponent<As, FormControlProps<FormControlElement>> {
  static Feedback: typeof Feedback;
}

export default FormControl;
