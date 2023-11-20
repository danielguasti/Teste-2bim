import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import lance from "../classes/lance";
import lanceService from "../services/lanceService";

class lanceController{

    constructor(){}

    async criarLance(req: Request, res: Response){
        const dados: Prisma.lanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.leilao !== ""){
            const novoleilao = await lanceService.criarLance(dados)
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

    async listLances(req: Request, res: Response){
        const usuarios = lanceService.listarLances();

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

export default new lanceController;