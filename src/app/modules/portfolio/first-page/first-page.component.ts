import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();

  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  cube = new THREE.Mesh(this.geometry, this.material);

  constructor() {}

  ngOnInit(): void {
    let mainContainer = document.getElementById('main-container');

    if (mainContainer !== null) {
      this.scene.background = new THREE.Color('#121212');

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      mainContainer.appendChild(this.renderer.domElement);

      this.scene.add(this.cube);
      this.camera.position.z = 5;

      this.animate();
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
