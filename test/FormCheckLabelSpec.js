import React from 'react';
import { mount } from 'enzyme';

import FormCheckLabel from '../src/FormCheckLabel';

describe('<FormCheckLabel>', () => {
  it('should render correctly', () => {
    expect(
      mount(
        <FormCheckLabel id="foo" className="my-form-check-label">
          Label contents
        </FormCheckLabel>,
      )
        .assertSingle('#foo.form-check-label.my-form-check-label')
        .text(),
    ).to.equal('Label contents');
  });

  it('should support ref forwarding', () => {
    class Container extends React.Component {
      render() {
        return (
          <FormCheckLabel
            ref={ref => {
              this.input = ref;
            }}
          />
        );
      }
    }
    const instance = mount(<Container />).instance();
    expect(instance.input.tagName).to.equal('LABEL');
  });
});
