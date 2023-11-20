import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import usuarioService from "../services/usuarioService";

class usuarioController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.usuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const novousuario = await usuarioService.criarUsuario(dados)
            res.status(200).json({
                status: 'ok',
                novousuario: novousuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const usuarios = usuarioService.listarUsuarios();

        res.status(200).json({
            status: 'ok',
            usuarios: usuarios
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new usuarioController;