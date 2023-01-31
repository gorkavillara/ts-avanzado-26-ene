import { ClientController } from "./controllers/clientController";
import { Client } from "./models/client";
import { ClientView } from "./views/clientView";

const myClient = new Client({ name: "Pablo" })
const myView = new ClientView(myClient)
const myController = new ClientController(myClient, myView)

myController.updateModel({ name: "Roman" })