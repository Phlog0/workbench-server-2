
export const Fastener = (sequelize, DataTypes) => {
    return sequelize.define("Fastener", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,

            validate: {
                notEmpty: true,
            },
        },

        draggable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 'FastenerNodeType'
        },
        position: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },

        },
        style: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: { width: 10, height: 10 }

        },
        parentNode: {  //tireId
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
        createdAt: {
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
        {
            timestamps: false,
        }

    );
}

