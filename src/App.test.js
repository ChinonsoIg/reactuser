import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './components/home';
import App from "./App";
 
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="main">
          <Home />
        </div>
      </App>
    ));
    expect(wrapper.contains(<div className="main"><Home /></div>)).toBe(true);
  });
});