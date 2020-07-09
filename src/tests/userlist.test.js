import { shallow } from 'enzyme'
import UserList from '../js/containers/user-list';

const userList = [
    {
        id: 1,
        first: "Bucky",
        last: "Roberts",
        age: 71,
        description: "Bucky is a React developer and YouTuber",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    }];

describe('<UserList/>', () => {

    it('user list is not empty', () => {
        const wrapper = mount(
            <UserList users={userList[0]} />
        );
        expect(wrapper).toMatchSnapshot();
        // wrapper.unmount();
    });
});
