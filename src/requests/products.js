import { apiJSON } from "../services/api";

// Foo all products - ф-я що забирає всі продукти

export async function getAllProducts() {
    return await apiJSON.get("/products")
} 