import {EditorElements, EditorProps} from "@/utils/paintingClass/demo/demo1/type";
import {error_tip} from "@/utils/paintingClass/demo/demo1/error_tip";
import './demo1.scss'

export class MindEditor {

    brush: CanvasRenderingContext2D | null = null;
    isPainting: boolean = false;

    brushWeight: number = 1;

    editorConfig: any;
    editorElements: EditorElements = {
        wrapper: null,
        canvas: null,
    };

    constructor(editorConfig: EditorProps) {
        this.editorConfig = editorConfig;
        this.createEditor = this.createEditor.bind(this);
        this.paintingStart = this.paintingStart.bind(this);
        this.paintingAction = this.paintingAction.bind(this);
        this.paintingFinished = this.paintingFinished.bind(this);
        this.enterCanvas= this.enterCanvas.bind(this);
        this.leaveCanvas = this.leaveCanvas.bind(this);
        this.createEditor()
    }

    // 初始化画板
    createEditor() {
        const {target, width, height} = this.editorConfig
        if (!target) {
            throw new Error(error_tip['target']);
        }
        this.editorElements.wrapper = document.createElement("div");
        this.editorElements.canvas = document.createElement("canvas");
        this.editorElements.canvas.width = width;
        this.editorElements.canvas.height = height
        this.editorElements.wrapper.classList.add("mind-editor__wrapper");
        this.editorElements.wrapper.addEventListener('mousedown', this.paintingStart)
        this.editorElements.wrapper.addEventListener('mouseenter', this.enterCanvas);
        this.editorElements.wrapper.addEventListener('mouseleave', this.leaveCanvas);
        document.body.addEventListener('mousemove', this.paintingAction)
        document.body.addEventListener('mouseup', this.paintingFinished)
        this.editorElements.wrapper.appendChild(this.editorElements.canvas);
        target.appendChild(this.editorElements.wrapper);
    }

    // 初始化菜单项
    createMenu() {
        const {navs} = this.editorConfig;
    }

    // 开始绘画
    paintingStart(e: MouseEvent) {
        if (!this.brush && this.editorElements.canvas) {
            this.brush = this.editorElements.canvas.getContext('2d')
        }
        if (this.brush) {
            this.isPainting = true;
            this.brush.beginPath()
            this.brush.moveTo(e.offsetX, e.offsetY);
            this.brush.lineWidth = this.brushWeight
            // this.brush.fillStyle = "#000"
        }
    }

    // 绘画中
    paintingAction(e: MouseEvent) {
        let x1 = 0;
        let x2 = 0;
        let y1 = 0;
        let y2 = 0;
        if (this.editorElements.wrapper) {
            // console.log(this.editorElements.wrapper.offsetLeft)
            // console.log(this.editorElements.wrapper.offsetTop)
            x1 = this.editorElements.wrapper.offsetLeft
            x2 = this.editorElements.wrapper.offsetLeft + this.editorElements.wrapper.clientWidth
            y1 = this.editorElements.wrapper.offsetTop
            y2 = this.editorElements.wrapper.offsetTop + this.editorElements.wrapper.offsetHeight
        }
        const isInner = x1 < e.pageX && y1 < e.pageY && e.pageX < x2 && e.pageY < y2
        if (this.brush && this.isPainting&&isInner) {
            this.brush.lineTo(e.offsetX, e.offsetY);
            this.brush.stroke();
        }
    }

    // 绘画结束
    paintingFinished() {
        if (this.brush) {
            this.brush.closePath()
            this.isPainting = false;
        }
    }
    // 进入画布
    enterCanvas(event: MouseEvent) {
        this.brush?.beginPath()
        this.brush?.moveTo(event.offsetX,event.offsetY)
    }
    // 离开画布
    leaveCanvas(event: MouseEvent){
        this.brush?.closePath()
    }
    generateImage() {
        if (this.editorElements.canvas) {
            const imgSrc = this.editorElements.canvas.toDataURL("image/png")
            return imgSrc
        }
    }
}