import "reflect-metadata"

// "design:type"
// "design:paramtypes"
// "design:returntype"
function metadataParameters(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let designType = Reflect.getMetadata("design:type", target, propertyKey)
    console.log(`design:type => ${designType.name}`)
    
    let paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey)
    for (let paramType of paramTypes) {
        console.log(`design:paramtype => ${paramType.name}`)
    }

    let returnType = Reflect.getMetadata("design:returntype", target, propertyKey)
    console.log(`design:returntype => ${returnType.name}`)
}

class ClaseConMetadata {
    @metadataParameters
    print(id: number, name: string): string {
        let str = id.toString + ". " + name
        return str
    }
}