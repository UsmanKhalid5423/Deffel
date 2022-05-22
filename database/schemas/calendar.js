module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "calendar",
        {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            description: {
                type: Sequelize.TEXT
            },
            type: {
                type: Sequelize.ENUM,
                values: ['bankHolidays', 'midTermHolidays', 'endTermHolidays']
            },
            branchId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'branch',
                    key: 'id'
                },
            },
            termId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'term',
                    key: 'id'
                },
            },
            startDate: {
                type: Date
                
                //type: Sequelize.DATE
            },
            endDate: {
                type: Date
                
                //type: Sequelize.DATE
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
            tableName: "calendar",
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
