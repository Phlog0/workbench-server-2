
export const Edge = (sequelize, DataTypes) => {
    return sequelize.define("Edge", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

            validate: {
                notEmpty: true,
            },
        },


        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 'step'
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },

        },
        target: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },

        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },

        },




        // extent: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //     },
        //     defaultValue: 'parent'
        // },




    },
        // {
        //     timestamps: false,
        // }

    );
}

