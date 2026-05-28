import {RectProps} from "@/utils/paintingClass/demo/SVGMind/rect/type";

export class Rect {
    props: RectProps;
    constructor(props:RectProps) {
        this.props = props;
        this.render = this.render.bind(this);
    }

    render() {
        const rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        const properties = Object.keys(this.props);
        properties.forEach((prop) => {
            rect.setAttribute(prop, this.props[prop]);
        })
        console.log(rect)
        return rect;
    }
}