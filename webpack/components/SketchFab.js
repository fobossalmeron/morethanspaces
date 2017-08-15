import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';

class SketchFab extends Component{
  constructor(props, context) {
     super(props, context);

   }
   componentDidMount() {
     var iframe = document.getElementById( 'api-frame' );
         var version = '1.0.0';
         var urlid = '35aff2670465453498a24ba120417f2d';
         var client = new Sketchfab( version, iframe );

         client.init( urlid, {
             success: function onSuccess( api ){
                 api.start();
                 api.addEventListener( 'viewerready', function() {

                     console.log( 'Viewer is ready' );

                 } );
             },
             error: function onError() {
                 console.log( 'Viewer error' );
             },
             autospin: 1,
             transparent: 1,
             ui_controls: 0,
             ui_general_controls: 0,
             ui_settings: 0,
             ui_help: 0,
             autostart: 1
         } );
   }

   render() {

     return (
            <iframe src="" id="api-frame" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
     );
   }
 }


export default SketchFab;
