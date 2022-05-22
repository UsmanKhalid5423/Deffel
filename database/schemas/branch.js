module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "branch",
        {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            },
            // sprint m6 changes
            trackingCode: {
                type: Sequelize.STRING
            },
            registrationNumber: {
                type: Sequelize.STRING,
                unique: true,
            },
            contactNumber: {
                type: Sequelize.STRING,
                unique: true,
            },
            logoPath: {
                type: Sequelize.STRING,
            },
            logoThumbailPath: {
                type: Sequelize.STRING,
            },
            city: {
                type: Sequelize.STRING,
            },
            streetNumber: {
                type: Sequelize.STRING,
            },
            streetAddress:{
                type: Sequelize.STRING,
            },
            postalCode: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            country: {
                type: Sequelize.STRING,
            },
            latitude: {
                type: Sequelize.FLOAT,
            },
            longitude: {
                type: Sequelize.FLOAT,
            },
            openingTime: {
                type: Sequelize.BIGINT
            },
            closingTime: {
                type: Sequelize.BIGINT
            },
            isHeadOffice:{
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            // M10 change
            operationalHours : {
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
                type: Sequelize.BIGINT
            },
            updatedTime: {
                type: Sequelize.BIGINT
            },
            deletedTime: {
                type: Sequelize.BIGINT
            }
        },
        {
            tableName: "branch",
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
