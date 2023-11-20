import usuarioController from "../controllers/usuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/usuarios', usuarioController.listUsers)

UsuarioRouter.post('/usuario', usuarioController.createUser);

UsuarioRouter.put('/usuario', usuarioController.updateUser);

UsuarioRouter.delete('/usuario', usuarioController.deleteUser);

export default UsuarioRouter;