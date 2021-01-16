import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from "./footer";
 
Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should show text', () => {
    const wrapper = shallow(<Footer />);
    const txt = wrapper.find('div div small');
    expect(txt.text()).toBe('Download results');
  });
});