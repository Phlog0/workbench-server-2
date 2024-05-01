
export const PropsSelect = (sequelize, DataTypes) => {
    return sequelize.define("PropsSelect", {
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
        currentCellOption: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        totalPowerOfAllElectricalAppliances: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        currentTypeOfSwitchingDevice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        thereIsACircuitBreakers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        currentTransformatorOption: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        ratedCurrentOfTheMainCircuits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        isThereAMicroprocessorProtectionDeviceAndAutomation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        isThereAnElectromagneticLocking: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        isThereAVoltageTransformers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        isThereAElectricityMeter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        reactiveCos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },

    });
}

