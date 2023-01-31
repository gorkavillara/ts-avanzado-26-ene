const isAuthenticated = () => Math.random() > 0.5

function authenticated(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
        if (!isAuthenticated()) {
            // Si no está autenticado ERROR
            throw new Error("Not authorized")
        }
        // Si está autenticado todo bien
        return originalMethod.apply(this, args)
    }
}

class MyDashboard {
    @authenticated
    render() {
        console.log("Rendering your dashboard")
    }
}

const myDashboard = new MyDashboard()
myDashboard.render()