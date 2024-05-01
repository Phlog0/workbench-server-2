
import fs from 'fs';
import { db } from "../../db.js";
import { Op } from "sequelize"
import { v4 as uuidv4 } from 'uuid';
import DatabaseService from './DatabaseService.js';




class DatabaseController {


    //====================================== PROJECT ======================================

    async findOrCreateAndGetProject(req, res) {
        try {
            const { projectId, tCount } = req.query;
            console.log(1111111111111111111111111111111)
            console.log(projectId, tCount)
            console.log(111111111111111111111111)
            if (!projectId || !tCount) {
                res.status(400).json({ masseage: 'нет требуемых параметров' })
                return
            }
            const project = await db.Project.findByPk(projectId)
            if (project === null) {
                const newProject = await db.Project.create({
                    id: projectId,
                    info: 'info',
                    name: 'name',
                })
                const newMainNodeId = uuidv4();

                const newMainNode = await db.MainNode.create({
                    // id: req.body.mainNodeId, 🔮🔮🔮🔮🔮🔮🔮
                    id: newMainNodeId,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                    projectId: newProject.id,
                    position: { x: 0, y: 0 },
                    totalVoltageForAll: 10,


                })

                let newTires = [];

                for (let i = 0; i < tCount; i++) {
                    const newTireId = uuidv4();
                    newTires.push({
                        // id: req.body.tireIds[i], 🔮🔮🔮🔮🔮🔮🔮
                        id: newTireId,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                        position: { x: 675 * i, y: 100 },
                        parentNode: newMainNode.id,
                        createdAt: `${Date.now() + i}`,
                        style: { width: 360, height: 30 }
                    })
                }



                const fasteners = []
                for (let i = 0; i < newTires.length; i++) {
                    const tireWidth = newTires[i].style.width;
                    let j = 1
                    while (tireWidth / (176 * j) > 1.2) {
                        console.log(newTires[i].id);
                        fasteners.push({
                            id: uuidv4(),
                            parentNode: newTires[i].id,
                            type: "FastenerNodeType",
                            style: { width: 10, height: 10 },
                            position: { x: 176 * (j), y: 0 },
                            projectId: newProject.id,
                            createdAt: `${Date.now() + i}`,

                        })
                        j++;
                    }
                }


                const result = await db.Tire.bulkCreate(newTires);
                const fastRes = await db.Fastener.bulkCreate(fasteners)
            }
            const currentProject = await db.Project.findByPk(projectId)
            const currentMainNode = await db.MainNode.findOne({
                where: {
                    projectId: currentProject.id
                }
            })
            const currentTires = await db.Tire.findAll({
                where: {
                    parentNode: currentMainNode.id
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            const currentFasteners = await db.Fastener.findAll({
                where: {
                    projectId: currentProject.id
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })


            const currentSfkafs = await db.Shkaf.findAll({
                where: {

                    projectId: currentProject.id
                }
            })

            const currentStencils = await db.Stencil.findAll({
                where: {
                    projectId: currentProject.id
                }
            })
            const currentEdges = await db.Edge.findAll({

                where: {

                    projectId: currentProject.id
                }
            })

            // const finalShkafs = [...currentSfkafs].sort((a, b) => a.indexInGroup - b.indexInGroup)

            const data = {
                nodes: [currentMainNode, ...currentTires, ...currentFasteners, ...currentSfkafs, ...currentStencils],
                edges: [...currentEdges]
            }


            res.json(data)
        } catch (error) {
            res.status(400).json({ message: `${error}` })
        }
    }



    async createProject(req, res) {
        try {

            const { id } = req.params;
            const { projectName, voltage, tireCount, info } = req.body
            const newProjectId = uuidv4();
            const newProject = await db.Project.create({
                // id: req.params.projectId, 🔮🔮🔮🔮🔮🔮🔮
                id,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                name: projectName,
                info,
            })


            const newMainNodeId = uuidv4();

            const newMainNode = await db.MainNode.create({
                // id: req.body.mainNodeId, 🔮🔮🔮🔮🔮🔮🔮
                id: newMainNodeId,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                projectId: newProject.id,
                position: { x: 0, y: 0 },
                totalVoltageForAll: voltage,


            })

            let newTires = [];

            for (let i = 0; i < tireCount; i++) {
                const newTireId = uuidv4();
                newTires.push({
                    // id: req.body.tireIds[i], 🔮🔮🔮🔮🔮🔮🔮
                    id: newTireId,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                    position: { x: 675 * i, y: 100 },
                    parentNode: newMainNode.id,
                    createdAt: `${Date.now() + i}`,
                    style: { width: 360, height: 30 }
                })
            }



            const fasteners = []
            for (let i = 0; i < newTires.length; i++) {
                const tireWidth = newTires[i].style.width;
                let j = 1
                while (tireWidth / (176 * j) > 1.2) {
                    console.log(newTires[i].id);
                    fasteners.push({
                        id: uuidv4(),
                        parentNode: newTires[i].id,
                        type: "FastenerNodeType",
                        style: { width: 10, height: 10 },
                        position: { x: 176 * (j), y: 0 },
                        projectId: newProject.id,
                        createdAt: `${Date.now() + i}`,

                    })
                    j++;
                }
            }


            const result = await db.Tire.bulkCreate(newTires);
            const fastRes = await db.Fastener.bulkCreate(fasteners)


            res.json(`${newProject.id}`)

        } catch (error) {
            res.json(error)
        }

    };
    async importProject(req, res) {
        try {

            const { projectId } = req.params;
            const { newItems } = req.body
            await db.MainNode.destroy({
                where: {
                    projectId
                }
            })
            const shkafDel = await db.Shkaf.destroy({
                where: {
                    projectId
                }
            })
            await db.Stencil.destroy({
                where: {
                    projectId
                }
            })
            // const edgeDel = await db.Edge.findAll({
            //     where: {
            //         projectId
            //     }
            // })
            const currentEdges = await db.Edge.findAll({

                where: {

                    projectId: projectId
                }
            })

            console.log(111111111111111111111111111111111);
            console.log(shkafDel, currentEdges, projectId);

            const newMainNode = newItems.nodes.find(item => item.type === 'MainSchemeType')
            console.log(newMainNode);
            await db.MainNode.create({ ...newMainNode })

            // await db.MainNode.create({
            //     // id: req.body.mainNodeId, 🔮🔮🔮🔮🔮🔮🔮
            //     id: newMainNode.id,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
            //     projectId: newMainNode.id,
            //     position: { x: 0, y: 0 },
            //     totalVoltageForAll: newMainNode.voltage,


            // })

            const newTires = newItems.nodes.filter(item => item.type === 'TireNodeType')
            const newFasteners = newItems.nodes.filter(item => item.type === 'FastenerNodeType')
            const newShkafs = newItems.nodes.filter(item => item.type === 'ElectricalPanelsNodeType')
            const newStencils = newItems.nodes.filter(item => item.type === 'ImageNodeType')
            const newEdges = newItems.edges
            console.log(111111111111111);
            console.log(newEdges);

            const resTires = await db.Tire.bulkCreate(newTires);
            const resFasteners = await db.Fastener.bulkCreate(newFasteners);
            const resShkafs = await db.Shkaf.bulkCreate(newShkafs);
            const resStencils = await db.Stencil.bulkCreate(newStencils);
            const resEdges = await db.Edge.bulkCreate(newEdges);
            res.json({ message: `Импортировано!` })

        } catch (error) {
            res.json(error)
        }

    };

    async getCurrentProject(req, res) {
        try {

            const currentProject = await db.Project.findByPk(req.params.id);
            if (!currentProject) {
                res.status(400).json({ message: 'NO PROJECT' })
                return
            }
            const currentMainNode = await db.MainNode.findOne({
                where: {
                    projectId: currentProject.id
                }
            })
            const currentTires = await db.Tire.findAll({
                where: {
                    parentNode: currentMainNode.id
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })
            const currentFasteners = await db.Fastener.findAll({
                where: {
                    projectId: currentProject.id
                },
                order: [
                    ['createdAt', 'ASC']
                ]
            })


            const currentSfkafs = await db.Shkaf.findAll({
                where: {

                    projectId: currentProject.id
                }
            })

            const currentStencils = await db.Stencil.findAll({
                where: {
                    projectId: currentProject.id
                }
            })
            const currentEdges = await db.Edge.findAll({

                where: {

                    projectId: currentProject.id
                }
            })

            // const finalShkafs = [...currentSfkafs].sort((a, b) => a.indexInGroup - b.indexInGroup)

            const data = {
                nodes: [currentMainNode, ...currentTires, ...currentFasteners, ...currentSfkafs, ...currentStencils],
                edges: [...currentEdges]
            }
            // const data = [currentMainNode, ...currentTires, ...currentFasteners, ...currentSfkafs, ...currentStencils]
            // res.json(JSON.stringify(data))
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

    async deleteProject(req, res) {
        try {


            const newProject = await db.Project.destroy({
                where: {
                    id: req.params.id
                    // id: {
                    //     [Op.or]: [1, 2]
                    // }
                }
            })

            if (!newProject) { res.status(400).json('нет такого проекта'); return }
            // res.json(`Удалён проект №${req.params.id}`)
            res.json(`Удалён проект`)
        } catch (error) {
            res.status(400).json(error)
        }

    };
    async updateProject(req, res) {
        try {

            const { id } = req.params
            const { projectTitle,
                projectInfo, } = req.body

            await db.Project.update(
                {
                    name: projectTitle,
                    info: projectInfo,
                },
                {
                    where: {
                        id

                    }
                }
            )

            // if (!newProject) { res.status(400).json('нет такого проекта'); return }
            // res.json(`Удалён проект №${req.params.id}`)
            res.json(`Проект обновлен`)
        } catch (error) {
            res.json(error)
        }

    };
    async getAllProjectsList(req, res) {
        try {


            const allProjects = await db.Project.findAll()
            res.json(allProjects)
        } catch (error) {
            res.json(error)
        }
    };
    //====================================== SHKAFS-GROUP ======================================


    async addShkaf(req, res) {
        try {
            const { newShkafId } = req.body;
            const { projectId } = req.params;
            const newShkaf = await db.Shkaf.create({
                id: newShkafId,
                // id: `${Math.random()}`,  //🔥🔥🔥🔥🔥🔥🔥🔥🔥
                projectId: projectId,

            })


            res.json(newShkaf)

        } catch (error) {
            res.json(error)
        }

    };
    async deleteShkaf(req, res) {

        try {
            const { type } = req.body
            const { shkafId } = req.params;
            if (type === 'ElectricalPanelsNodeType') {
                await db.Shkaf.destroy({
                    where: { id: shkafId }

                })
                res.json('Шкаф удален');
                return
            }
            if (type === 'ImageNodeType') {
                await db.Stencil.destroy({
                    where: { id: shkafId }

                })
                res.json('Картинка удалена');
                return
            }

            // if (shkafTire) DatabaseService.updateTireChildrenCoordinats(shkafTire.id, req.params.shkafId)

            if (!newShkaf) {
                res.json('Такого шкафа нет');
                return
            }


            res.json('Шкаф успешно удален!')


        } catch (error) {
            res.json(error)
        }

    };

    //====================================== STENCIL ======================================


    async addStencil(req, res) {


        try {

            const { projectId } = req.params
            const { stencilId } = req.body

            // console.log(req.file.filename);
            console.log(11111111, req.files.file[0].filename);
            const newStencil = await db.Stencil.create({
                id: stencilId,
                projectId,
                src: req.files.file[0].filename
            })
            console.log({ a: req.files.file, b: req.body });
            res.json({ a: req.files, b: req.body });
        } catch (error) {
            res.json(error)
        }

    };
    async updateStencil(req, res) {
        try {
            const { stencilId } = req.params;
            const { x } = req.body
            const curStencil = await db.Stencil.findByPk(stencilId)

            await db.Stencil.update(
                { position: { x: x, y: curStencil.position.y } },
                { where: { id: stencilId } }
            )
            res.json(curStencil)

        } catch (error) {
            res.json(error)
        }

    };

    async deleteStencil(req, res) {

        try {
            const newShkaf = await db.Stencil.destroy({
                where: { id: req.params.stencilId }

            })
            if (!newShkaf) {
                res.json('Такого шкафа нет');
                return
            }


            res.json('Изображение успешно удалено!')


        } catch (error) {
            res.json(error)
        }

    };
    async resizeStencil(req, res) {
        try {
            const { style, position } = req.body;
            const { stencilId } = req.params;


            await db.Stencil.update(
                { style: style, position: position },
                {
                    where: {
                        id: stencilId
                    }
                }
            );


            console.log(style, position);
            res.json('Изображение ресайзнуто')




        } catch (error) {
            res.json(error)
        }
    };


    //====================================== REACT-FLOW PROPS (COORDS, GROUP, PARENTS) ======================================

    async updateTireWidthAddFastener(req, res) {
        try {
            const { tireId, newTireWidth, newFastener, otherTiresRightIds,
                numberWidth, } = req.body
            await db.Tire.update({
                style: { height: 30, width: newTireWidth }
            }, { where: { id: tireId } })
            await db.Fastener.create(
                newFastener

            )


            //ПОЗИЦИЯ ДРУГИХ ШИН
            const oldRightTires = []

            for (let i = 0; i < otherTiresRightIds.length; i++) {
                const tire = await db.Tire.findOne({
                    where: {
                        id: otherTiresRightIds[i]
                    }
                })
                oldRightTires.push(tire)
            }

            for (let i = 0; i < oldRightTires.length; i++) {
                const tire = await db.Tire.update({
                    position: { y: oldRightTires[i].position.y, x: oldRightTires[i].position.x + numberWidth }
                },
                    {
                        where: {
                            id: oldRightTires[i].id
                        }
                    })
            }

            res.json({ message: 'Успешно' })

        } catch (error) {
            res.status(400).json({ message: 'Error' })
        }
    }
    async updateTireWidthRemoveFastener(req, res) {
        try {
            const { tireId, newTireWidth, fastenerId, childShkafId, otherTiresRightIds,
                numberWidth, } = req.body

            await db.Tire.update({
                style: { height: 30, width: newTireWidth }
            }, { where: { id: tireId } })


            if (childShkafId) {
                const destroyedShkaf = await db.Shkaf.destroy({
                    where: {

                        id: childShkafId,

                    }
                })
            }

            const destroyed = await db.Fastener.destroy({
                where: {

                    id: fastenerId,

                }
            })

            //ПОЗИЦИЯ ДРУГИХ ШИН
            const oldRightTires = []

            for (let i = 0; i < otherTiresRightIds.length; i++) {
                const tire = await db.Tire.findOne({
                    where: {
                        id: otherTiresRightIds[i]
                    }
                })
                oldRightTires.push(tire)
            }

            for (let i = 0; i < oldRightTires.length; i++) {
                const tire = await db.Tire.update({
                    position: { y: oldRightTires[i].position.y, x: oldRightTires[i].position.x + numberWidth }
                },
                    {
                        where: {
                            id: oldRightTires[i].id
                        }
                    })
            }


            return res.json({ message: 'ВЫполнено!' })
        } catch (error) {

            return res.status(400).json({ message: 'Ошибка' })
        }
    }


    async removeFastenerRelationship(req, res) {
        try {
            const { id,
                parentNode,
                offset,
                draggable } = req.body.removedProps



            const currentShkaf = await db.Shkaf.findByPk(id);
            const offsetPos = { x: currentShkaf.position.x + offset.x, y: currentShkaf.position.y + offset.y }

            await db.Shkaf.update({
                parentNode, draggable, position: offsetPos
            }, { where: { id } })


            res.json({ message: 'Открепелно!' })
        } catch (error) {
            res.status(400).json({ message: 'Ошибка с откреплением!' })

        }
    }

    async updateCoords(req, res) {
        try {
            const { id } = req.params;
            const { position, type } = req.body;
            console.log(id, position, type);
            console.log(1111111111111111);

            if (type === "ElectricalPanelsNodeType") {
                await db.Shkaf.update(
                    { position: position },
                    {
                        where: {
                            id
                        }
                    }
                );
                res.json('ElectricalPanelsNodeType смещён!')
                return
            }
            if (type === "MainSchemeType") {
                await db.MainNode.update(
                    { position: req.body.position },
                    {
                        where: {
                            id
                        }
                    }
                );
                res.json('MainNode смещён!')
                return
            }
            if (type === "ImageNodeType") {
                await db.Stencil.update(
                    { position: position },
                    {
                        where: {
                            id
                        }
                    }
                );
                res.json('Картинка смещён!')
                return
            }


            if (!currentShkaf) {
                res.status(400).json('Такого проекта не существует')
                return
            }



        } catch (error) {
            res.json(error)
        }
    };

    async addFastenerRelationship(req, res) {
        try {
            const { id, updatedShkafProps } = req.body
            console.log(id, updatedShkafProps);
            await db.Shkaf.update({
                parentNode: updatedShkafProps.parentNode,
                position: updatedShkafProps.position,
                draggable: false,

            }, { where: { id } })

            // await db.Shkaf.update({
            //     parentNode, draggable, position: offsetPos
            // }, { where: { id } })

            res.json({ message: 'Сцеплено!' })
        } catch (error) {
            res.json('ОШИБКА В ОТНОШЕНИЯХ')
        }
    }


    async updateGroup(req, res) {
        const { projectId } = req.params;
        const { items } = req.body;
        const checkPos = items.map(item => item.position)
        const allCurrentTires = items.filter(item => item.type === 'TireNodeType')
        const allCurrentShkafs = items.filter(item => item.type === 'ElectricalPanelsNodeType')
        console.log(items);
        for (let i = 0; i < allCurrentTires.length; i++) {
            // console.log(allCurrentTires[i].style);
            await db.Tire.update(
                { style: allCurrentTires[i].style, position: allCurrentTires[i].position },
                {
                    where: {
                        id: allCurrentTires[i].id
                    }
                }
            )
        }
        for (let i = 0; i < allCurrentShkafs.length; i++) {
            await db.Shkaf.update(
                {
                    position: allCurrentShkafs[i].position,
                    addedToGroup: allCurrentShkafs[i].addedToGroup,
                    parentNode: allCurrentShkafs[i].parentNode,
                    draggable: allCurrentShkafs[i].draggable,
                    indexInGroup: allCurrentShkafs[i].indexInGroup,
                },
                {
                    where: {
                        id: allCurrentShkafs[i].id,
                        projectId: projectId
                    }
                }
            )
        }
        res.json('Обновлено!')
    }
    async updateGroupAfterDelete(req, res) {
        console.log(11111111111111);
        const { projectId } = req.params;
        const { items, delShkafId } = req.body;
        const checkPos = items.map(item => item.position)
        console.log(items);
        const allOldShkafs = await db.Shkaf.findAll({
            where: {
                projectId: projectId
            }
        })


        await db.Shkaf.destroy({
            where: {
                projectId: projectId,
                id: delShkafId,


            }
        })
        const allCurrentTires = items.filter(item => item.type === 'TireNodeType')
        const allCurrentShkafs = items.filter(item => item.type === 'ElectricalPanelsNodeType')

        for (let i = 0; i < allCurrentTires.length; i++) {
            await db.Tire.update(
                { style: allCurrentTires[i].style, position: allCurrentTires[i].position },
                {
                    where: {
                        id: allCurrentTires[i].id
                    }
                }
            )
        }
        for (let i = 0; i < allCurrentShkafs.length; i++) {
            await db.Shkaf.update(
                { ...allCurrentShkafs[i] },
                {
                    where: {
                        id: allCurrentShkafs[i].id
                    }
                }
            )
        }




        // await db.Shkaf.bulkCreate(allCurrentShkafs);

        res.json('Удалено + Обновлено!')

    }

    //====================================== RIGHT-MENU PROPS ======================================


    async updatePropsByRow(req, res) {

        try {
            const { type, updatedProps } = req.body;
            const { shkafId } = req.params;
            console.log(3333333333333333333);
            console.log(type, updatedProps);
            console.log(3333333333333333333);

            // const currentShkaf = 
            const currentShkaf = await db.Shkaf.findByPk(shkafId);
            const newObject = currentShkaf[type];



            await db.Shkaf.update({
                [`${type}`]: updatedProps
            }, {
                where: {
                    id: shkafId
                }
            })
            console.log(updatedProps);
            res.json('Свойства успешно обновлены!')


        } catch (error) {
            res.json(error)
        }


    }
    async updateCurrentProp(req, res) {

        try {
            const { id } = req.params;
            const { key1, key2, value } = req.body;


            const currentShkaf = await db.Shkaf.findByPk(id);
            console.log(11111111111111);
            console.log(key1, key2, value);
            console.log(11111111111111);
            if (key2 === '') {
                await db.Shkaf.update({
                    [key1]: value,
                }, {

                    where: {
                        id
                    }
                })
                res.json('Свойство успешно обновлено!')
                return
            }
            const updatedProps = {
                ...currentShkaf,

                [key1]: {
                    ...currentShkaf[key1],
                    [key2]: value
                }

            }

            await db.Shkaf.update(updatedProps, {

                where: {
                    id
                }
            })

            res.json('Свойство успешно обновлено!')


        } catch (error) {
            res.json(error)
        }


    }
    async updateCurrentSelect(req, res) {

        try {
            const { id } = req.params;
            const { key, index } = req.body;

            console.log(index, key);

            await db.Shkaf.update({
                [key]: index
            }, {

                where: {
                    id
                }
            })

            res.json('Свойство списка обновлено!')


        } catch (error) {
            res.json(error)
        }


    }
    async setInitialProps(req, res) {

        try {
            const { id } = req.params;
            const { data } = req.body;


            for (const [key, value] of Object.entries(data)) {
                console.log(11111111111111111111111111111);
                console.log(key, value);
                console.log(11111111111111111111111111111);
                await db.Shkaf.update({
                    [key]: value
                }, {

                    where: {
                        id
                    }
                })
            }

            // await db.Shkaf.update({
            //     [key]: index
            // }, {

            //     where: {
            //         id
            //     }
            // })

            res.json('Свойство списка обновлено!')


        } catch (error) {
            res.json(error)
        }


    }


    async updateSamoproverka(req, res) {
        const { tireId, value, prop } = req.body;

        await db.Tire.update({
            [prop]: value
        },
            {
                where: {
                    id: tireId
                }
            }
        )

        res.json('ok')
    }
    async addEdge(req, res) {

        try {
            const { id, source, target, projectId } = req.body;

            await db.Edge.create({ id, source, target, projectId })


            res.json('ok')
        } catch (error) {
            res.json('error')
        }

    }
    async deleteEdge(req, res) {
        try {
            const { id } = req.body;
            console.log(id);
            console.log(13333737);
            await db.Edge.destroy({
                where: {
                    id
                }
            })

            res.json('ok')
        } catch (error) {
            res.json('error')
        }

    }



















}
export default new DatabaseController()