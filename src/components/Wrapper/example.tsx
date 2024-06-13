import { link } from 'fs';
import React from 'react';

const example = () => {
  const links: string[] = ["f"];

  return (
    <div>
      {
        links.length != 0  ? (
          <ul>
            {
              links.map(item => (
                <li>
                  
                </li>
              ))
            }
          </ul>
        ) : (
          <div>

          </div>
        )
      }
    </div>
  );
};

export default example;