import {
    Mesh,
    BoxGeometry,
    Object3D,
    Line,
    Points,
    MeshStandardMaterial,


} from 'three'

export const basicObjectList: Object3D[] = [];


//地面
const stage: Mesh = new Mesh(
    new BoxGeometry(200, 10, 200),
    new MeshStandardMaterial({color:'rgb(150,150,150)'})
)

stage.position.y = -5;


//立方体
const box: Mesh = new Mesh(
    new BoxGeometry(20, 20, 20),
)

box.position.y = 10;