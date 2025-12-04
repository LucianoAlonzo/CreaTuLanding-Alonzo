import { collection, getDocs, query, where, doc, getDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getAllProducts() {
  const col = collection(db, "products");
  const snap = await getDocs(col);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductsByCategory(categoryId) {
  const q = query(collection(db, "products"), where("category", "==", categoryId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
}

export async function createOrder(orderData) {
  const col = collection(db, "orders");
  const docRef = await addDoc(col, { ...orderData, createdAt: serverTimestamp() });
  return docRef.id;
}