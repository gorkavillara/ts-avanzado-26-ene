declare function desarrollador(constructor: Function): void;
declare function debugPropiedad(target: any, propertyKey: string): void;
declare function mideTiempoEjecucion(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function logMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function Enumerable(isEnum: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare const logParameter: (target: any, propertyKey: string, parameterIndex: number) => void;
declare class Alumno {
    static nombreClase: string;
    nombre: string;
    constructor(n: string);
    ordenaMiNombre(orden: number, otro?: boolean): string;
    get nombreClaseYNombre(): string;
    set nuevoNombre(nuevo: string);
}
interface AlumnoDev extends Alumno {
    isDeveloper: boolean;
}
declare const nuevoAlumno: AlumnoDev;
