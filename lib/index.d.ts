/// <reference types="react" />
interface Props {
    id?: string;
    src: string;
    [key: string]: any;
}
declare const ReactInject: ({ id, src, ...props }: Props) => JSX.Element | null;
export default ReactInject;
