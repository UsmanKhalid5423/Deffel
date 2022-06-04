module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "flight",
        {
            flightId:{
                type: Sequelize.STRING,
                primaryKey: true,
            },
            bookingId:{
                type: Sequelize.STRING,
                references: {
                    model: 'booking',
                    key: 'id'
                },
            },
            to: {
                type: Sequelize.STRING,
            },
            from: {
                type: Sequelize.DOUBLE,
            },
            departureDate:{
                //type: Sequelize.DATE,
                type: Date
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
            tableName: "flight",
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
