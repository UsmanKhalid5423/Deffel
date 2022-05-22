module.exports = function (model) {

//     /**
//  * Relation: BRANCH <--> ROOM.
//  */
//     model.branch.hasMany(model.room, {
//         as: "rooms",
//         foreignKey: "branchId"
//     });


//     /**
//  * Relation: BRANCH <--> ROOM.
//  */
//     model.room.belongsTo(model.branch, {
//         as: "branch",
//         foreignKey: "branchId"
//     });


//     /**
//  * Relation: BRANCH <--> SESSION.
//  */
//     model.branch.hasMany(model.session, {
//         as: "sessions",
//         foreignKey: "branchId"
//     });


//     /**
//     * Relation: SESSION <--> SESSION PRICING.
//     */
//     model.session.hasMany(model.sessionPricing, {
//         as: "sessionPricing",
//         foreignKey: "sessionId"
//     });

//     /**
//        * Relation: SESSION PRICING <--> SESSION.
//        */
//     model.sessionPricing.belongsTo(model.session, {
//         as: "session",
//         foreignKey: "sessionId"
//     });


//     /**
// * Relation: STAFF <--> BANK.
// */
//     model.staff.hasOne(model.staffBankDetail, {
//         as: "staffBankDetail",
//         foreignKey: "staffId"
//     });


//     /**
//  * Relation: STAFF <--> EMERGENCY DETAILS .
//  */
//     model.staff.hasMany(model.staffEmergencyDetail, {
//         as: "staffEmergencyDetails",
//         foreignKey: "staffId"
//     });


//     /**
// * Relation: STAFF <--> CONTRACT.
// */
//     model.staff.hasOne(model.staffContract, {
//         as: "staffContractDetail",
//         foreignKey: "staffId"
//     });

//     /**
// * Relation: CONTRACT <--> STAFF.
// */
//     model.staffContract.belongsTo(model.predefinedSystemRole, {
//         as: "predefinedSystemRole",
//         foreignKey: "roleId"
//     });

//   /**
// * Relation: CONTRACT <--> ROLE.
// */
//     model.staffContract.belongsTo(model.staff, {
//         as: "staff",
//         foreignKey: "staffId"
//     });

//     /**
// * Relation: STAFF <--> PROBATION PERIOD.
// */
//     model.staff.hasOne(model.staffProbationPeriod, {
//         as: "staffProbationPeriodDetail",
//         foreignKey: "staffId"
//     });

//     /**
// * Relation: STAFF <--> SHIFT PATTERN.
// */
//     model.staff.hasMany(model.staffShiftPattern, {
//         as: "staffShiftPatternDetails",
//         foreignKey: "staffId"
//     });


//     /**
// * Relation: STAFF <--> SHIFT PATTERN LOGS.
// */
//     model.staff.hasMany(model.staffShiftPatternLog, {
//         as: "staffShiftPatternLogDetails",
//         foreignKey: "staffId"
//     });

//     /**
//        * Relation: STAFF SHIFT PATTERN <--> BRANCH.
//        */
//     model.staffShiftPattern.belongsTo(model.branch, {
//         as: "branch",
//         foreignKey: "branchId"
//     });

//     /**
//        * Relation: STAFF SHIFT PATTERN <--> ROOM.
//        */
//     model.staffShiftPattern.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });

//     /**
//        * Relation: STAFF SHIFT PATTERN LOG<--> BRANCH.
//        */
//     model.staffShiftPatternLog.belongsTo(model.branch, {
//         as: "branch",
//         foreignKey: "branchId"
//     });

//     /**
//        * Relation: STAFF SHIFT PATTERN LOG <--> ROOM.
//        */
//     model.staffShiftPatternLog.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });

//     /**
//    * Relation: STAFF  <--> BRANCH.
//    */
//     model.staff.belongsTo(model.branch, {
//         as: "branch",
//         foreignKey: "branchId"
//     });


//     /**
//         * Relation: CHILD  <--> BRANCH.
//         */
//     model.child.belongsTo(model.branch, {
//         as: "branch",
//         foreignKey: "branchId"
//     });

//     /**
//         * Relation: CHILD  <--> ROOM.
//         */
//     model.child.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });
//     /**
//       * Relation: STAFF  <--> BRANCH.
//       */
//     model.branch.hasMany(model.staffContract, {
//         as: "branchManagers",
//         foreignKey: "branchId"
//     });



//     /**
// * Relation: CHILD <--> CHILD PREVIOUS NURSERY.
// */
//     model.child.hasOne(model.childPreviousNursery, {
//         as: "childPreviousNursery",
//         foreignKey: "childId"
//     });


//     /**
// * Relation: CHILD <--> CHILD GUARDIAN DETAIL .
// */
//     model.child.hasMany(model.childGuardianDetail, {
//         as: "childGuardianDetails",
//         foreignKey: "childId"
//     });

//     /**
//    * Relation: CHILD <--> CHILD EMERGENCY DETAIl.
//    */
//     model.child.hasMany(model.childEmergencyDetail, {
//         as: "childEmergencyDetails",
//         foreignKey: "childId"
//     });



//     /**
// * Relation: CHILD <--> DOCTOR DETAILS.
// */
//     model.child.hasOne(model.childDoctorDetail, {
//         as: "childDoctorDetail",
//         foreignKey: "childId"
//     });


//     /**
// * Relation: CHILD <--> MED.INFO.
// */
//     model.child.hasOne(model.childMedicalInformation, {
//         as: "childMedicalInformation",
//         foreignKey: "childId"
//     });

//     /**
// * Relation: CHILD <--> FINANCE INFORMATION.
// */
//     model.child.hasOne(model.childFinanceDetail, {
//         as: "childFinanceDetail",
//         foreignKey: "childId"
//     });


//     /**
// * Relation: CHILD <--> BOOKING INFORMATION.
// */
//     // model.child.hasOne(model.childBookingDetail, {
//     //     as: "childBookingDetail",
//     //     foreignKey: "childId"
//     // });

//     // Usman change for multiple Bookings
//     model.child.hasMany(model.childBookingDetail, {
//         as: "childBookingDetail",
//         foreignKey: "childId"
//     });


//     /**
//     * Relation: CHILD BOOKING INFORMATION<--> CHILD.
//     */
//     model.childBookingDetail.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });

//     /**
//     * Relation: CHILD BOOKING INFORMATION<--> ROOM.
//     */
//     model.childBookingDetail.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });


//     // usman change comment
//     /**
//     * Relation: CHILD BOOKING INFORMATION<--> ROOM.
//     */
//     model.childBookingDetail.hasMany(model.childBookingSessionDetail, {
//         as: "childBookingSessions",
//         foreignKey: "childBookingDetailId"
//     });

//     // Usman work

//     model.childBookingSessionDetail.belongsTo(model.childBookingDetail, {
//         as: "childBookingDetail",
//         //foreignKey: "id"
        
//         foreignKey: "childBookingDetailId"
//     });




//     /**
// * Relation: CHILD <--> SESSION INFORMATION.
// */
//     model.child.hasMany(model.childBookingSessionDetail, {
//         as: "childBookingSessionDetails",
//         foreignKey: "childId"
//     });


//     /**
// * Relation: CHILD <--> SESSION BOOKING LOG.
// */
//     model.child.hasMany(model.childBookingDetailLog, {
//         as: "childBookingDetailLogs",
//         foreignKey: "childId"
//     });



//     //     /**
//     // * Relation: CHILD <--> SESSION BOOKING SESSION LOG.
//     // */
//     model.childBookingDetailLog.hasMany(model.childBookingSessionDetailLog, {
//         as: "childBookingSessionDetailLogs",
//         foreignKey: "childBookingDetailLogId"
//     });


//     /**
// * Relation: CHILD BOOKING INFORMATION LOG<--> CHILD.
// */
//     model.childBookingDetailLog.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });

//     /**
//     * Relation: CHILD BOOKING INFORMATION LOG<--> ROOM.
//     */
//     model.childBookingDetailLog.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });


//     /**
//     * Relation: CHILD ADDITIONAL ITEM INFORMATION LOG<--> CHILD.
//     */
//     model.childAdditionalItem.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });

//     /**
//     * Relation: CREDITS <--> CHILD.
//     */
//      model.credit.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });

//     /**
//     * Relation:  PREDEFINED SYSTEM ROLE === PREDEFINED SYSTEM MODULE.
//     */
//      model.predefinedSystemRole.belongsToMany(model.predefinedSystemModule, {
//         through: "predefinedSystemRolePriviledge",
//         foreignKey: "roleId"
//     });


//     model.predefinedSystemModule.belongsToMany(model.predefinedSystemRole, {
//         through: "predefinedSystemRolePriviledge",
//         foreignKey: "moduleId"
//     });
   
//     /**
//     * Relation:  PREDEFINED SYSTEM ROLE === PREDEFINED SYSTEM SUB MODULE.
//     */
//      model.predefinedSystemRole.belongsToMany(model.predefinedSystemSubModule, {
//         through: "predefinedSystemRolePriviledge",
//         foreignKey: "roleId"
//     });

//     model.predefinedSystemSubModule.belongsToMany(model.predefinedSystemRole, {
//         through: "predefinedSystemRolePriviledge",
//         foreignKey: "subModuleId"
//     });


//     /**
//     * Relation:  PREDEFINED SYSTEM MODULE === PREDEFINED SYSTEM SUB MODULE.
//     */
//     model.predefinedSystemModule.hasMany(model.predefinedSystemSubModule, {
//         foreignKey: "moduleId",
        
//     });   

//     model.predefinedSystemSubModule.belongsTo(model.predefinedSystemModule, {
//         foreignKey: "moduleId"
//     });   
    

// ///
// /**
//     * Relation:  STAFF === PREDEFINED SYSTEM MODULE.
//     */
//  model.staff.belongsToMany(model.predefinedSystemModule, {
//     through: "customSystemRolePriviledge",
//     foreignKey: "staffId"
// });


// model.predefinedSystemModule.belongsToMany(model.staff, {
//     through: "customSystemRolePriviledge",
//     foreignKey: "moduleId"
// });

// /**
// * Relation:  PREDEFINED SYSTEM ROLE === PREDEFINED SYSTEM SUB MODULE.
// */
//  model.staff.belongsToMany(model.predefinedSystemSubModule, {
//     through: "customSystemRolePriviledge",
//     foreignKey: "staffId"
// });

// model.predefinedSystemSubModule.belongsToMany(model.staff, {
//     through: "customSystemRolePriviledge",
//     foreignKey: "subModuleId"
// });

// //     /**
//     // * Relation: CHILD <--> ATTENDANCE.
//     // */
//     model.child.hasMany(model.childAttendance, {
//         as: "childAttendance",
//         foreignKey: "childId"
//     });


//     /**
// * Relation: CHILD ATTENDANCE .
// */
//     model.childAttendance.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });


//     //     /**
//     // * Relation: Room <--> ATTENDANCE.
//     // */
//     model.room.hasMany(model.childAttendance, {
//         as: "childAttendance",
//         foreignKey: "roomId"
//     });


//     /**
// * Relation: CHILD ATTENDANCE .
// */
//     model.childAttendance.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });


//     //Usman Khalid Work

//     //     /**
//     // * Relation: Session <--> childBookingSessionDetail.
//     // */
//     model.session.hasMany(model.childBookingSessionDetail, {
//         as: "childBookingSessions",
//         foreignKey: "sessionId"
//     });


//     /**
// * Relation: childBookingSessionDetail Session .
// */
//     model.childBookingSessionDetail.belongsTo(model.session, {
//         as: "session",
//         foreignKey: "sessionId"
//     });


//     // usman khalid work for staffAttance
    
//     //     /**
//     // * Relation: staff <--> ATTENDANCE.
//     // */
//     model.staff.hasMany(model.staffAttendance, {
//         as: "staffAttendance",
//         foreignKey: "staffId"
//     });


//     /**
// * Relation: staff ATTENDANCE .
// */
//     model.staffAttendance.belongsTo(model.staff, {
//         as: "staff",
//         foreignKey: "staffId"
//     });


// //usman khalid work for staffAttendance
//       // */
//       model.room.hasMany(model.staff, {
//         as: "staff",
//         foreignKey: "roomId"
//     });

//     /**
// * Relation: staff ATTENDANCE .
// */
//     model.staff.belongsTo(model.room, {
//         as: "room",
//         foreignKey: "roomId"
//     });







//     // Usman Khalid work for childBookingDetail and childBookingSessionDetial

// //     model.childBookingSessionDetail.hasMany(model.childBookingDetail, {
// //         as: "childBookingDetail",
// //         foreignKey: "id"
// //     });

// //     /**
// // * Relation: staff ATTENDANCE .
// // */
// //     model.childBookingDetail.belongsTo(model.childBookingSessionDetail, {
// //         as: "childBookingSessionDetails",
// //         foreignKey: "childBookingDetailId"
// //     });

// //Usman work for child report

//     model.session.hasMany(model.childAttendance,{
//         as: "childAttendance",
//         foreignKey: "sessionId"
//     })
//     model.childAttendance.belongsTo(model.session, {
//         as: "session",
//         foreignKey: "sessionId"
//     });

// //Usman work for child invoice listing

//     model.child.hasMany(model.invoice,{
//         as: "invoiceDetail",
//         foreignKey: "childId"
//     })
//     model.invoice.belongsTo(model.child, {
//         as: "child",
//         foreignKey: "childId"
//     });

// // usman wok for invoice tables join
// model.invoiceChildBookingDetail.hasMany(model.invoiceChildBookingSessionDetail, {
//     as: "invoiceChildBookingSessionDetail",
//     foreignKey: "childBookingDetailId"
// });
// model.invoiceChildBookingSessionDetail.belongsTo(model.invoiceChildBookingDetail, {
//     as: "invoiceChildBookingDetail",
//     foreignKey: "childBookingDetailId"
// });

// // usman wok for invoice sessionDetail join with session
// model.session.hasMany(model.invoiceChildBookingSessionDetail, {
//     as: "invoiceChildBookingSessionDetail",
//     foreignKey: "sessionId"
// });
// /**
// * Relation: childBookingSessionDetail Session .
// */
// model.invoiceChildBookingSessionDetail.belongsTo(model.session, {
//     as: "session",
//     foreignKey: "sessionId"
// });

// // usman wok for invoice=> invoiceChildAdditionAdditinalItems
// model.invoice.hasMany(model.invoiceChildAdditionalItem, {
//     as: "invoiceChildAdditionalItem",
//     foreignKey: "invoiceId"
// });
// /**
// * Relation: additionAdditinalItems => invoice .
// */
// model.invoiceChildAdditionalItem.belongsTo(model.invoice, {
//     as: "invoice",
//     foreignKey: "invoiceId"
// });

// // usman wok for invoice=> invoiceChildBookingDetail
// model.invoice.hasMany(model.invoiceChildBookingDetail, {
//     as: "invoiceChildBookingDetail",
//     foreignKey: "invoiceId"
// });
// /**
// * Relation: invoiceChildBookingDetail => invoice .
// */
// model.invoiceChildBookingDetail.belongsTo(model.invoice, {
//     as: "invoice",
//     foreignKey: "invoiceId"
// });



// // relation of childBookingDetail with roomOccupency

// model.childBookingDetail.hasMany(model.roomPerHourPerDayOccupancy, {
//     as: "roomPerHourPerDayOccupancy",
//     foreignKey: "roomId"
// });


// /**
// * Relation: CHILD BOOKING INFORMATION<--> CHILD.
// */
// model.roomPerHourPerDayOccupancy.belongsTo(model.childBookingDetail, {
//     as: "childBookingDetail",
//     foreignKey: "roomId"
// });





// // relation of childBookingDetail with roomOccupency

// model.room.hasMany(model.roomPerHourPerDayOccupancy, {
//     as: "roomPerHourPerDayOccupancy",
//     foreignKey: "roomId"
// });


// /**
// * Relation: CHILD BOOKING INFORMATION<--> CHILD.
// */
// model.roomPerHourPerDayOccupancy.belongsTo(model.room, {
//     as: "room",
//     foreignKey: "roomId"
// });




// // relation of childBookingDetail with roomOccupency

// model.predefinedAgeGroup.hasOne(model.child, {
//     as: "child",
//     foreignKey: "ageGroupId"
// });


// /**
// * Relation: CHILD BOOKING INFORMATION<--> CHILD.
// */
// model.child.belongsTo(model.predefinedAgeGroup, {
//     as: "predefinedAgeGroup",
//     foreignKey: "ageGroupId"
// });



// // work by usman khalid

// model.branch.hasMany(model.occupencyPoints, {
//     as: "occupencyPoints",
//     foreignKey: "branchId"
// });

// // Usman work

// model.occupencyPoints.belongsTo(model.branch, {
//     as: "branch",
//     foreignKey: "branchId"
// });







};



