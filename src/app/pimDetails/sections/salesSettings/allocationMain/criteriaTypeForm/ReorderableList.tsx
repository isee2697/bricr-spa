import React from 'react';

export const ReOrderableList = () => {
  const list = [
    'Joint income',
    'Minimal amount of missing documents',
    'Number of preference interest',
    'Date of registration interest',
    'Additional work',
  ];

  return (
    <>
      <ol>
        {list.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ol>
    </>
  );
};
