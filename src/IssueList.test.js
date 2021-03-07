import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IssuesList from './IssuesList';

// describe('When valid issues array props passed to IssueList component', () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<IssuesList />);
//     });


// });

describe('When valid issues array props passed to IssueList component', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            Issues: [
                {
                    "id": 1,

                    "issueDescription": "Issue_1",

                    "severity": "Major",

                    "status": "Open"

                },
                {

                    "id": 2,

                    "issueDescription": "Issue_2",

                    "severity": "Minor",

                    "status": "Closed"

                }

            ]
        }
        wrapper = shallow(<IssuesList {...props} />);
    });

    it(`renders "Issue Description" as heading in Second column`, () => {
        let secondColumn = wrapper.find('th').at(1);
        expect(secondColumn.render().text()).toContain("Issue Description");
    });

    it(`renders "Status" as heading in Fourth column`, () => {
        let secondColumn = wrapper.find('th').at(3);
        expect(secondColumn.render().text()).toContain("Status");
    });

    it(`passes the 2nd Issue's description as props to second Issues Component`, () => {
        expect(wrapper.find('Issue').at(1).prop('issueDescription')).toEqual('Issue_2');
    });

    it(`passes the 2nd Issue's status as props to second Issues Component`, () => {
        expect(wrapper.find('Issue').at(1).prop('status')).toEqual('Closed');
    })

});

describe('When issues array props passed to IssueList component is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            Issues: null
        }
        wrapper = shallow(<IssuesList  {...props} />);
    });

    it('should not crash and no issue Component is rendered', () => {
        let list = wrapper.find('Issue');
        expect(list.length).toEqual(0);
    });
});