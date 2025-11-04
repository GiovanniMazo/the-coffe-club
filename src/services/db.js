export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('CoffeeShopDB', 1);

    request.onerror = () => {
      reject('Error opening database');
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Crear store para el carrito
      if (!db.objectStoreNames.contains('cart')) {
        const cartStore = db.createObjectStore('cart', { keyPath: 'id', autoIncrement: true });
        cartStore.createIndex('productId', 'productId', { unique: false });
      }

      // Crear store para las órdenes
      if (!db.objectStoreNames.contains('orders')) {
        const ordersStore = db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
        ordersStore.createIndex('date', 'date', { unique: false });
      }
    };
  });
};

export const addToCart = async (product) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['cart'], 'readwrite');
    const store = transaction.objectStore('cart');
    const request = store.add({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      addedAt: new Date()
    });

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getCart = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['cart'], 'readonly');
    const store = transaction.objectStore('cart');
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const removeFromCart = async (id) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['cart'], 'readwrite');
    const store = transaction.objectStore('cart');
    const request = store.delete(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const createOrder = async (orderData) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['orders'], 'readwrite');
    const store = transaction.objectStore('orders');
    const request = store.add({
      ...orderData,
      date: new Date(),
      status: 'pending'
    });

    request.onsuccess = () => {
      // Limpiar el carrito después de crear la orden
      clearCart();
      resolve(request.result);
    };
    request.onerror = () => reject(request.error);
  });
};

export const clearCart = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['cart'], 'readwrite');
    const store = transaction.objectStore('cart');
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};