import React from 'react';

function Record(props) {
  return (
    <div className="record">
      <p>{props.data.title}</p>
    </div>
  );
}

export default Record;
