module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "booking",
        {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            currency: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.DOUBLE,
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            isDeleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdTime: {
                type: Sequelize.BIGINT(20)
            },
            updatedTime: {
                type: Sequelize.BIGINT(20)
            },
            deletedTime: {
                type: Sequelize.BIGINT(20)
            }
        },
        {
            tableName: "booking",
            timestamps: false,
            collate: "utf8_general_ci"
        }
    );

    Model.prototype.toJSON = function () {
        const attributes = Object.assign({}, this.get());
        delete attributes.deletedTime;
        delete attributes.isDeleted;

        return attributes;
    };
    return Model;
};
