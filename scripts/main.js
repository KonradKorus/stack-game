import * as THREE from 'three';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Assuming you have a scene, camera, and renderer set up
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Set initial camera position
camera.position.set(0, 0, 5);

// Create a vector to represent the angle
var angleVector = new THREE.Vector3(1, 0, 0);

// Define the angle in radians
var angleInRadians = Math.PI / 4; // Adjust the angle as needed

// Apply the rotation to the angle vector
angleVector.applyAxisAngle(new THREE.Vector3(1, 0.6, 0), angleInRadians);

// Set the new camera position
camera.position.copy(angleVector);

// Set the camera to look at the center of the scene
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Add some geometry to visualize the scene
var geometry = new THREE.BoxGeometry(0.5, 0.8, 0.5);
geometry.translate(0, -0.6, 0);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set up the renderer and append it to the document body
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube

  // Render the scene
  renderer.render(scene, camera);
}

// Call the animate function to start the animation loop
animate();
