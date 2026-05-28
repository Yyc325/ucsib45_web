export interface EditorProps {
    target: HTMLElement | null;
    width?: number;
    height?: number;
}
export interface EditorElements {
    wrapper: HTMLElement | null;
    canvas: HTMLCanvasElement| null;
}