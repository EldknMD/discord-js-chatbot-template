# discord-js-chatbot-template

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](/LICENSE)
[![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat)](https://github.com/EldknMD/discord-js-chatbot-template/archive/master.zip) 

*Disponible en inglés / avaliable in english [here.](/README.md)*


```utf-8
Soy hispano hablante, así que no es una traducción de google.

Un abrazo.
```
#
Esta es una plantilla simple para un bot de chat de texto en Discord
Usando esta plantilla, puedes montar tu propio bot de discord.

## Esta guía usará lenguaje simple y no especializado. Va dirigida a usuarios no tan experimentados en programación.

Todos los temas importantes, pero no obligatorios de usar, serán explicados en la [wiki](https://github.com/EldknMD/discord-js-chatbot-template/wiki) en el futuro.

*Nota personal: Sugiero que la leas y entiendas lo que haces para mejorar tu código a futuro.*

Sigue este instructivo para una instalación rápida.

# Guía de inicio rápido

Para empezar, necesitarás:

- [ ] Una [cuenta de desarrollador en Discord](https://discord.com/developers/applications) *(Actualmente sólo disponible en inglés)*: Puedes usar tu cuenta "normal" de Discord para ingresar. Si no tienes cuenta, puedes [crear una gratis](https://discord.com/).

- [ ] Una computadora con acceso estable a internet. *Nota: esta guía esta basada en Windows. No sabría decirte si el proceso es el mismo en otros sistemas operativos.*

- [ ] Entendimiento básico del idioma inglés (para entender las funciones de Javascript, que en su mayoría son palabras inglesas).
- [ ] Un editor de texto instalado en tu dispositivo. Bloc de notas de Windows es suficiente, pero se hará más fácil si usas uno con marcado y que marque lineas y número de caracteres. [Atom](https://atom.io/) es un editor ligero y bastante bueno para empezar. Yo, personalmente, uso [Visual Studio Code](https://code.visualstudio.com/). Ambos son gratuitos. Hay muchos además de esos, pero no deberías preocuparte tanto de esto al inicio.

- [ ] Un programa para descomprimir archivos (cómo Winrar o Winzip)

- [ ] [Librería Node.js](https://nodejs.org/en/download/current/) *(sitio en inglés)* instalada en tu pc. Puedes ver que versión necesitas (de 32 o 64 bits) buscando `información del sistema` en el buscador de tu equipo. Captura del cuadro que aparece abajo. Una vez descargues la versión adecuada, instálala como cualquier programa con instalador.

![system information panel](https://i.ibb.co/QQqr1TM/system-info-panel.png)

# 1er paso: Registra tu bot en tu cuenta de desarrollador de Discord

Paso previo importante. Debes acceder al portal de desarrollador de Discord e ingresar con tu cuenta.

Esta es la vista que tendrás cuando lo hagas:

![devportalmainview](https://i.ibb.co/2ScsQND/discorddev.png)

El siguiente paso es clickear el botón azul a un costado de tu foto de perfil: `New Application`.

Este cuadro se abrirá, preguntando por el nombre de tu nueva app. Este no es el nombre que tendrá tu bot, es el que tendrá en tu lista de aplicaciones. *Siempre usa nombres cortos y explicativos para optimizar tu trabajo**.

![newapp](https://i.ibb.co/KWzsGHb/new-app.png)

Puedes poner una imágen a tu app, para hacerla más reconocible (tampoco repercutirá en la foto de perfil de tu futuro bot) y una descripción de la misma. **Ninguna de estas es obligatoria**.
Los signos de interrogación cubren el ID del cliente de mi app. Este es un número largo, que necesitarás luego para añadir el bot a tu servidor.
Para proceder a creat el usuario "bot" propiamente tal, clickea en la pestaña `Bot` que se encuentra al lado izquierdo de tu pantalla.

![clientID](https://i.ibb.co/NV5y7KS/client-main-view.png)

Aquí verás un botón azul que dice `Add bot`. Personalmente, te recomiendo echar un vistazo a la documentación de los usuarios bot en el enlace `Learn more about bot users`.

![bottab](https://i.ibb.co/dGFDN6r/bot-page.png)

Cuando hagas click, aparecerá otro recuadro advirtiendo que **los usuarios bot no pueden ser destruidos** en el API de discord. Confirma y continúa.

Ahora tu usuario bot está listo. Puedes agregar una foto de perfil para tu bot, cambiar su nombre y ver su token ("credencial"). Este token el como una "llave" que usará tu código para entrar en el usuario bot que acabas de crear. 
<hr>

```utf-8
Es extremadamente importante que mantengas este número en secreto. Cualquiera que tenga acceso a él, puede usar la identidad del usuario bot que creaste y poner su propio código en el.
```

<hr>

Serás responsable de todo lo que se haga con tu usuario bot.

![newbot](https://i.ibb.co/sWFcVQS/bot-mainpage.png)

Copia el token usando el botón azul `Copy` y ponla en un lugar seguro. **Si sospechas que alguien podría estar usando tu token, regenéralo inmediatamente con el botón `Regenerate`. Esto inutilizará el token anterior y te proveerá de uno nuevo.

<hr>

*Opcional*: Yo siempre apago la opción `Public bot`. Principalmente porque nunca he hecho un bot diseñado para uso masivo. Al desactivar esta opción, sólo tu podrás añadir el usuario bot a un servidor. Ciertas funciones pueden fallar si funcionan en más de un servidor sin estar diseñadas para ello.

![publicbot](https://i.ibb.co/vw1PYkf/public-bot.png)
<hr>

**Importante**: Ahora necesitamos el `permission integer`. En programación, `integer` hace referencia a un valor numérico. En este sentido, 5 no es lo mismo que "5" o "cinco".

Este número contiene en la información de los permisos de servidor que solicita el bot para funcionar. Mientras seleccionas los permisos, el número de abajo irá cambiando. Los permisos que marqué deberían ser suficientes para un chatbot basado principalmente en texto. Puedes cambiar los permisos después dentro de tu server, así que no te preocupes si quieres agregar más funciones después.

Pon los permisos que quieras (o sólo copia los míos) y luego guarda el número que aparece abajo.

![permissions](https://i.ibb.co/HVr8p5x/permissionsdone.png)

Acabas de terminar este paso. Guarda la información que obtuviste en este paso en un lugar seguro y pasa a la siguiente parte.

# 2do paso: Añadir tu bot a tu servidor

```utf-8
Oye! Vas bien... excelente, si me preguntas.
```

Ahora, te recomiento encarecidamente que pruebes y desarrolles tu bot en un "test field" o campo de pruebas, un servidor dque sólo tenga ese propósito: un servidor donde estés sólo tu y unos pocos colaboradores de confianza, si así lo quieres.

 Programar puede ser un constante ensayo y error a veces. Añadir nuevas funciones o características puede ser un proceso con tendencia a bugs y glithes. Así que, para reducir riesgo  debes tomar este tipo de medidas.

 ```utf-8
Cosas que me han pasado a mi:
>Spam de mensajes
>Respuestas de texto corruptas e inacabables debido a un bucle...
>Eliminación de canales
Entre otros...
```

  Si no estás seguro de querer usar un servidor existente para pruebas, siempre puedes crear uno nuevo.
<hr>

```utf-8
Alguien que nunca haya cometido un error, jamás ha intentando algo nuevo...
Albert Einstein
```

<hr>

Necesitarás esto ahora:

```
https://discordapp.com/oauth2/authorize?&client_id=(AQUÍ VA TU ID DE CLIENTE SIN LOS PARÉNTESIS)&permissions=(AQUÍ VA EL NÚMERO DE LOS PERMISOS SIN LOS PARÉNTESIS)&scope=bot`
```

Debes reemplazar el ID del cliente y el número de los permisos en su respectivo lugar.
>*(Hay una copia de este enlace en [config.json](/config.JSON), en la etiqueta dbotAuth 😉)*

Una vez reemplaces los valore, ingresa el enlace en tu navegador.

La pantalla de invitación será como esta. El recuadro gris abre una lista de todos los servidores donde estás autorizado a agregar usuarios bot (es necesario el permiso *Manage server/Administrar servidor* o admin). Cuando hayas seleccionado el server deseado, procede a clickear la caja azul de `continuar`. Seguido aparecerá una lista de los permisos que el bot te solicita (o sea, los que seleccionaste antes en el `persmission integer`). Autoriza estos permisos y llena el captcha siguiente. Este no debería ser un problema [a menos que no seas humano... en ese caso, me temo que no puedo ayudarte.](https://pastebin.com/raw/1FjDcSkW)

![invitation](https://i.ibb.co/09m3q8p/invitation.png)

*¡Tadaa!* Tu usuario bot es ahora un miembro oficial de tu servidor. Debería aparecer en la columna derecha como un usuario desconectado (con la linda etiqueta `BOT` sobre si). Está desconectado porque es un usuario bot "vacío". La buena noticia es que ahora si estamos listos para programarlo. En este caso, Github Example es nuestro nuevo bot.

![discord server](https://i.ibb.co/pfHYdT7/discord-open.png)

# 3er paso: Clona este repositorio en tu equipo y ubica tus variables

Tienes dos opciones para eso:

- *Opción 1*: Descarga este repositorio directamente desde GitHub. Para esto, clickea sobre el botón `clone or download`, después descargar como zip (O con el cliente Git, si lo tienes instalado en sistema). Ese mismo enlace está aquí:

[![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat)](https://github.com/EldknMD/discord-js-chatbot-template/archive/master.zip) 

Te recomiendo esta opción si no se te hace familiar la siguiente.

- *Opción 2*: Usa el comando `git clone` en tu consola de comandos para clonar este repositorio en tu sistema.

Una vez obtengas el archivo .zip, debes extraerlo. Si lo deseas puedes cambiar el nombre de la carpeta que extraigas.

Ahora abre el directorio principal (dentro de la carpeta que acabas de descomprimir). Debería verse algo así:

- commands
  - embed.js
  - hello.js
- .gitignore
- bot.js
- config.json
- LICENSE
- package-lock.json
- package.json
- README.md
- READMESPA.md

#### Reemplaza las variables predeterminadas con las de tu usuario bot

Para poner a funcionar tu bot, sólo debes reemplazar el token en `config.json`, pero quizá quieres sabes que cosas son personalizables en el código que descargaste:

1. En `config.json`:

   -*Opcional* **El prefijo de tu bot**: Un prefijo es como una advertencia para que el bot comience a buscar una instrucción. Es cómo decir "Escucha el siguiente mensaje". Puse como prefijo default `>`. Puedes cambiarlo a lo que tú quieras, incluso palabras o números. En mi opinión, mientras más simple, mejor: un sólo carácter, fácil de memorizar y teclear, pero no lo suficientemente fácil de teclear como para ponerlo accidentalmente (`.` y `,` son malas opciones por su posición en un teclado QWERTY y su uso común en el español y lenguas romances en general, además de en el inglés).

   -**El token de tu usuario bot**: reemplaza el valor predeterminado con el token de tu usuario bot, que obtuviste en el primer paso. Esto es de suma importancia para que tu programa conecte con el usuario que pusiste en tu servidor.

   -*Opcional* **Tu ID de usuario de Discord**: Para obtener códigos de error más fácilmente, pon tu ID de usuario (humano) para que los errores que se generen se envíen como mensaje directo a ti. Puedes obtener este ID colocando a Discord en modo desarrollador (configuración > avanzada), haciendo click en ti y luego seleccionando `copiar ID`.

   - *Opcional* **Completa el enlace de invitación**: Incluso si planeas colocar al bot en un servidor y jamás moverlo, siempre es una buena idea tener una copia del link de invitación, en caso que expulses a tu bot del servidor o cualquier problema derivado.

2. En `bot.js`:

   - *Opcional* **Línea 14**: Aquí está la linea que dirá tu bot cuando alguien le envíe un mensaje directo a su perfil. Usualmente es algo como "No puedo oir ni obedecer mensajes directos, así que no los envíes", cómo el mensaje que escribí yo, pero puedes ponerle lo que quieras.

   - **Línea 18**: Aquí se determina el canal "de bienvenida". Coloca el ID del canal que desees dentro del servidor donde está el bot. Una vez más, este ID lo puedes obtener haciendo click derecho sobre el canal deseado y después `copiar ID`. Pon este número entre las cremillas donde está la letra X.

   - *Opcional* **Líneas 19 a 25**: Personaliza el mensaje `embed` (en español significa "empotrado", pero no se explica bien) que recibe a los nuevos miembros del servidor. Un mensaje `embed` en Discord.js es un mensaje compuesto, que posee título, descipción, imágenes, thumnbnail, enlaces, etc. Hay comentarios *(En inglés)* en el código que explican la función de cada una de las partes. Planeo agregar la explicación en español en la [wiki](https://github.com/EldknMD/discord-js-chatbot-template/wiki), pero en internet está lleno de ejemplos.

   - *Opcional* **Líneas 39 a 52**: Hay tres reacciones (emojis) accionadas por triggers (palabras especiales) predeterminadas. Los trigger son: `hello`, `good bye` y [`on a mote of dust, suspended in a sunbeam`](https://www.youtube.com/watch?v=GO5FwsblpT8). Las reacciones son emojis [unicode](https://unicode.org/emoji/charts/full-emoji-list.html) *(Página en inglés, aunque es autoexplicativa)*. Estas reacciones están ubicadas una linea abajo de la expresión `message.content`. Sólo se puede usar emojis unicode por la forma en la que está programado ahora. Haré una página de la [wiki](https://github.com/EldknMD/discord-js-chatbot-template/wiki) dedicada a reacciones en el futuro.

   - *Opcional pero mi favorita* **Líneas a 54 a 59 y línea 65**: `const botStateArray` contiene "actividades" para tu bot. Aparecen en Discord como "Jugando a (texto aquí)" (al igual que cuando un humano usa un juego o escucha música con Discord abierto). Edita el texto entre las comillas aéreas y este será mostrado como uno de los estados del usuario bot. Puedes añadir más estados o quitar algunos de los que ya están, preocupándote de queden separados por comas entre sí. Si quitas la constante completa (de ahí `const`), las actividades ("estados" o como quieras llamarles) desaparecerán y el bot no mostrará nada bajo su nombre.
   En la línea 65 está el cooldown, es decir, el tiempo entre cada cambio de estado, en milisegundos ~~1000 milisegundos = 1 segundo~~.

Eso es todo lo que podrías "personalizar".
Ahora, debo confesar que te he mentido un poco acerca del código. Verás...

## ¡Todo es personalizable!

No literalmente, pero en su justa medida es como pintar o escribir:

> `No hay sólo una forma de hacer funcionar las cosas`

Este programa usa sólo una librería, [Discord.js](https://discord.js.org/#/), que permite la interacción con el API de Discord usando mi lenguaje de programación favorito `Javascript`, proveyendo también varias funciones prediseñadas, que hacen más fácil el codificar lo que quieres. No estoy ni cerca de usar todas las funcionalidades de esta librería más las de Javascript vanilla.

La mejor forma de aprender este tipo de cosas ~~así como muchas otras cosas en la vida~~ es intentarlo, fallar, intentar otra vez, volver a fallar y repetir. Intentaré poner más ejemplos de comandos y posibles usos en este repositorio. Una vez más, internet tiene montones de ellos, en caso que quieras buscarlo por tu cuenta. Te insto a que lo intentes, falles y aprendas algo nuevo. Si por cualquier eventualidad, tienes algún problema con esto, trataré de ayudarte, ya sea aquí en GitHub o en mi Discord `EldknMD#4471`, tan pronto sea posible.

Y ahora...

# 4to paso y final: Instala las dependencias del bot y... `RUN`

(Música electrónica alocada)

Felicitaciones por llegar hasta aquí. Casi estás listo.

Tienes todo lo necesario ya.

1. Abre el directorio principal de tu bot (donde está `bot.js`).

   ![main directory](https://i.ibb.co/d5ZpfjZ/before-install.png)

2. Haz click derecho en el fondo de la carpeta (sin selecccionar ningún archivo) mientras mantienes presionada la tecla control y shift. Esto añadirá la opción `Abrir la ventana de PowerShell aquí` al menú contextual. Selecciona esta opción.

3. Aparecerá una pantalla azul grande. Tranquilo, este "pantallazo azul" es lo que buscabamos.

   [powershell](https://i.ibb.co/02D588Q/powershell.png)

   Cómo podrás notar, la consola que abriste está funcionando en la carpeta de tu bot.

   Cómo tienes instalado [Node.js](https://nodejs.org/en/download/current/) en tu equipo, el siguiente paso es ejecutar lo siguiente.

   ```node
   npm install
   ```

   ~~presiona la tecla enter para ejecutar~~

   Sólo por si no sabías antes, `npm` significa **N**ode **P**ackage **M**anager, o sea, Administrador de paquetes de Node. Está incluido dentro de Node y te ayudará a instalar código de terceros en tus proyectos, añadiendo más funciones prediseñadas y simplificando asi aún más el programar.

   Enviando ese comando al PowerShell, le ordenas a la consola buscar `npm` y, al encontrarlo, ejecutar `install`. La función `install` de npm instala todas las depencencias (software de terceros) y subdependencias que estén especificadas en los archivos `package.json` y `package-lock.json`, respectivamente.

   Normalmente, estos archivos tienes que hacerlos tú, mediante el comando `npm init`, pero te tengo cubierto esta vez.

4. **Es hora...**: Run...

~~Prometo que es la última vez que hago ese mal chiste~~

```node
node .
```

`node bot.js` funcionaría también, pero 

```utf-8
. = el archivo principal en el directorio
```

 Este ya está definido en `package.json` por tu héroe anónimo.

Deberías ver esto en PowerShell:

![alive](https://i.ibb.co/HFzPKvy/It-s-alive.png)

Arriba vemos los `console.log()` de las primeras lineas de `bot.js`. La aparición de las siete líneas suele indicar que todo salió bien.

¡Sorpresa! Nuestro nuevo "amigo" está conectado ~~A diferencia de mi, prefiero que no me molesten~~.

![botonline](https://i.ibb.co/6JsXNSy/online-bot.png)

Para asegurarnos, veamos las funciones en acción:

- [x] Cambia su actividad cada 10 segundos

- [x] Reacciona a ciertas palabras

    ![reactions](https://i.ibb.co/vPCdv4w/reacts.png)

- [x] Responde a los comandos: dos al momento de escribir esto. Mi prejifo es `-`.

    ![commands](https://i.ibb.co/X5XnVBd/comamnds.png)

- [x] Alegremente da la bienvenidas a los miembros nuevos. También da la bienvenida en la consola de comandos ~~pero no es tan bonito~~.

    ![welcome](https://i.ibb.co/Tr33X03/welcome.png)

# Eso es todo, camarada

Tu bot ahora funcionará hasta el fin de los tiempos...

 ...A menos que cierres PowerShell o apagues tu PC.

  Sin embargo, ya pasaste la parte más "compleja".

```utf-8
  Quien lo diría, parece que tienes talento en esto...
```

El siguiente paso solucionará esto. Proximamente: el hosting de tu bot ~~especialmente aquel que es gratis para ti~~.

Estoy casi seguro que entendiste casi todo lo que expuse en este pequeño tutorial. 

```
Tienes cara de ser un humano bastante inteligente...
```

No dudes en contactarme aquí o a mi usuario `humano` en Discord **EldknMD#4471**.

Hice esta guía pensando en lo que a mi me habría gustado encontrar cuando empecé a programar hace un tiempo atrás. 

Mi primeros programas fueron bots de chat de Discord, así que es como mi habilidad "Main". Aunque me queda mucho por aprender, de cualquier forma.

Intentaré darme el tiempo de añadir más contenido a este repositorio en el futuro.

¡Feliz programación! 🤓
