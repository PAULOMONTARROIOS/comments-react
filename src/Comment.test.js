import React from 'react';
import Comment from './Comment'

import { render } from 'enzyme'


it('should render', ()=> {

  const comentario = {
    comment: "Algum teste"
  }
  const wrapper = render(<Comment comentario={comentario}/>);

  expect(wrapper.text()).toBe('Comentário: Algum teste ')
});

it('should render empty', ()=> {

  const comentario = {
    comment: ""
  }
  const wrapper = render(<Comment comentario={comentario}/>);

  expect(wrapper.text()).toBe('Comentário: vazio ')
});