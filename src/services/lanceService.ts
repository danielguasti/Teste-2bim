import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class lanceService {
    constructor(){

    }


async listarLances(id?: number) {
    try{
        if(id){
            const lance = await prisma.lance.findUnique({
                where: {
                    id
                }
            });
            return lance;
        }else{
            const lances = await prisma.usuario.findMany();
            return lances;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarLance(lance: Prisma.lanceCreateInput){

    try{
        const novoLance = await prisma.lance.create({
            data: lance
        });
        return novoLance;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarLance(id: number, user: Prisma.lanceUpdateInput){
    try{
        const atualizarLance = await prisma.lance.update({
            where: {
                id
            },
            data: user
        });

        return atualizarLance;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarLance(id: number){
    try{
        const deletarLance = await prisma.lance.delete({
            where: {
                id
            }
        });

        return deletarLance ;
    }catch(error){
        console.log(error);
        return null;
    }
}
}

export default new lanceService();