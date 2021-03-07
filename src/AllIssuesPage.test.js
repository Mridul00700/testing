import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AllissuesPage from './AllIssuesPage';
import IssueList from './IssuesList';

describe('AllissuesPage Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AllissuesPage />);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    afterEach(() => {
        wrapper.unmount();
    });
});

describe('AllIssuesPage rendering of elements', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AllissuesPage />);
    });

    it('renders correct heading for Issue List', () => {
        expect(wrapper.find("h1").render().text()).toEqual("Issue List");
    });

    it('renders one IssueList React component', () => {
        expect(wrapper.find(IssueList).length).toEqual(1);
    });
});

