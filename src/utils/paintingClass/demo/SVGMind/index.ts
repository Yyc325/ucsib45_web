import {nodeTypeMap} from "@/utils/paintingClass/demo/SVGMind/nodeType";

export class SVGMind {
    mindEditorConfig:any
    constructor(config) {
        this.mindEditorConfig = config;
        this.initMind = this.initMind.bind(this);
        this.initMind()
    }

    initMind(): void {
        const {target} = this.mindEditorConfig;
        const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        svg.setAttribute("width", this.mindEditorConfig.width || 1920);
        svg.setAttribute('height',this.mindEditorConfig.height || 1080)
        const arr = [
            {
                type:'rect',
                x:100,
                y:100,
                width:80,
                height:60,
                fill:'#0b55be',
                rx:8,
                ry:8,
            }
        ]
        arr.forEach(item => {
            const ele = this.renderMindNode(item);
            svg.appendChild(ele);
        })
        target.appendChild(svg);
    }

    // 渲染节点
    renderMindNode(nodeData:any){
        const node = new nodeTypeMap[nodeData.type]({...nodeData});

        return node.render()
    }
}