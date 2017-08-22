import React, { Component } from 'react';

class SketchFab extends Component{
  constructor(props, context) {
     super(props, context);

   }
   componentDidMount() {
     var iframe = document.getElementById( 'api-frame' );
         var version = '1.0.0';
         var urlid = '582d6d35e8974d1ba0af3d51e0a0369a';
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
             autospin: 0,
             ui_controls: 0,
             ui_general_controls: 0,
             ui_settings: 0,
             ui_help: 0,
             autostart: 1
         } );
   }

   render() {

     return (
            <iframe src="" id="api-frame" allowFullScreen></iframe>
     );
   }
 }


export default SketchFab;
