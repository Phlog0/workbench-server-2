
export const MainNode = (sequelize, DataTypes) => {
    return sequelize.define("MainNode", {
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
            defaultValue: "MainSchemeType"
        },
        totalVoltageForAll: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 10,
        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },


        position: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: { x: 0, y: 0 }

        },



    },
        // {
        //     timestamps: true,
        // }

    );
}

