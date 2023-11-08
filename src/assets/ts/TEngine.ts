import {
    AmbientLight,
    AxesHelper,
    BoxGeometry,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer,
    MOUSE,
    Object3D,
    Vector2,
    Raycaster,
    Material,
    Group,
    PointsMaterial,
  } from "three";

import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
// import { TEventManager } from "./TEventManager";
// import { pointsPartical } from "./TPoints";

export class TEngine{

    private dom: HTMLElement;
    private renderer: WebGLRenderer;
    private scene: Scene;
    private camera: PerspectiveCamera;

    constructor(dom: HTMLElement) {
        //挂载的dom
        this.dom = dom;
        //渲染器
        this.renderer = new WebGLRenderer({
            antialias:true, //抗锯齿
        });

        this.renderer.shadowMap.enabled = true; //开启阴影贴图
        //场景
        this.scene = new Scene();
        //透视相机 
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000);

        //设置相机的位置
        this.camera.position.set(200, 200, 200);
        //相机看向的点
        this.camera.lookAt(new Vector3(0, 0, 0));
        //相机朝向 单位向量 这个属性由lookAt方法所使用，例如，来决定结果的朝向
        this.camera.up = new Vector3(0, 1, 0);
        

        //设置大小
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);

        // 初始orbitControls
        const orbitControls: OrbitControls = new OrbitControls(
            this.camera,
            this.renderer.domElement
      );

        // 初始性能监视器
        const stats = new Stats();
        const statsDom = (stats as any).domElement;
        statsDom.style.position = "fixed";
        statsDom.style.top = "0";
        // statsDom.style.right = "5px";
        statsDom.style.left = "unset";

        const renderFun = () => {
            orbitControls.update();
            //渲染性能监视器
            stats.update();
            //渲染
            this.renderer.render(this.scene, this.camera);
            //渲染
            requestAnimationFrame(renderFun);
        }
        renderFun();
        dom.appendChild(statsDom);
        //把渲染的结果放到dom上面
        dom.appendChild( this.renderer.domElement);

    }

    addObject(...object: Object3D[]) {
        object.forEach(ele => this.scene.add(ele));
    }

}
