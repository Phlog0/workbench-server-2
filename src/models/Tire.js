
export const Tire = (sequelize, DataTypes) => {
    return sequelize.define("Tire", {
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
            defaultValue: 'TireNodeType'
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
            defaultValue: { width: 360, height: 30 }

        },
        parentNode: {
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
        vvodError: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false,
        },
        ukrmError: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false,
        },
        zeroVvodWarning: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false,
        },
        microprocPriVV: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false,
        },
        transTokPriVV: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: false,
        },
        tireCurrentOLAll: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
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

