# 🕸️ Spider-Man Love Journey

**Spider-Man Love Journey** es un juego interactivo desarrollado con Next.js, React y Tailwind CSS. A través de una historia romántica entre telarañas, el jugador elige entre dos versiones de Spider-Man para vivir un viaje emocional con decisiones y finales múltiples.

---

## ✨ Características

- Historia interactiva con decisiones ramificadas  
- Pasos condicionales basados en las elecciones del usuario  
- Confesiones amorosas y finales alternativos  
- Interfaz responsiva con React y Tailwind CSS  
- Código modular y fácil de extender con nuevos pasos narrativos  
- Soporte para empaquetado como APK Android usando Capacitor

---

## 🚀 Comenzar

### 📦 Requisitos

- Tener **Node.js** y **npm** instalados  
- (Opcional) Editor de código como **VSCode**

### 📥 Instalación

1. Clona este repositorio o descomprime el archivo del proyecto.  
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en [http://localhost:8000](http://localhost:8000) para jugar.

---

## 🛠️ Estructura del Proyecto

```
src/
├── components/
│   ├── GameModel.tsx     # Lógica del juego (hooks)
│   └── GameView.tsx      # Interfaz del juego
├── app/
│   └── page.tsx          # Punto de entrada de la app (Next.js)
public/
├── images/               # Recursos estáticos como imágenes

ANDROID_BUILD_INSTRUCTIONS.md  # Guía para crear APK Android
```

---

## 📱 Construcción para Android

Para empaquetar este juego web como una aplicación Android (APK), sigue las instrucciones en el archivo `ANDROID_BUILD_INSTRUCTIONS.md`. El proyecto usa **Capacitor** para encapsular el juego en un contenedor nativo Android.

---

## 🏗️ Compilar para Producción

```bash
npm run build
npm run start
```

---

## 🤝 Contribuciones

¡Eres bienvenido a enviar pull requests para agregar nuevos caminos en la historia, mejorar la UI o corregir errores! Este proyecto está pensado para evolucionar de forma creativa.

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

---

## ❤️ Disfruta del viaje

Gracias por jugar **Spider-Man Love Journey**.  
Elige con el corazón… y que el amor te atrape como una telaraña.