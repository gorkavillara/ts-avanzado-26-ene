"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Alumno_1;
// Decorador de clase
function desarrollador(constructor) {
    // Vamos a modificar lo que sea que vayamos a modificar
    constructor.prototype.isDeveloper = true;
}
// Decorador de propiedad
function debugPropiedad(target, propertyKey) {
    // Cuando accedemos a una propiedad estática target = constructor
    // Cuando accedemos a una propiedad de clase target = clase
    console.log(`Nombre de la clase: ${typeof target === "function" ? target.name : target.constructor.name}`);
    console.log(`Nombre de la propiedad: ${propertyKey}`);
}
// Decorador de método
function mideTiempoEjecucion(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const ahora = Date.now();
        console.log(`Midiendo tiempo de ejecución de ${propertyKey}`);
        // ejecutar el metodo original
        const resultado = metodoOriginal.apply(this, args);
        const luego = Date.now();
        console.log(`El método ${propertyKey} ha llevado ${luego - ahora}ms`);
        return resultado;
    };
}
function logMetodo(target, propertyKey, descriptor) {
    console.log(`Se está aplicando el decorador sobre el método ${propertyKey}`);
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Llamando al método ${propertyKey}, con los parámetros ${JSON.stringify(args)}`);
        return metodoOriginal.apply(this, args);
    };
}
// Decorador de accessor (getter/setter)
function Enumerable(isEnum) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = isEnum;
    };
}
// Decorador de parámetros
const logParameter = (target, propertyKey, parameterIndex) => {
    console.log(target[propertyKey]);
    console.log(`Logueando el parámetro ${propertyKey} ${parameterIndex}`);
};
let Alumno = Alumno_1 = class Alumno {
    constructor(n) {
        this.nombre = n;
    }
    ordenaMiNombre(orden, otro) {
        for (let i = 0; i < 1000000000; i++) {
            let a = 0;
        }
        return `${orden}. ${this.nombre}`; // "12. Gorka"
    }
    get nombreClaseYNombre() {
        return `${Alumno_1.nombreClase}: ${this.nombre}`;
    }
    set nuevoNombre(nuevo) {
        this.nombre = nuevo;
    }
};
// @debugPropiedad
Alumno.nombreClase = "Clase Alumno";
__decorate([
    mideTiempoEjecucion,
    logMetodo,
    __param(0, logParameter),
    __param(1, logParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], Alumno.prototype, "ordenaMiNombre", null);
__decorate([
    Enumerable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Alumno.prototype, "nombreClaseYNombre", null);
Alumno = Alumno_1 = __decorate([
    desarrollador,
    __metadata("design:paramtypes", [String])
], Alumno);
const nuevoAlumno = new Alumno("Gorka");
console.log("---------------------------");
// console.log(nuevoAlumno.nombre)
// console.log(nuevoAlumno.isDeveloper)
console.log("---------------------------");
console.log(nuevoAlumno.ordenaMiNombre(12));
console.log("---------------------------");
nuevoAlumno.nuevoNombre = "Julián";
console.log(nuevoAlumno.nombreClaseYNombre);
console.log("---------------------------");
// for...in // Objetos
// for...of // Array
for (let key in nuevoAlumno) {
    //@ts-ignore
    console.log(`key: ${key}, value: ${nuevoAlumno[key]}`);
}
