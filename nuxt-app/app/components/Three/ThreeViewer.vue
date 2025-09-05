<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const props = defineProps<{
  modelPath: string
}>()

const container = ref<HTMLDivElement | null>(null)
const loadingProgress = ref<number>(0) // прогресс загрузки
const isLoading = ref<boolean>(true) // состояние загрузки

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationFrameId: number
let model: THREE.Group | null = null

onMounted(() => {
  if (!container.value) return

  // Сцена
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  // Камера
  camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.set(2, 2, 5)

  // Рендерер
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  // Свет
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 5, 5)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0x888888))

  // OrbitControls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enablePan = true
  controls.enableZoom = true

  // Загрузка модели
  loadModel(props.modelPath)

  // Анимация
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  // resize
  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', onWindowResize)
  renderer.dispose()
})

function onWindowResize() {
  if (!container.value) return
  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

function loadModel(path: string) {
  if (!path) return
  const loader = new GLTFLoader()

  isLoading.value = true
  loadingProgress.value = 0

  loader.load(
    path,
    gltf => {
      console.log('model is loaded', gltf)
      if (model) {
        scene.remove(model)
      }

      model = gltf.scene

      // 🔹 Центрируем и масштабируем модель
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      // смещаем в центр
      model.position.x += model.position.x - center.x
      model.position.y += model.position.y - center.y
      model.position.z += model.position.z - center.z

      // нормализуем масштаб
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim // подгоняем в камеру
      model.scale.setScalar(scale)

      scene.add(model)
      scene.add(new THREE.AxesHelper(10))
      scene.add(new THREE.GridHelper(20, 20))

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

// если props меняется → перезагрузка модели
watch(
  () => props.modelPath,
  newPath => {
    loadModel(newPath)
  }
)
</script>

<template>
  <div class="relative w-full h-[600px]">
    <div ref="container" class="w-full h-full" />

    <!-- Прогресс-бар -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div class="w-1/2 bg-gray-200 rounded-full h-3 overflow-hidden">
        <div class="bg-blue-500 h-3 transition-all duration-300" :style="{ width: loadingProgress + '%' }"></div>
      </div>
      <p class="mt-2 text-gray-700 font-medium">{{ loadingProgress }}%</p>
    </div>
  </div>
</template>
