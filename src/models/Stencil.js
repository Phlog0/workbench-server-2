
export const Stencil = (sequelize, DataTypes) => {
    return sequelize.define("Stencil", {
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
            defaultValue: "ImageNodeType"
        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        src: {
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
        style: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
            defaultValue: { width: 360, height: 60 }
        },


    },
        // {
        //     timestamps: false,
        // }
    );
}

