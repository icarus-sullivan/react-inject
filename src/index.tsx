import * as React from 'react';
import { useEffect, useRef } from 'react';

interface Props {
  id?: string,
  src: string,
  tag?: string,
  [key: string]: any
}

const ReactInject = ({ id, src, tag = 'div', children = [], ...props }: Props) => {
  const ref = useRef();

  useEffect(() => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const dom = id ? document.getElementById(id) : ref.current;
        if (dom) {
          dom.innerHTML = xhttp.responseText;
        }
      }
    };
    xhttp.open('GET', src, true);
    xhttp.send();
  }, [src]);

  if (id) {
    return null;
  }

  return React.createElement(tag, { ...props, ref }, children);
};

export default ReactInject;