# Guía de Despliegue en Vercel y Ejecución Local
**Proyecto:** Presentación Comercial Phenix Collision  
**Directorio:** `c:\Users\ivang\Desktop\rudawebs\presentaciones\phenix-collision`

---

## 1. Ejecución Local en Entorno de Desarrollo

Para iniciar el servidor local y visualizar la presentación en una tablet, teléfono o navegador:

```bash
cd presentaciones/phenix-collision
npm install
npm run dev
```

El servidor local se iniciará usualmente en `http://localhost:5173/`.  
Puedes abrir esta dirección desde la misma red local en una tablet (por ejemplo `http://192.168.x.x:5173/`).

---

## 2. Comprobación y Compilación de Producción

Para compilar el proyecto y verificar que todo esté libre de errores tipados o de assets:

```bash
npm run build
```

Este comando genera la carpeta estática optimizada `dist/`.

Para previsualizar el bundle de producción localmente:

```bash
npm run preview
```

---

## 3. Preparación y Subida a GitHub

1. Inicializa el repositorio si aún no está inicializado:
   ```bash
   git init
   git add .
   git commit -m "feat: presentacion comercial interactiva phenix collision"
   ```

2. Crea un repositorio en tu cuenta de GitHub (por ejemplo `phenix-collision-presentation`).
3. Vincula y sube los cambios:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/phenix-collision-presentation.git
   git branch -M main
   git push -u origin main
   ```

---

## 4. Despliegue en Vercel (Paso a Paso)

1. Inicia sesión en tu cuenta de [Vercel](https://vercel.com).
2. Haz clic en **Add New...** -> **Project**.
3. Selecciona tu repositorio de GitHub `phenix-collision-presentation` o importa la carpeta `presentaciones/phenix-collision`.
4. En la configuración del proyecto:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./` (o `presentaciones/phenix-collision` si importas el repositorio raíz).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Haz clic en **Deploy**.
6. En menos de 1 minuto, Vercel proporcionará una URL pública segura `https://phenix-collision.vercel.app` para que el asesor pueda abrirla directamente en la tablet durante la reunión presencial.

---

## 5. Actualización de Textos, Precios y Nuevas Imágenes

Todo el contenido comercial está desacoplado y centralizado en:
- `src/config/presentation.ts`

Para cambiar el número de WhatsApp, el nombre del asesor, los textos o añadir nuevas fotografías de mockups:
1. Reemplaza o añade la imagen en `public/assets/`.
2. Actualiza la ruta o el texto en `src/config/presentation.ts`.
3. Haz un commit y push a GitHub: Vercel actualizará la presentación automáticamente.
