import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class leilaoService {
    constructor(){

    }


async listarLeiloes(id?: number){
    try{
        if(id){
            const leilao = await prisma.leilao.findUnique({
                where: {
                    id
                }
            });
            return leilao;
        }else{
            const leiloes = await prisma.leilao.findMany();
            return leiloes;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarLeilao(leilao: Prisma.leilaoCreateInput){
    try{
        const novoLeilao = await prisma.leilao.create({
            data: leilao
        });
        return novoLeilao;
    }catch(error){
        console.log(error);
        return null;
    }
}

async atualizarLeilao(id: number, user: Prisma.leilaoUpdateInput){
    try{
        const atualizarLeilao = await prisma.leilao.update({
            where: {
                id
            },
            data: user
        });

        return atualizarLeilao;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarLeilo(id: number){
    try{
        const deletarLeilao = await prisma.leilao.delete({
            where: {
                id
            }
        });

        return deletarLeilao;
    }catch(error){
        console.log(error);
        return null;
    }
}

}

export default new leilaoService();