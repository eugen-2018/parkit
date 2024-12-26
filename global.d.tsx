// global.d.ts
declare global {
    interface Global {
        [key: string]: any; // Permite accesul dinamic la orice proprietate
    }
}

// Asigură-te că fișierul este inclus în tsconfig.json
export {};