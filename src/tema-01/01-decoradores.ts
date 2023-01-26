// Decorador de clase
function desarrollador(constructor: Function) {
    // Vamos a modificar lo que sea que vayamos a modificar
    constructor.prototype.isDeveloper = true
}

// Decorador de propiedad
function debugPropiedad(target: any, propertyKey: string) {
    // Cuando accedemos a una propiedad estática target = constructor
    // Cuando accedemos a una propiedad de clase target = clase
    console.log(`Nombre de la clase: ${
        typeof target === "function" ? target.name : target.constructor.name
    }`)
    console.log(`Nombre de la propiedad: ${propertyKey}`)
}

// Decorador de método
function mideTiempoEjecucion(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]) {
        const ahora = Date.now()
        
        console.log(`Midiendo tiempo de ejecución de ${propertyKey}`)
        // ejecutar el metodo original
        const resultado = metodoOriginal.apply(this, args)

        const luego = Date.now()
        console.log(`El método ${propertyKey} ha llevado ${luego - ahora}ms`)

        return resultado
    }
}

function logMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Se está aplicando el decorador sobre el método ${propertyKey}`)
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]) {
        console.log(`Llamando al método ${propertyKey}, con los parámetros ${JSON.stringify(args)}`)
        return metodoOriginal.apply(this, args)
    }
}
// Decorador de accessor (getter/setter)
function Enumerable(isEnum: boolean) { // Factoría de decoradores
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       descriptor.enumerable = isEnum
    }
}

// Decorador de parámetros
const logParameter = (target: any, propertyKey: string, parameterIndex: number) => {
    console.log(target[propertyKey])
    console.log(`Logueando el parámetro ${propertyKey} ${parameterIndex}`)
}

@desarrollador
class Alumno {
    // @debugPropiedad
    static nombreClase: string = "Clase Alumno"

    // @debugPropiedad
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }

    @mideTiempoEjecucion
        @logMetodo
            ordenaMiNombre(@logParameter orden: number, @logParameter otro?: boolean) {
                for (let i = 0; i < 1000000000; i++) {
                    let a = 0
                }
                return `${orden}. ${this.nombre}` // "12. Gorka"
            }
    
    @Enumerable(false)
    get nombreClaseYNombre() {
        return `${Alumno.nombreClase}: ${this.nombre}`
    }

    set nuevoNombre(nuevo: string) {
        this.nombre = nuevo
    }
}

interface AlumnoDev extends Alumno {
    isDeveloper: boolean
}

const nuevoAlumno = new Alumno("Gorka") as AlumnoDev

console.log("---------------------------")

// console.log(nuevoAlumno.nombre)
// console.log(nuevoAlumno.isDeveloper)

console.log("---------------------------")

console.log(nuevoAlumno.ordenaMiNombre(12))

console.log("---------------------------")

nuevoAlumno.nuevoNombre = "Julián"

console.log(nuevoAlumno.nombreClaseYNombre)

console.log("---------------------------")

// for...in // Objetos
// for...of // Array

for (let key in nuevoAlumno) {
    //@ts-ignore
    console.log(`key: ${key}, value: ${nuevoAlumno[key]}`)
}
