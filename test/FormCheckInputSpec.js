import React from 'react';
import { mount } from 'enzyme';

import FormCheckInput from '../src/FormCheckInput';

describe('<FormCheckInput>', () => {
  it('should render correctly', () => {
    mount(
      <FormCheckInput
        id="foo"
        isValid={false}
        isInvalid={false}
        className="my-form-input"
      />,
    ).assertSingle('#foo.form-check-input.my-form-input');
  });

  it('should support ref forwarding', () => {
    class Container extends React.Component {
      render() {
        return (
          <FormCheckInput
            isValid={false}
            isInvalid={false}
            ref={ref => {
              this.input = ref;
            }}
          />
        );
      }
    }
    const instance = mount(<Container />).instance();
    expect(instance.input.tagName).to.equal('INPUT');
  });
});
