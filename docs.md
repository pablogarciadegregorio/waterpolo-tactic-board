## 🛠️ Optimización de la Interacción Táctica

Para garantizar que la pizarra táctica funcione de manera fluida, especialmente en dispositivos móviles y tablets, se han implementado reglas específicas de CSS mediante **Tailwind CSS** en los elementos interactivos (`.board`, `.ballCover`, `.player-component`).

---

### 1. `touch-action: none`
Esta propiedad es fundamental para permitir el **multitouch** (arrastre de varios jugadores simultáneamente) y una respuesta inmediata al tacto.

* **Problema original:** Por defecto, los navegadores móviles interceptan los gestos de arrastre para realizar acciones propias como el *scroll* de la página o el *pinch-to-zoom*. Esto bloquea o interrumpe los eventos de `drag` de librerías como Framer Motion.
* **Solución:** Al establecerlo en `none`, le indicamos al navegador que el elemento tiene el control total de los gestos táctiles.
* **Resultado:** Se eliminan los retrasos (*delays*) de respuesta y se permite que cada dedo en pantalla actúe como un puntero independiente, facilitando el movimiento simultáneo de fichas y balón.

### 2. `user-select: none`
Esta propiedad controla la capacidad del usuario para resaltar o seleccionar texto e imágenes en la interfaz.

* **Problema original:** Durante una explicación táctica rápida, los movimientos erráticos o las pulsaciones prolongadas pueden hacer que el navegador intente "seleccionar" la imagen del jugador o el texto del fondo, mostrando el típico resaltado azul o menús contextuales no deseados.
* **Solución:** Desactiva la capacidad de selección en todo el tablero.
* **Resultado:** La pizarra se comporta como una **aplicación nativa**. El cursor y el foco se mantienen centrados exclusivamente en la lógica de arrastre, evitando distracciones visuales y errores de interfaz.

---

### 🚀 Implementación con Tailwind CSS

Para mantener la consistencia dentro del flujo de trabajo de Tailwind, estas reglas se aplican mediante las siguientes utilidades:

| Propiedad CSS | Clase Tailwind | Uso recomendado |
| :--- | :--- | :--- |
| `touch-action: none` | `touch-none` | Contenedor principal y elementos *draggable*. |
| `user-select: none` | `select-none` | Tablero completo para evitar distracciones. |






## 🏗️ Optimización del Contenedor: Capas y Eventos de Puntero

Para permitir que el usuario interactúe con los elementos (jugadores y balón) sin interferencias, se ha ajustado la jerarquía del contenedor principal en `Board.js`.

### 1. Gestión de Capas con `pointer-events-none`
El proyecto utiliza capas invisibles (`ballBounds` y `playerBounds`) que sirven exclusivamente como referencias espaciales para limitar el movimiento (*constraints*) de los elementos.



* **El Problema:** Al ser capas de gran tamaño situadas sobre el tablero, podían "interceptar" el toque del usuario antes de que llegara al componente del jugador, bloqueando el inicio del arrastre (especialmente en interacciones multitáctiles).
* **La Solución:** Se ha aplicado la clase `pointer-events-none`.
* **El Resultado:** Esta propiedad hace que las capas de límites sean "transparentes" a los clics y toques, permitiendo que el evento de puntero atraviese la capa invisible y active directamente al jugador o balón situado detrás, sin perder la funcionalidad de restricción de movimiento.

### 2. Bloqueo de Gestos Nativos en el Tablero
El `motion.div` principal que actúa como tablero (`.board`) actúa como el marco de toda la aplicación.

* **Configuración:** Se han aplicado las clases `touch-none` y `select-none`.
* **Impacto:** Esto desactiva el comportamiento elástico de scroll de los navegadores móviles (especialmente en iOS/Safari) y evita el zoom accidental al manipular varios elementos rápidamente. El tablero se convierte en una zona de interacción pura.

---

### 📊 Tabla de Referencia de Clases

| Elemento | Clase Tailwind | Función Crítica |
| :--- | :--- | :--- |
| **Contenedor Board** | `touch-none` | Evita que el navegador mueva la página al arrastrar jugadores. |
| **Límites (Bounds)** | `pointer-events-none` | Permite que el toque "atraviese" la capa y llegue al jugador. |
| **Fichas y Balón** | `select-none` | Evita que se resalten las imágenes al mantener pulsado. |