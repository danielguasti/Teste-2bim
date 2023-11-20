import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class usuarioService {
    constructor(){

    }


async listarUsuarios(id?: number) {
    try{
        if(id){
            const usuario = await prisma.usuario.findUnique({
                where: {
                    id
                }
            });
            return usuario;
        }else{
            const usuarios = await prisma.usuario.findMany();
            return usuarios;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

async criarUsuario(usuario: Prisma.usuarioCreateInput){

    try{
        const newuser = await prisma.usuario.create({
            data: usuario
        });
        return newuser;
    }catch(error){
        console.log(error);
        return null;
    }

}

async atualizarUsuario(id: number, user: Prisma.usuarioUpdateInput){
    try{
        const updatedUser = await prisma.usuario.update({
            where: {
                id
            },
            data: user
        });

        return updatedUser;
    }catch(error){
        console.log(error);
        return null;
    }
}

async deletarUsuario(id: number){
    try{
        const deletedUser = await prisma.usuario.delete({
            where: {
                id
            }
        });

        return deletedUser;
    }catch(error){
        console.log(error);
        return null;
    }
}

}

export default new usuarioService();