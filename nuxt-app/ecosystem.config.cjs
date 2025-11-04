module.exports = {
  apps: [{
    name: 'athydro-nuxt',  // Имя процесса
    script: './.output/server/index.mjs',  // Путь к серверу Nitro
    cwd: '/root/hydro-calc/nuxt-app',  // Рабочая директория (твой проект)
    instances: 1,  // Один инстанс
    interpreter: '/root/.bun/bin/bun',
    autorestart: true,  // Авторестарт при краше
    watch: false,  // Не мониторить изменения (для продакшена)
    max_memory_restart: '2G',  // Рестарт при превышении памяти
    env: {
      NODE_ENV: 'production',
      PORT: 3000  // Порт для Nitro
    },
    // Опционально: логгирование
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log'
  }]
};

