import React from 'react';

export default function DislikeButton(props) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-success btn-lg"
        method={props.method}
      >
        GO
      </button>
    </div>
  );
}
