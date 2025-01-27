// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config(); // Cargar variables de entorno desde .env

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests/e2e', // Carpeta donde están las pruebas E2E
  fullyParallel: true, // Ejecutar pruebas en paralelo
  forbidOnly: !!process.env.CI, // Fallar si hay un `test.only` en producción
  retries: process.env.CI ? 2 : 0, // Reintentar pruebas fallidas solo en CI
  workers: process.env.CI ? 1 : undefined, // Ejecutar una prueba por vez en CI
  reporter: [
    ['list'], // Reporte en consola
    ['html', { open: 'on-failure' }], // Reporte HTML (se abre solo si hay fallos)
    ['allure-playwright'], // Reporte Allure
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://club-administration.qa.qubika.com', // URL base para las pruebas
    headless: process.env.HEADLESS === 'true', // Controlar si las pruebas se ejecutan con o sin interfaz gráfica
    viewport: { width: 1280, height: 720 }, // Tamaño del navegador
    ignoreHTTPSErrors: true, // Ignorar errores HTTPS
    video: 'on-first-retry', // Grabación solo en reintentos
    screenshot: 'on', // Captura de pantalla en caso de fallo
    trace: 'on-first-retry', // Habilitar trazas en reintentos
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Configuración opcional para servidor web local (si lo necesitas)
  webServer: process.env.CI
    ? undefined
    : {
        command: 'npm run start', // Comando para iniciar el servidor
        url: 'http://127.0.0.1:3000', // URL donde el servidor estará disponible
        reuseExistingServer: !process.env.CI,
      },
});