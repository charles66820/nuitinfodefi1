//Initialization of needed elements for three.js environment to work
let scene, camera, renderer;

function init () {
    const canvas = document.getElementById("c");
    scene = new THREE.Scene();
        
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias : true });
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
}

//Functions that help the creation of objects
function createRectangle ( c, p, g ) {
    var geometryCube = new THREE.BoxGeometry( ...g );
    var materialCube = new THREE.MeshBasicMaterial( { color: c } );
    var cube = new THREE.Mesh( geometryCube, materialCube );
    cube.position.set ( ...p );
    scene.add( cube );
    return cube;
}

function createCube ( c, p ) {
    var cube = createRectangle( c, p, [1, 1, 1] );
    return cube;
}

    //Initialization of cubes
function cubesCreation () {
    const cubes = [
    createCube ( 0xD42F2F, [ 1, 1, 0 ] ),
    createRectangle ( 0x00438C, [ 3, 3, 0 ], [ 1, 5, 1 ] ),
    createRectangle ( 0x99CC00, [ 5, 2, 0 ], [ 1, 3, 1 ] ),
    ]
}


    //Creation of the axis
function axisCreation () {
    var materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    var geometryLine = new THREE.Geometry();
    geometryLine.vertices.push( new THREE.Vector3( 0, 11, 0) );
    geometryLine.vertices.push( new THREE.Vector3( 0, 0, 0) );
    geometryLine.vertices.push( new THREE.Vector3( 11, 0, 0) );
    var line = new THREE.Line( geometryLine, materialLine );
    scene.add( line );
}
    

    //Positionning of the camera
    var Dx = 10;
    var Dy = 1;
    var Dz = 10;

    function rotationCamera() {
        var arg = Math.atan2( Dz, Dx );
        arg = arg + 0.01;
        Dz = 10 * Math.sin( arg );
        Dx = 10 * Math.cos( arg );

        camera.position.set( Dx, Dy, Dz );
        camera.lookAt( 0, 0, 0 );
    }


    function onWindowResize () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    //Loop function that is used to refresh the canvas
    function animate() {
        requestAnimationFrame( animate );
        rotationCamera();
        renderer.render( scene, camera );
    }


    window.addEventListener('resize', onWindowResize, false);


    //Appels
    init();
    axisCreation();
    cubesCreation();
    animate();
