# Movie-Finder

This project was generated with [AngularJS](https://angularjs.org/) version v1.8.2.

## Development server

In VSC index.html "Open with Live Server.

## Descripcion

El objeto del proyecto es poner en prácticas los conocimientos adquiridos con el framework AngularJS en su versión v1.8.2. Pese a ser una tecnología ya en desuso, poco práctica y con graves problemas de seguridad en algunos entornos, actualmente hay empresas que aún la utilizan. Por ese motivo decidí adquirir conocimientos para comprender la estructura de esta herramienta.

La navegación entre componentes se realiza, mediante un enrutado(config.js). A su vez, la clase "active" en los botones del navBar se establecen dinámicamente al realizar el movimiento entre componentes invocando al método setActive().

El buscador consta de un input donde el usuario introduce el campo de texto que desea buscar y un botón para realizar la acción. La información procedente de la API se obtiene mediante promesas (service.js) para dar un mejor resultado de cara al usuario, empleando un log de carga cunado no hay información disponible para mostrar debido a que esta aún no ha llegado. Sí la búsqueda no obtiene resultados, se cargará un mensaje al usuario y se ocultarán los botones de paginación de la parte inferior. Sí la búsqueda ha tenido resultados se mostraran en forma de cards con la imagen correspondiente y en caso de que la información retornada no disponga de imagen se añade una "NO-IMAGE" por defecto. La barra de paginación permite al usuario moverse entre páginas, además de informarle en que página se encuentra y cuantas páginas hay.

La app esta creada de forma responsiva y con adaptación a dispositivos

La app consta de una barra de navegación en la parte superior con botones de acceso a las diferentes secciones que la componen. Y de un footer en la parte inferior solo informativo.

## Tecnologías

AngularJS 1.8.2

Bootstrap 5.0.1

animate.css 4.1.1

OMDb API


