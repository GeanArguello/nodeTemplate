import { Request, Response } from "express"
import { Users } from "../schemas";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    
    const { username, email, age, country } = req.body;

    try{
        if(!username || !email || !age || !country ){
            return res.status(400).json({
                message: 'Por favor completa los datos'
            });
        }

        const emailExist = await Users.findOne({
            where:{
                email: email
            }
        })

        if(emailExist){
            return res.status(400).json({message: "El email " + email + " ya existe, ingresa otro"})
        }

        const userCreated = await Users.create({
            userName: username,
            email: email,
            age: age,
            country: country,
        })

        res.status(200).json({
            message: "Usuario Creado",
            data: userCreated,
        })

    }catch(err:any){
        res.status(500).json({
            message: "Ocurrio un error al querer crear un nuevo usuario"
        });
    }
}
