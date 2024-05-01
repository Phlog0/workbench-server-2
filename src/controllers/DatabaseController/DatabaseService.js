
import fs from 'fs';
import { db } from "../../db.js";
import { Op, where } from "sequelize"
import { v4 as uuidv4 } from 'uuid';
class DatabaseService {
    async updateTireChildrenCoordinats(tireId, shkafId) {
        try {

            const allShkafsChildren = await db.Shkaf.findAll({
                where: {
                    parentNode: tireId
                },
                order: [
                    ['addedToGroup', 'ASC']
                ]
            }) //array
            const currentTire = await db.MainNode.findOne({
                id: tireId
            })
            const allTires = await db.tireNode.findAll(
                { parentId: currentTire.parentId },
                {
                    order: [
                        'createdAt', 'ASC'
                    ]
                }
            )
            console.log(allShkafsChildren);
            for (let i = 0; i < allShkafsChildren.length; i++) {

                await db.Shkaf.update(
                    { position: { y: 0, x: 300 * (i) + 30 }, parentNode: tireId },
                    {
                        where: {
                            id: allShkafsChildren[i]['id']
                        }
                    }
                );
            }
            // for (let i = 1; i < allTires.length; i++) {

            //     // allTires[i].position.x = allTires[i - 1].position.x + allTires[i - 1].style.width + 325;
            //     const posX = allTires[i - 1].position.x + allTires[i - 1].style.width + 325;
            //     // console.log(allTires[i - 1].style.width + 325);
            //     await db.Tire.update(
            //         { position: { y: 100, x: posX } },
            //         {
            //             where: {
            //                 id: allTires[i]['id']
            //             }
            //         }
            //     )


            // }

        } catch (error) {
            console.log(error);
        }

    };


}

export default new DatabaseService()