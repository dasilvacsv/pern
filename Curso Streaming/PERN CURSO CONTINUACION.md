## NavBar continuacion
Para continuar lo primero es realizar npm install, luego empezar el server, instalar las bases de datos SQL con postgre y alterar la conexion a postgre

### Creando la interfaz para navegacion
Creamos la carpeta llamada navbar para agregar los componentes de nuestra barra de navegacion
Empiezo creando el componente y luego creando una nav que tendra en si los datos relacionados
Creo la navegacion las listas y luego import Link desde react router dom, creo una variable que almacenara un arreglo con la navegacion
![[Pasted image 20240317152835.png]]
Tengo un arreglo con mis rutas de navegacion
![[Pasted image 20240317154004.png]]
Realizo un map en mi arreglo para obtener una lista con todas las rutas
Almaceno todas mis rutas en un fragment y luego importo el componente de navbar para almacenar todas las rutas en ella
![[Pasted image 20240317154029.png]]

Trasladamos el arreglo de navigation a un componente de Js aislado y lo exportamos
![[Pasted image 20240317154220.png]]
para usar asi nuestro navbar
![[Pasted image 20240317154228.png]]
### Estilizando el navbar
Para que se separe cada componente uno del otro utilizo la className flex
![[Pasted image 20240317155645.png]]
y asi cada elemento estara separado uno del otro, y con el justify center centro mi Barra de Navegacion, aunque tambien puedo utilizar el justify between para darle otro diseno con los items a la derecha, y con los paddings thengo los margenes del eje x y el eje y, con gap puedo definir el espacio de separacion entre cada item 
Utilizando useLocation de reacrouterdom, importamos el uselocation como una variable, y nos permite tener un traceback de la ruta visitada en la aplicacion, esto se utilizara para anadir una condicional que aplique estilos al nav si coincide con la ruta
![[Pasted image 20240317160140.png]]
Entonces con esto tendria una navegacion donde si la ruta de la localizacion coincide con el path seleccionado, le de un fondo y un color distinto de texto
#### Rearranging content of dashboard
Creando un div Container para ajustar los elementos del ui
Utilizando un container para anadirle margenes y espaciados a los componentes
![[Pasted image 20240317162114.png]]
De esta manera tengo definido un container al que le puedo pasar clases a traves de props para modificar sus propiedades, 
![[Pasted image 20240317162138.png]]
y una navbar en donde tengo los componentes en un container y puedo modificar el componente a traves del classname
Puedo ajustar mis login y register page para que la altura de los rem no muestre la barra de navegacion, y le agrego un enlace a mi texto del principio y un diseno mas como logo
![[Pasted image 20240317163321.png]]
#### Rutas Protegidas
Rutas donde el usuario no puede entrar si no esta autenticado
Creando un componente que contenga la logica de autenticacion, el cual se llamara protectedRoute, la cual importo a mi app.jsx utilizando una ruta y pasando el componente como un elemento de la ruta, ahora para validar si esta autenticado un usuario creare la propiedad isallowed la cual sera un parametro que viene desde el AuthProvider
![[Pasted image 20240317181121.png]]
De esta forma, si el usuario no esta autenticado, nevagara hacia el logic, y si esta autenticado devolvera el elemento que se muestra
![[Pasted image 20240317181148.png]]
y la ruta queda autenticada a traves de un useAuth
Agregando rutas segun autenticacion y sin autenticacion
Mostrando Rutas de acuerdo a la condicion de autenticacion
![[Pasted image 20240317220021.png]]
En el arreglo especifico rutas privadas y publicas
![[Pasted image 20240317220607.png]]
De esta manera establezco, que si, el usuario esta autenticado, ejecutar un map en las rutas privadas donde se ejecuta una funcion que encuentra el path y el name, y en la lista cambiara el color que coincida con el path especificado, y generara un link al path, y en caso contrario, se mostraran las rutas publicas, con una condicional donde si coincide la ruta se personaliza el color, y un link a la ruta
Creando la ruta signout en el navbar
Para crear la ruta signout en el authcontext  se especifica la peticion con axios, y los set que se veran afectados para luego exportarse en el authprovider
![[Pasted image 20240317222411.png]]
![[Pasted image 20240317222452.png]]
Y luego se importa desde el useAuth el signout, y se asigna al onclick de un List, para agregar este boton de logout solamente cuando este autenticado se realiza un fragment donde se ralizara el mapeo de rutas privadas y cuando se termien se agrega un elemento mas 
### Tasks form
Enviando peticiones HTTP desde usuario autenticado y relacionadas al usuario del request
creo un nuevo componente para mi formulario copiando mi Input y convirtiendolo en un TextArea
![[Pasted image 20240317224906.png]]
agrego el elemento al index.js para poder importarlo directamente desde components ui
![[Pasted image 20240317224929.png]]
![[Pasted image 20240317224945.png]]
Importo mis componentes para crear un formulario, creo una card y los elemeentos basicos tales como el header, el form, el label y el input para el primer campo, luego un label, text area, y un boton par enviar la peticion, cierra la forma y termina la card, todo esto contenido dentro de un div que le dara las propiedades flexibles y justificacion para mantenerlo centrado
Para el funcionamiento, desde el useForm un register y handlesubmit, el cual a las propiedades de los input tomara la propiedad .json, y una proiedad onsubmit que llamara a handlesubmit y los datos los mostrara en consola
##### Enviando la peticion de task a la base de datos
Creamos una API con las rutas de tasks, mientras tengamos withCredentials  en true se enviara el token en el header manteniendo asi consistencia en las peticiones
![[Pasted image 20240317225631.png]]
Creo mi peticion http
![[Pasted image 20240317225639.png]]
y la importo y envio a traves del handle submit
![[Pasted image 20240317230133.png]]
Agregamos el navigate desde reactrouter dom para al crear una tarea redirigir hacia la lista de tareas
y un validacion de errores, donde cree un span con el error 


















