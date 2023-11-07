### 光照颜色和强度 与 物体的颜色和强度 之间的叠加

在 three.js 中，光照分别有以下几种：

- 环境光（AmbientLight）
- 平行光（DirectionalLight）
- 点光源（PointLight）
- 聚光灯（SpotLight）
- 半球光（HemisphereLight）
- 矩形光（RectAreaLight）。。。。

写法：

```js
const ambientLight = new THREE.AmbientLight(0x00ff00, 0.5);

//立方体
const box = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshStandardMaterial({ color: "rgb(255,0,0)" })
);

//地板
const plane = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshStandardMaterial({ color: "rgb(255,255,255)" })
);

plane.position.y = -1;
```

那么当绿色的光照在红色的物体上面,这个是怎么计算的呢

> 在 three 里面,光照的颜色和物体的颜色和光照的强度是进行叠加的,<br/>
> 并且你设置的 颜色会 进行转换成 ,<br/>
> r 0-1<br/>
> g 0-1<br/>
> b 0-1,<br/>
> 也就是一个颜色的向量

例如一个颜色是 rgb(255,0,0) 转换成 rgb(1,0,0) 就是 红色部分是 1, 绿色部分是 0, 蓝色部分是 0

在上面的例子中,光照的颜色向量为(0,1,0), 物体颜色的向量为(1,0,0)<br/>
两个向量进行点乘<br/>
0 1 0<br/>
1 0 0<br/>
0 0 0<br/>

结果为 0, 0, 0 再和光照的强度向量进行乘积<br/>
0 0 0<br/>
0.5 0.5 0.5<br/>
所以最后我们看到的这个物体就是黑色的<br/>

而光照和地板的颜色是<br/>
0 1 0<br/>
1 1 1<br/>
0 1 0<br/>

结果为 0 1 0 再和光照的强度向量进行乘积<br/>
0 1 0<br/>
0.5 0.5 0.5<br/>
0 0.5 0<br/>

所以最后看到的就是淡一点的绿色<br/>
