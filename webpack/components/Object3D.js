import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import ParsedModel from './../extras/parsed_model.js';
import createMaterial from './../extras/create_material';
//import OrbitControls from './../extras/OrbitControls';

class Object3D extends Component{
  constructor(props, context) {
     super(props, context);

     // construct the position vector here, because if we use 'new' within render,
     // React will think that things have changed when they have not.
     this.cameraPosition = new THREE.Vector3(0, 0, 5);

     this.state = {
       cubeRotation: new THREE.Euler(),
     };

     this._onAnimate = () => {
       // we will get this callback every frame

       // pretend cubeRotation is immutable.
       // this helps with updates and pure rendering.
       // React will be sure that the rotation has now updated.
       this.setState({
         cubeRotation: new THREE.Euler(
           this.state.cubeRotation.x + 0.01,
           this.state.cubeRotation.y + 0.01,
           0
         ),
       });
     };
   }

   render() {

     var canvasWidth = document.querySelector('#visualizer').offsetWidth;
     var canvasHeight = document.querySelector('#visualizer').offsetHeight;

     const width = canvasWidth; // canvas width
     const height = canvasHeight; // canvas height

     return (<React3
       mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
       width={canvasWidth}
       height={canvasHeight}
       clearColor="#f9f9f9"

       onAnimate={this._onAnimate}
     >
       <scene>
         <perspectiveCamera
           name="camera"
           fov={75}
           aspect={width / height}
           near={0.1}
           far={1000}
           position={this.cameraPosition}
         />

         <ambientLight
           color={new THREE.Color(0xffffff)}
         />

         <directionalLight
           color={new THREE.Color(0xFFFFFF)}
           intensity={1.5}
           position={new THREE.Vector3(0, 0, 60)}
         />

         <mesh rotation={this.state.cubeRotation}>
           <boxGeometry
             width={1}
             height={1}
             depth={1}
           />
           <meshBasicMaterial
             color={0xEC3092}
           />
         </mesh>
       </scene>
     </React3>);
   }
 }


export default Object3D;
