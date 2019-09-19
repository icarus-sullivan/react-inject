import * as React from 'react';
import { useEffect, useRef } from 'react';

interface Props {
  id?: string,
  src: string,
  [key: string]: any
}

const ReactInject = ({ id, src, ...props }: Props) => {
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
    xhttp.open('GET', src, xhttp.withCredentials);
    xhttp.send();
  }, [src]);

  // if we are given an id we don't need to create a div here
  return id ? null : (<div ref={ref} {...props} />);
};

export default ReactInject;