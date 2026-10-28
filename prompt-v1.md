Paso 2. Construir el prompt por bloques
Rol: Actúa como desarrollador/a frontend que crea recursos accesibles para alumnado de 2.º DAW.

Tarea: Construye un juego web de preguntas llamado Juego DAW.

Contexto: Se ejecutará localmente al abrir index.html. El público es el alumno.
Las preguntas son: Pregunta 1. ¿Qué lenguaje se utiliza para definir la estructura de una página web?
- A) CSS
- B) HTML
- C) JavaScript
- D) SQL
 Respuesta correcta: B
Pregunta 2. ¿Qué lenguaje se utiliza para cambiar los colores y el diseño de una página web?
- A) PHP
- B) Python
- C) CSS
- D) SQL
Respuesta correcta: C
Pregunta 3. ¿Qué lenguaje permite añadir interactividad a una página web?
- A) JavaScript
- B) HTML
- C) CSS
- D) XML
Respuesta correcta: A

Pregunta 4. ¿Qué significa HTTP?
- A) HighText Transfer Program
- B) HyperText Transfer Protocol
- C) HyperTool Text Process
- D) Home Transfer Text Protocol
Respuesta correcta: B) HyperText Transfer Protocol

Pregunta 5. ¿Qué etiqueta HTML se utiliza para crear un enlace?
- A) <img>
- B) <p>
- C) <div>
- D) <a>
Respuesta correcta: D

Pregunta 6. ¿Qué método HTTP se utiliza habitualmente para solicitar datos de un servidor?
- A) SEND
- B) PUSH
- C) GET
- D) LOAD
Respuesta correcta: C.

Requisitos funcionales:
- Muestra una pregunta cada vez con cuatro respuestas.
- Indica si la respuesta es correcta y actualiza la puntuación.
- Al terminar, muestra la puntuación y un botón para reiniciar.

Requisitos de accesibilidad y calidad:
- Usa elementos HTML semánticos, etiquetas visibles y foco de teclado.
- No uses dependencias, imágenes remotas ni datos personales.
- Separa HTML, CSS y JavaScript.

Formato de salida:
1. Muestra primero el árbol de archivos.
2. Devuelve el contenido completo de index.html, styles.css y app.js en bloques separados.
3. Explica cómo probarlo localmente y enumera tres pruebas manuales.

Restricciones:
- No inventes características fuera de esta lista.
- No uses alert() para toda la interacción.

Paso 3. Revisión del prompt antes de ejecutarlo
¿Se puede saber cuándo el juego está terminado? si, se puede saber cuando termina.
¿Se especifica dónde debe vivir cada parte del código? si. El codigo se divide en 3 archivos.
¿Qué salida será posible comprobar en el navegador? Las preguntas, las respuestas, la puntuación final y el reinicio del juego.
¿Qué requisito impediría que el resultado dependiera de un servicio externo? Que funcione localmente, sin Internet ni dependencias externas.