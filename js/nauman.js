var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera (75 , window.innerWidth / window.innerHeight , 0.1 , 1000);

		var renderer = new THREE.WebGLRenderer ();
		renderer.setSize ( window.innerWidth , window.innerHeight );
		document.body.appendChild ( renderer.domElement );

		// This function updates the window and project matrix to render the scene in full scene
		window.addEventListener ( 'resize' , function()
		{
			var width = window.innerWidth;
			var height = window.innerHeight;
			renderer.setSize ( width , height );
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		);
		
		//controls = new THREE.OrbitControls( camera , renderer.domElement );

		// create box
		var geometry = new THREE.BoxGeometry(1,1,1);
		// var cubeMaterials = 
		// [
		// 	new THREE.MeshLambertMaterial ( { map: new THREE.TextureLoader().load ("img/1.jpg" ), side: THREE.FrontSide  } ), //right side
		// 	new THREE.MeshLambertMaterial ( { color: 0x4286f4, side: THREE.DoubleSide  } ), //left
		// 	new THREE.MeshLambertMaterial ( { color: 0xf441df, side: THREE.DoubleSide  } ), // top
		// 	new THREE.MeshLambertMaterial ( { color: 0x41f4a9, side: THREE.DoubleSide  } ), // bottom
		// 	new THREE.MeshLambertMaterial ( { map: new THREE.TextureLoader().load ("img/1.jpg" ), side: THREE.DoubleSide  } ), // front 
		// 	new THREE.MeshBasicMaterial ( { map: new THREE.TextureLoader().load ("img/1.jpg" ), side: THREE.DoubleSide } ) // back
		// ];

		// create a material, coulor, or image textures

		//OLD with Basic Mat
		var material = new THREE.MeshBasicMaterial (
		{
			color : 0x4286f4 , wireframe: false
		}
		);
		
		//FaceMesh
		var material = new THREE.MeshFaceMaterial ( material );


		var cube = new THREE.Mesh ( geometry , material );
		scene.add( cube );

		camera.position.z = 3;

		//Lighting
		var ambientLight = new THREE.AmbientLight ( 0xFFFFFF , 0.5 );
		scene.add ( ambientLight )

		var light1 = new THREE.PointLight ( 0xFFF0040 , 2, 50 );
		scene.add( light1 );

		var light2 = new THREE.PointLight ( 0xFFF0040 , 3, 50 );
		scene.add( light2 );

		var light3 = new THREE.PointLight ( 0xFFF0040 , 4, 50 );
		//scene.add( light3 );

		

		//gamelogic
		var update = function ()
		{
			// cube.rotation.x += 0.01;
			// cube.rotation.y += 0.005;

			var time = Date.now () * 0.0005;

			light1.position.x = Math.sin( time * 0.7 ) * 30;
			light1.position.y = Math.cos( time * 0.5 ) * 40;
			light1.position.z = Math.cos( time * 0.3 ) * 30;

			light2.position.x = Math.sin( time * 0.3 ) * 30;
			light2.position.y = Math.cos( time * 0.5 ) * 40;
			light2.position.z = Math.cos( time * 0.7 ) * 30;
		};
		
		//draw scene
		var render = function ()
		{
			renderer.render(scene , camera);
		};

		// run game loop (update, render, repeat)
		var GameLoop = function ()
		{
			requestAnimationFrame ( GameLoop );

			update ( );
			render ( );
		};

		GameLoop ( );
