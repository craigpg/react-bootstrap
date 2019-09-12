import React from 'react';
import { mount } from 'enzyme';

import Form from '../src/Form';
import FormGroup from '../src/FormGroup';

describe('<Form>', () => {
  it('should support inline', () => {
    mount(
      <Form inline className="my-form">
        <FormGroup />
      </Form>,
    )
      .assertSingle('form.form-inline.my-form')
      .assertSingle('FormGroup');
  });

  it('should support custom `as`', () => {
    mount(
      <Form as="fieldset" className="my-form">
        <FormGroup />
      </Form>,
    )
      .assertSingle('fieldset.my-form')
      .assertSingle('FormGroup');
  });

  it('Should have form as default component', () => {
    mount(<Form />).assertSingle('form');
  });

  it('should support ref forwarding', () => {
    class Container extends React.Component {
      render() {
        return (
          <Form
            ref={ref => {
              this.input = ref;
            }}
          />
        );
      }
    }

    const instance = mount(<Container />).instance();
    expect(instance.input.tagName).to.equal('FORM');
  });
});
