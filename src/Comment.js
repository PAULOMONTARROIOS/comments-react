import React from 'react';

const Comment = ({comentario}) => {

  let comment = comentario.comment || 'vazio';

  return (
    <div>Comentário: {comment} </div>
  );
}

export default Comment;