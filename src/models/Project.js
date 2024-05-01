import { DataTypes, Sequelize, Model } from "sequelize";


export const Project = (sequelize) => {
    return sequelize.define('Project', {

        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

            validate: {
                notEmpty: true,
            },
        },


        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        info: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

    })
}