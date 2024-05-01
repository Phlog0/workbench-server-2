export const SwitchingDeviceVV = (sequelize, DataTypes) => {
    return sequelize.define("SwitchingDeviceVV", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true,
            },
        },

        nodeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        switchingDeviceVVData: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: "",
        },


    });
}

