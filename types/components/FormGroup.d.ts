import * as React from 'react';
import { BsPrefixComponent } from './helpers';

export interface FormGroupProps {
  controlId?: string;
}

declare class FormGroup<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As, FormGroupProps> {}

export default FormGroup;
