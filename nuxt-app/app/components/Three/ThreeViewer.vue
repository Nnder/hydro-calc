<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const props = defineProps({
  modelPath: String,
  canvasColor: String,
  screenIncrease: {
    type: Number,
    default: 0.5,
  },
})

const container = ref<HTMLDivElement | null>(null)
const loadingProgress = ref<number>(0)
const isLoading = ref<boolean>(true)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationFrameId: number
let model: THREE.Group | null = null

let resizeEnabled = false

function onWindowResize() {
  if (!container.value) return
  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

function fitCameraToObject(
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  object: THREE.Object3D,
  offset = 1.1
) {
  const box = new THREE.Box3().setFromObject(object)
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())

  const maxSize = Math.max(size.x, size.y, size.z)
  const halfSize = maxSize * 0.5
  const halfFov = THREE.MathUtils.degToRad(camera.fov * props.screenIncrease)

  let distance = (halfSize / Math.tan(halfFov)) * offset
  distance = THREE.MathUtils.clamp(distance, maxSize * 0.5, maxSize * 5)

  camera.position.copy(center)
  camera.position.z += distance
  camera.lookAt(center)

  controls.target.copy(center)
  controls.update()
}

function loadModel(path: string) {
  if (!path) return
  const loader = new GLTFLoader()

  isLoading.value = true
  loadingProgress.value = 0

  loader.load(
    path,
    gltf => {
      if (model) scene.remove(model)
      model = gltf.scene
      // model.rotation.x = Math.PI / 2;
      // model.rotation.y = Math.PI;


      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      model.position.sub(center)

      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim
      model.scale.setScalar(scale)

      scene.add(model)
      fitCameraToObject(camera, controls, model)
      isLoading.value = false
    },
    xhr => {
      if (xhr.total) {
        loadingProgress.value = Math.round((xhr.loaded / xhr.total) * 100)
      }
    },
    error => {
      console.error('Ошибка загрузки модели:', error)
      isLoading.value = false
    }
  )
}

onMounted(() => {
  if (!container.value) return

  scene = new THREE.Scene()
  scene.background = new THREE.Color(props.canvasColor || 0xf0f0f0)

  camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.set(2, 2, 5)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)

  const ambient = new THREE.AmbientLight(0x888888)
  scene.add(ambient)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enablePan = true
  controls.enableZoom = false
  controls.autoRotate = true
  controls.autoRotateSpeed = 2.0

  loadModel(props.modelPath)

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  renderer.domElement.addEventListener(
    'click',
    () => {
      if (!resizeEnabled) {
        window.addEventListener('resize', onWindowResize)
        resizeEnabled = true
      }
      controls.enableZoom = true
    },
    { once: false }
  )

  renderer.domElement.addEventListener('pointerleave', () => {
    controls.enableZoom = false
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  if (resizeEnabled) window.removeEventListener('resize', onWindowResize)
  try {
    renderer.dispose()
  } catch (e) {}
})

watch(
  () => props.modelPath,
  newPath => {
    loadModel(newPath)
  }
)
</script>

<template>
  <div ref="container" class="w-full h-[600px] relative">
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
      <div>
        <p>Загрузка: {{ loadingProgress }}%</p>
      </div>
    </div>
  </div>
</template>
