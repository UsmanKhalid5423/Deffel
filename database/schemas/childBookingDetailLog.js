module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "childBookingDetailLog",
        {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            childId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'child',
                    key: 'id'
                },
            },
            branchId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'branch',
                    key: 'id'
                },
            },
            roomId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'room',
                    key: 'id'
                },
            },
            type: {
                type: Sequelize.ENUM,
                values: ["termOnly", "fullYear", "nonTerm"]
            },
            joiningDate: {
                type: Sequelize.DATE
            },
            leavingDate: {
                type: Sequelize.DATE
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
            tableName: "childBookingDetailLog",
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
