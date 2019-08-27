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
    xhttp.open('GET', src, true);
    xhttp.send();
  }, []);

  return id ? null : (<div ref={ref} {...props} />);
};

export default ReactInject;