import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import leilaoService from "../services/leilaoService";

class leilaoController{

    constructor(){}

    async criarLeilao(req: Request, res: Response){
        const dados: Prisma.leilaoCreateInput = req.body;
        
        if(dados.dono !== "" && dados.lances !== ""){
            const novoleilao = await leilaoService.criarLeilao(dados)
            res.status(200).json({
                status: 'ok',
                novoleilao: novoleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const usuarios = leilaoService.listarLeiloes();

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

export default new leilaoController;