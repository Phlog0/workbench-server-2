export const TransformersForOwnNeeds = (sequelize, DataTypes) => {
    return sequelize.define("TransformersForOwnNeeds", {
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
        TransformersForOwnNeedsData: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: "",
        },


    });
}

