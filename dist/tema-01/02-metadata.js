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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// "design:type"
// "design:paramtypes"
// "design:returntype"
function metadataParameters(target, propertyKey, descriptor) {
    let designType = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(`design:type => ${designType.name}`);
    let paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
    for (let paramType of paramTypes) {
        console.log(`design:paramtype => ${paramType.name}`);
    }
    let returnType = Reflect.getMetadata("design:returntype", target, propertyKey);
    console.log(`design:returntype => ${returnType.name}`);
}
class ClaseConMetadata {
    print(id, name) {
        let str = id.toString + ". " + name;
        return str;
    }
}
__decorate([
    metadataParameters,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", String)
], ClaseConMetadata.prototype, "print", null);
