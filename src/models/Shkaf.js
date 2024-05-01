import { DataTypes, Sequelize } from "sequelize";
export const Shkaf = (sequelize) => {
    return sequelize.define("Shkaf", {
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
            defaultValue: "ElectricalPanelsNodeType"
        },
        draggable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: true
        },
        position: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: { x: 0, y: 0 }
        },
        parentNode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        // addedToGroup: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: null

        // },
        indexInGroup: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null

        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },


        // =============================PROPS JSON=====================
        switchingDeviceVV: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedCurrent: "",
                ratedBreakingCurrent: "",
                ratedVoltage: "",
            },
        },
        switchingDeviceVN: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedCurrent: "",
                ratedBreakingCurrent: "",
                ratedVoltage: "",
                numberOfGroundShafts: "",
                locationOfGroundingBlades: "",
                switchDriveLocation: "",
                locationOfTheGroundingBladeDrive: "",
            },
        },
        switchingDeviceR: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedCurrent: "",
                thermalCurrent: "",
                ratedVoltage: "",
            },
        },


        transformersForOwnNeeds: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedPower: "",
            },
        },
        voltageTransformers: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedThreePhasePowerOfTheFirstWinding: "",
                accuracyClassOfTheFirstSecondaryWinding: "",
                ratedThreePhasePowerOfTheSecondSecondaryWinding: "",
                accuracyClassOfTheSecondSecondaryWinding: "",
                ratedThreePhasePowerOfAadditionalSecondaryWinding: "",
                accuracyClassOfSecondaryReturnWires: "",
                ratedLineVoltageAtTheTerminalsOfThePrimaryWinding: "",
            },
        },
        circuitBreakers: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedCurrentOfFuseLink: "",
            },
        },
        electricityMeter: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                accuracyClass: "",
            },
        },
        electromagneticLocking: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
            },
        },
        instrumentCurrentTransformers: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                transformationRatio: "",
                accuracyClass: "",
                oneSecondThermalCurrent: "",
                typeOfService: "",
            },
        },
        microprocessorProtectionDeviceAndAutomation: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
            },
        },
        opn: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: {
                type: "",
                name: "",
                manufacturer: "",
                ratedOperatingVoltage: "",
                throughput: "",
                ratedDischargeCurrent: "",
                maximumContinuousPermissibleOperatingVoltage: "",
            },
        },


        // =============================PROPS SELECT=====================

        currentCellOption: {
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
        isThereAnOpn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },
        reactiveCos: {
            type: DataTypes.FLOAT,
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
        currentOL: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: 0,
        },




    },
        // {
        //     timestamps: false,
        // }

    );
}