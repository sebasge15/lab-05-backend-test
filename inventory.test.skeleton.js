const Inventory = require("./inventory");

describe("Inventory System", () => {
  let inventory;

  beforeEach(() => {
    // TODO: Inicializar el inventario antes de cada prueba
  });

  describe("Add Product", () => {
    test("should add a new product successfully", () => {
      // PREPARAR
      // TODO: Crear un objeto producto con todos los campos requeridos
      // EJECUTAR
      // TODO: Llamar al método addProduct
      // VALIDAR
      // TODO: Verificar que el producto se agregó correctamente
      // TODO: Verificar que se agregó la fecha de creación
    });

    test("should not allow duplicate product IDs", () => {
      // PREPARAR
      // TODO: Crear y agregar un producto
      // TODO: Crear otro producto con el mismo ID
      // EJECUTAR y VALIDAR
      // TODO: Verificar que se lanza el error correcto al intentar agregar un producto duplicado
    });

    test("should validate required fields", () => {
      // PREPARAR
      // TODO: Crear un objeto producto con campos faltantes
      // EJECUTAR y VALIDAR
      // TODO: Verificar que se lanza el error correcto al intentar agregar un producto inválido
    });
  });

  describe("Update Stock", () => {
    test("should update stock successfully", () => {
      // PREPARAR
      // TODO: Crear y agregar un producto con stock inicial
      // EJECUTAR
      // TODO: Actualizar el stock del producto
      // VALIDAR
      // TODO: Verificar que el stock se actualizó correctamente
      // TODO: Verificar que se actualizó la fecha de modificación
    });

    test("should not allow negative stock", () => {
      // PREPARAR
      // TODO: Crear y agregar un producto con stock inicial
      // EJECUTAR y VALIDAR
      // TODO: Verificar que se lanza el error correcto al intentar reducir el stock por debajo de cero
    });
  });

  describe("Get Products by Category", () => {
    test("should return products in category", () => {
      // PREPARAR
      // TODO: Crear y agregar varios productos de diferentes categorías
      // EJECUTAR
      // TODO: Obtener productos de una categoría específica
      // VALIDAR
      // TODO: Verificar que se retornan solo los productos de la categoría solicitada
      // TODO: Verificar la cantidad correcta de productos
    });

    test("should throw error for non-existent category", () => {
      // PREPARAR
      // TODO: Crear y agregar productos en categorías existentes
      // EJECUTAR y VALIDAR
      // TODO: Verificar que se lanza el error correcto al buscar una categoría inexistente
    });
  });

  describe("Calculate Total Value", () => {
    test("should calculate total inventory value", () => {
      // PREPARAR
      // TODO: Crear y agregar varios productos con diferentes precios y cantidades
      // EJECUTAR
      // TODO: Calcular el valor total del inventario
      // VALIDAR
      // TODO: Verificar que el cálculo del valor total es correcto
    });

    test("should return zero for empty inventory", () => {
      // PREPARAR
      // TODO: Asegurarse de que el inventario está vacío
      // EJECUTAR
      // TODO: Calcular el valor total del inventario
      // VALIDAR
      // TODO: Verificar que el valor total es cero
    });
  });

  describe("Additional Methods", () => {
    test("should get product by ID", () => {
      // PREPARAR
      // TODO: Crear y agregar un producto
      // EJECUTAR
      // TODO: Buscar el producto por su ID
      // VALIDAR
      // TODO: Verificar que se retorna el producto correcto
    });

    test("should get low stock products", () => {
      // PREPARAR
      // TODO: Crear y agregar varios productos con diferentes niveles de stock
      // EJECUTAR
      // TODO: Obtener productos con stock bajo
      // VALIDAR
      // TODO: Verificar que se retornan solo los productos con stock bajo
      // TODO: Verificar que todos los productos retornados tienen stock menor al umbral
    });

    test("should remove product", () => {
      // PREPARAR
      // TODO: Crear y agregar un producto
      // EJECUTAR
      // TODO: Eliminar el producto
      // VALIDAR
      // TODO: Verificar que el producto se eliminó correctamente
      // TODO: Verificar que no se puede encontrar el producto eliminado
    });
  });
});
