# Trabajo Practico Angular para Santex

Aplicacion frontend donde se demuestra los conocimientos de Angular

#### Consigna: 
* Crear un nuevo proyecto de Angular. 
    * ***(Opcional)*** - Utilizar ng add para añadir angular material.

* En el componente principal crear un arreglo que contenga nombres **(string)** y costos **(string)**, y utilizar un ngFor para mostrar una lista con los nombres y costos. 
    * ***(Opcional)*** - En vez de utilizar los tipos por defecto crear una Type custom.


* Crear un botón que nos permita ocultar o mostrar la lista utilizando un ngIf (Advertencia una etiqueta HTML no puede tener ngIf y ngFor van a tener que hacer un wraper al rededor de la lista para utilizar el ngFor) 
    *  ***(Opcional)*** - Que el botón sea de Angular material

## Tecnologias usadas

**Cliente**: Angular 15, Typescript.

### Pre-requisitos 📋

Para poder ejecutar bien este proyecto se necesita tener instalado la version de node LTS

```
Node v18.16.1. Se descarga en: https://nodejs.org/es
```
### Ejecutar localmente el servidor

Clonar el proyecto

```bash
  git clone https://github.com/FabrizioFerroni/ProyectoAngularSantex
```

Ir al directorio del proyecto

```bash
  cd ProyectoAngularSantex
```

Instalar dependencias

```bash
  npm install
```
Iniciar el servidor

```bash
  ng serve
```

Ir al navegador de preferencia y pegar la siguiente ruta  

```bash
  http://localhost:4200
```
## Mapa de la aplicación

Así se encuentra organizado el proyecto en cuestión.

```
📁 ProyectoAngularSantex/
├───📁 src/
│   ├───📁 app/
│   │   ├───📄 app-routing.module.ts
│   │   ├───📄 app.component.html
│   │   ├───📄 app.component.scss
│   │   ├───📄 app.component.ts
│   │   └───📄 app.module.ts
│   ├───📁 assets/
│   ├───📄 favicon.ico
│   ├───📄 index.html
│   ├───📄 main.ts
│   └───📄 styles.scss
├───📄 .editorconfig
├───📄 angular.json
├───📄 package-lock.json
├───📄 package.json
├───📄 tsconfig.app.json
├───📄 tsconfig.json
└───📄 tsconfig.spec.json
```
## Quien desarrollo este proyecto

**[Fabrizio Ferroni](https://www.github.com/FabrizioFerroni)**
