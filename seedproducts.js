// seedproducts.js (ESM)
import admin from "firebase-admin";
import products from "./products.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccountPath = join(__dirname, "serviceAccountKey.json");
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seed() {
  try {
    const colRef = db.collection("products");
    const batch = db.batch();
    for (const p of products) {
      const docRef = colRef.doc();
      batch.set(docRef, p);
    }
    await batch.commit();
    console.log("Seed completado: productos insertados en la colección 'products'.");
    process.exit(0);
  } catch (err) {
    console.error("Error en seed:", err);
    process.exit(1);
  }
}

seed();
