import { WebGLRenderer,Scene,PerspectiveCamera,Mesh,BoxGeometry,MeshBasicMaterial } from 'three'
export class TEngine{

    private dom: HTMLElement
    private renderer: WebGLRenderer
    private scene: Scene
    private camera: PerspectiveCamera

    constructor(dom: HTMLElement) {
        //挂载的dom
        this.dom = dom;
        //渲染器
        this.renderer = new WebGLRenderer();
        //场景
        this.scene = new Scene();
        //透视相机
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000);
        
        dom.appendChild(this.renderer.domElement);
        //设置大小
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);
        
        //添加物体 mesh -> 网格 + 材质
        const cube = new Mesh(
            new BoxGeometry(1, 1, 1),
            new MeshBasicMaterial({ color: 0x00ff00 })
        )
        this.scene.add(cube);
        //渲染
        this.renderer.render(this.scene, this.camera);
    }
}