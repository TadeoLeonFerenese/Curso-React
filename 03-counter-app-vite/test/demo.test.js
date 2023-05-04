describe("Puebas en <DemoComponent />", () => {
  test("Esta Prueba no debe de fallar", () => {
    // 1. inicializacion
    const message1 = "Hola mundo";
    // 2. estimulo
    const message2 = message1.trim();
    // 3. Observar el comportamiento... esperado
    expect(message1).toBe(message2);
  });
});
