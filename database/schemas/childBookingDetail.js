module.exports = function (sequelize, Sequelize) {
    const Model = sequelize.define(
        "childBookingDetail",
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
            bookingNumber:{
                type : Sequelize.BIGINT,
                defaultValue: 1
            },
            type: {
                type: Sequelize.ENUM,
                values: ["termOnly", "fullYear", "nonTerm"]
            },
            joiningDate: {
                type: Date
                //type: Sequelize.DATE
            },
            leavingDate: {
                type: Date
                //type: Sequelize.DATE
            },
            isFirstBooking: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            activeBookings: {
                type: Sequelize.BIGINT,
                defaultValue: 0
            },
            iterationNumber:{
                type : Sequelize.BIGINT,
                defaultValue: 1
            },
            bookingPaymentType:{
                type: Sequelize.ENUM,
                values: ["dailyRate", "fullTimeRate"],
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            // This key is added by usman, because we have to read deleted record from childBookingDetail
            // as we delete record in two cases: 1=> remove 2=> update , so this key will identify that this record is edited and deleted  
            isDeletedDueToEdit:{
                type: Sequelize.BOOLEAN,
                defaultValue: false
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
            tableName: "childBookingDetail",
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
