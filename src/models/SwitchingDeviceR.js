export const SwitchingDeviceR = (sequelize, DataTypes) => {
    return sequelize.define("SwitchingDeviceR", {
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
        switchingDeviceRData: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: "",
        },


    });
}

