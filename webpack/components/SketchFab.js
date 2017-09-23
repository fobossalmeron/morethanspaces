import React, { Component } from 'react';

class SketchFab extends Component{
  constructor(props, context) {
     super(props, context);

   }
   componentDidMount() {
     var iframe = document.getElementById( 'api-frame' );
         var version = '1.0.0';
         var urlid = this.props.obj;
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
             ui_stop:0,
             autostart: 1
         } );
   }

   render() {

     return (
            <iframe src="" id="api-frame" allowFullScreen={true}></iframe>
     );
   }
 }


export default SketchFab;
