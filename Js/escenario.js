const scene = new THREE.Scene();


//para añadir color
scene.background = new THREE.Color();
//loader.load();
const luz = new THREE.DirectionalLight(0xffffff, 5);

const luz2 = new THREE.AmbientLight(0xffffff, 1);


// para añadir imagen de fondo 
var loader = new THREE.TextureLoader();
loader.load('./img/fondo.png', function(texture){
    scene.background = texture;


scene.add(luz2)
})

//variable que almacena la camara 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );//el 75 es profundidad fov, ancho alto, 
//y lo ultimo del parentesis es que tan ejos y que tan cerca es definir la vista del cubo.


//variable que alm,acena el renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );//el openchild es pa/2ra acar algode js y mostrarlo en html a


const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('../img/nino/nino.gltf', (gltf) =>{
    var loaderObjeto1 = gltf.scene;
    loaderObjeto1.scale.set(0.05, 0.05, 0.05)
    scene.add(loaderObjeto1);


    const dControls = new THREE.DragControls([loaderObjeto1], camera, renderer.domElement );
loaderObjeto1.position.x = 4;
loaderObjeto1.position.y = -10;

   
    console.log('carga completa');
}


, ()=> {
    console.log('cargando');
}, ()=> {
    console.log('error');
} 
 );

 const gltfLoader2 = new THREE.GLTFLoader();

gltfLoader2.load('../img/policia/scene.gltf', (gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(0.01, 0.01, 0.01)
    scene.add(loaderObjeto2);


    const dControls = new THREE.DragControls([loaderObjeto2], camera, renderer.domElement );

    loaderObjeto2.position.x = -20;
    loaderObjeto2.position.y = -8;

   
    console.log('carga completa');
}


, ()=> {
    console.log('cargando');
}, ()=> {
    console.log('error');
} 
 );




//posicions e la cmara

camera.position.z = 20;


 
function animate() {
    requestAnimationFrame(animate);  //sellama asi mismo para poder funcionar,reques es una consulta,llamando el espacio completo de la nimacion para funcionar.
    
    renderer.render(scene, camera);

}
animate();
