const { test, expect } = require("@playwright/test");
const fs = require('fs');

// Función para ejecutar Lighthouse con importación dinámica
async function runLighthouse(url, opts, config = null) {
    // Importación dinámica de chrome-launcher y lighthouse
    const { launch } = await import('chrome-launcher'); // Importamos el método launch directamente
    const { default: lighthouse } = await import('lighthouse'); // Accedemos al default export de lighthouse
    
    // Iniciar Chrome en modo headless
    const chrome = await launch({ chromeFlags: ['--headless'] }); // Usamos launch directamente
    const options = { ...opts, port: chrome.port }; // Usar el puerto de Chrome lanzado
    const result = await lighthouse(url, options, config);

    await chrome.kill(); // Detener Chrome después de obtener el resultado
    return result; // Retornar el resultado de Lighthouse
}

test.describe('Lighthouse Accessibility and Performance Test', () => {
    test('should check accessibility and performance of home page', async ({ page }) => {
        const url = 'https://automationexercise.com/';
        const options = {
            output: 'html',
            onlyCategories: ['accessibility', 'performance'],
        };

        // Ejecutar Lighthouse para evaluar accesibilidad y rendimiento
        const lighthouseResult = await runLighthouse(url, options);
        
        // Guardar el reporte de Lighthouse
        fs.writeFileSync('lighthouse-report.html', lighthouseResult.report);

        // Obtener puntajes de accesibilidad y rendimiento
        const accessibilityScore = lighthouseResult.lhr.categories.accessibility.score * 100;
        const performanceScore = lighthouseResult.lhr.categories.performance.score * 100;

        // Asserts para verificar los puntajes
        expect(accessibilityScore).toBeGreaterThan(50);
        expect(performanceScore).toBeGreaterThan(40);
    });
});