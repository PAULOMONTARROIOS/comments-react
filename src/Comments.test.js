import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
  it('should render Comments', () => {
    const comments = [
      { id: 'a', comment: 'Comment 1'},
      { id: 'b', comment: 'Comment 2'}
    ]

    const wrapper = shallow(<Comments comments={comments}/>);
    expect(wrapper.find(Comment).length).toBe(2);

    expect(wrapper.find(Comment).get(0).props.comentario).toBe(comments[0]);

  })
})