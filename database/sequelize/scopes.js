/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
const moment = require("moment");
const operator = require("sequelize").Op;
const sequelize = require("sequelize");
/*******************************************************/

//change

module.exports = function (model) {
//     /**
//      * Relation: PREDEFINED ROLE SYSTEM.
//      */
//     model.predefinedSystemRole.addScope('roleSystemPriviledge', where => ({
//         // where: {
//         //     name: "Super Admin"
//         // },
//         where: where,
//         include: [
//             {
//                 model: model.predefinedSystemModule,
//                 through: "predefinedSystemRolePriviledge",
//                 required: false,
//                 where: {
//                     status: true
//                 },
//                 include: [{
//                     model: model.predefinedSystemSubModule,
//                     required: false,
//                     where: {
//                         status: true
//                     },
//                     include: [
//                         {
//                             model: model.predefinedSystemRole,
//                             through: "predefinedSystemRolePriviledge",
//                             // where: {
//                             //     status: true,
//                             //     name: "Super Admin",

//                             // },
//                             where: where
//                             // groupBy:['id']
//                         }
//                     ]
//                 }]
//             },
//             // {
//             //     model: model.predefinedSystemSubModule,
//             //     through: "predefinedSystemRolePriviledge",
//             // required: false,
//             //     where: {
//             //         status: true
//             //     },
//             // }

//         ]

//     }), {
//         override: true
//     });


//     /**
//      * Relation: SESSION RELATIONS.
//      */
//     model.session.addScope('sessionPricing', {
//         include: [{
//             model: model.sessionPricing,
//             as: 'sessionPricing',
//             required: false,
//             where: {
//                 status: true
//             },
//         }]
//     }, {
//         override: true
//     });

//     /**
//           * Relation: BRANCH RELATIONS.
//           */
//     model.branch.addScope('branchManagers', {
//         include: [{
//             model: model.staffContract,
//             as: 'branchManagers',
//             required: false,
//             where: {
//                 jobTitle: "nurseryManager"
//             },
//             attributes: ["id"],
//             include: [{
//                 model: model.staff,
//                 as: "staff",
//                 attributes: ["id", "firstName", "lastName"]
//             }]
//         }]
//     }, {
//         override: true
//     });

//     /**
//        * Relation: STAFF RELATIONS.
//        */

//     model.staff.addScope('staffDetails', {
//         include: [
//             {
//                 model: model.staffBankDetail,
//                 as: 'staffBankDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.staffEmergencyDetail,
//                 as: 'staffEmergencyDetails',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.staffContract,
//                 as: 'staffContractDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.staffProbationPeriod,
//                 as: 'staffProbationPeriodDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.staffShiftPattern,
//                 as: 'staffShiftPatternDetails',
//                 required: false,
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//                 include: [
//                     {
//                         model: model.room,
//                         as: "room",
//                         attributes: ["id", "name"],

//                     },
//                     {
//                         model: model.branch,
//                         as: "branch",
//                         attributes: ["id", "name"],
//                     }
//                 ]
//             },
//             {
//                 model: model.staffShiftPatternLog,
//                 as: 'staffShiftPatternLogDetails',
//                 required: false,
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//                 include: [
//                     {
//                         model: model.room,
//                         as: "room",
//                         attributes: ["id", "name"],

//                     },
//                     {
//                         model: model.branch,
//                         as: "branch",
//                         attributes: ["id", "name"],
//                     }
//                 ]
//             }
//         ]
//     }, {
//         override: true
//     });

//     model.staff.addScope('branch', {
//         include: [{
//             model: model.branch,
//             as: 'branch',
//             required: false,
//             attributes: ["id", "name"],
//             where: {
//                 status: true
//             },
//         }]
//     }, {
//         override: true
//     });


//     model.staff.addScope('staffContract', where => ({
//         include: [
//             {
//                 model: model.staffContract,
//                 as: 'staffContractDetail',
//                 required: true,
//                 attributes: ["jobTitle", "roleType", "roleId"],
//                 where: where,
//                 include: [{
//                     model: model.predefinedSystemRole,
//                     as: "predefinedSystemRole",
//                     attributes: ["id", "name"]
//                 }]
//             }
//         ]
//     }), {
//         override: true
//     });

//     /**
//  * Relation: PREDEFINED ROLE SYSTEM.
//  */
//     model.staff.addScope('roleSystemPriviledge', where => ({
//         // where: {
//         //     name: "Super Admin"
//         // },
//         where: where,
//         attributes: ['id'],
//         include: [
//             {
//                 model: model.staffContract,
//                 as: 'staffContractDetail',
//                 required: true,
//                 attributes: ["jobTitle", "roleType", "roleId"],
//             },
//             {
//                 model: model.predefinedSystemModule,
//                 through: "predefinedSystemRolePriviledge",
//                 required: false,
//                 where: {
//                     status: true
//                 },
//                 include: [{
//                     model: model.predefinedSystemSubModule,
//                     required: false,
//                     where: {
//                         status: true
//                     },
//                     include: [
//                         {
//                             model: model.staff,
//                             through: "customSystemRolePriviledge",
//                             attributes: ["id"],
//                             // where: {
//                             //     status: true,
//                             //     name: "Super Admin",

//                             // },
//                             where: where
//                             // groupBy:['id']
//                         }
//                     ]
//                 }]
//             },
//             // {
//             //     model: model.predefinedSystemSubModule,
//             //     through: "predefinedSystemRolePriviledge",
//             // required: false,
//             //     where: {
//             //         status: true
//             //     },
//             // }

//         ]

//     }), {
//         override: true
//     });


//     /**
//        * Relation: CHILD RELATIONS.
//        */

//     model.child.addScope('branch', {
//         include: [
//             {
//                 model: model.branch,
//                 as: 'branch',
//                 required: false,
//                 attributes: ["id", "name"],
//                 where: {
//                     status: true
//                 },
//             },
//         ]
//     }, {
//         override: true
//     });



//     model.child.addScope('branchAndRoom', {
//         include: [
//             {
//                 model: model.branch,
//                 as: 'branch',
//                 required: false,
//                 attributes: ["id", "name"],
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//             },
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: false,
//                 attributes: ["id", "name"],
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//             }
//         ]
//     }, {
//         override: true
//     });

//     model.child.addScope('room', where => ({
//         include: [
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: true,
//                 attributes: ["id", "name"],
//                 where: { status: true, isDeleted: false },
//             }
//         ]
//     }), {
//         override: true
//     });

//     model.child.addScope('activeBookingWrtRoom', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: true,
//                 attributes: ["id"],
//                 // where: {status: true, isDeleted: false , leavingDate: {[operator.eq]: null} },
//                 where: {
//                     status: true, isDeleted: false,
//                     [operator.or]: [
//                         {
//                             leavingDate: {
//                                 [operator.gte]: moment().format('YYYY-MM-DD')
//                             },
//                         },
//                         {
//                             leavingDate: { [operator.eq]: null }
//                         },

//                     ]
//                 },
//             },
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: true,
//                 attributes: ["id", "name"],
//                 where: { status: true, isDeleted: false },
//             }
//         ]
//     }), {
//         override: true
//     });

//     model.child.addScope('activeBooking', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: true,
//                 // where: {status: true, isDeleted: false , leavingDate: {[operator.eq]: null} },
//                 where: {
//                     status: true, isDeleted: false,
//                     [operator.or]: [
//                         {
//                             leavingDate: {
//                                 [operator.gte]: moment().format('YYYY-MM-DD')
//                             },
//                         },
//                         {
//                             leavingDate: { [operator.eq]: null }
//                         },

//                     ]
//                 },
//             }]
//     }), {
//         override: true
//     });

//     model.child.addScope('childDetails', {
//         include: [
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: false,
//                 attributes: ["id", "name"],
//                 where: { status: true, isDeleted: false },
//             },
//             {
//                 model: model.childPreviousNursery,
//                 as: 'childPreviousNursery',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childGuardianDetail,
//                 as: 'childGuardianDetails',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childEmergencyDetail,
//                 as: 'childEmergencyDetails',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childDoctorDetail,
//                 as: 'childDoctorDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childMedicalInformation,
//                 as: 'childMedicalInformation',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childFinanceDetail,
//                 as: 'childFinanceDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childBookingSessionDetail,
//                 as: 'childBookingSessionDetails',
//                 required: false,
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//             },
//             {
//                 model: model.childBookingDetailLog,
//                 as: 'childBookingDetailLogs',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//                 include: [
//                     {
//                         model: model.childBookingSessionDetailLog,
//                         as: 'childBookingSessionDetailLogs',
//                         required: false,
//                         where: {
//                             status: true,
//                             isDeleted: false
//                         },
//                     }
//                 ]
//             },
//         ]
//     }, {
//         override: true
//     });


//     model.childBookingDetail.addScope('childBookingDetails', where => ({
//         include: [
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName"],
//                 where: where

//             },
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: false,
//                 attributes: ["id", "name","totalCapacity"],
//                 where: {
//                     status: true,
//                 },
//             },
//             {
//                 model: model.childBookingSessionDetail,
//                 as: 'childBookingSessions',
//                 required: false,
//                 where: {
//                     status: true,
//                 },
//             },

//         ]
//     }), {
//         override: true
//     });

//     model.childBookingDetailLog.addScope('childBookingDetailLogs', where => ({
//         include: [
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName"],
//                 where: where

//             },
//             {
//                 model: model.room,
//                 as: 'room',
//                 required: false,
//                 attributes: ["id", "name"],
//                 where: {
//                     status: true
//                 },
//             },
//             {
//                 model: model.childBookingSessionDetailLog,
//                 as: 'childBookingSessionDetailLogs',
//                 required: false,
//                 where: {
//                     status: true
//                 },
//             },

//         ]
//     }), {
//         override: true
//     });


//     model.childAdditionalItem.addScope('childAdditionalItem', (where, where2) => ({
//         include: [
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName", "branchId"],
//                 where: where,
//                 include: [{
//                     model: model.room,
//                     as: 'room',
//                     required: false,
//                     attributes: ["id", "name"],
//                     where: {
//                         status: true
//                     },
//                 },]
//             },

//         ]
//     }), {
//         override: true
//     });


//     model.credit.addScope('credit', (where) => ({
//         include: [
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName", "branchId"],
//                 where: where,
//                 include: [{
//                     model: model.room,
//                     as: 'room',
//                     required: false,
//                     attributes: ["id", "name"],
//                     where: {
//                         status: true
//                     },
//                 },]
//             },

//         ]
//     }), {
//         override: true
//     });

//     model.childAttendance.addScope('childAttendance', (where) => ({
//         include: [
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName", "dateOfBirth"],
//                 where: where,
//             },
//             {
//                 model: model.room,
//                 as: "room",
//                 attributes: ["id", "name"],

//             },

//         ]
//     }), {
//         override: true
//     });

//     // model.child.addScope('childBookingSessionDetail', where => ({
//     //     include: [
//     //         {
//     //             model: model.childBookingSessionDetail,
//     //             as: 'childBookingSessionDetails',
//     //             required: true,
//     //             where: where,
//     //             //this scope is added by usman khalid for session name
//     //             include:[
//     //                 {
//     //                     model: model.session,
//     //                     as: 'session',
//     //                     attributes:['id','name']
//     //                 },
//     //             ]
//     //         },

//     //         {
//     //             model: model.childAttendance,
//     //             as: 'childAttendance',
//     //             required: false,
//     //             where: { createdDate: moment(moment().unix() * 1000).format('YYYY-MM-DD') },
//     //         }

//     //     ]
//     // }), {
//     //     override: true
//     // });

//     //usman change

//     // model.child.addScope('childBookingSessionDetail', where => ({
//     //     include: [
//     //         {
//     //             model: model.childBookingSessionDetail,
//     //             as: 'childBookingSessionDetails',
//     //             required: true,
//     //             where: where,
//     //             include:[
//     //                 {
//     //                     model: model.childBookingDetail,
//     //                     as: 'childBookingDetail',
//     //                     required: true,
//     //                     where:{
//     //                         [operator.and]:[
//     //                             {
//     //                                 joiningDate:{
//     //                                    [operator.lte]:moment().format('YYYY-MM-DD')
//     //                                 }
//     //                             },
//     //                             {
//     //                                 [operator.or]: [
//     //                                     {
//     //                                         leavingDate: {
//     //                                             [operator.gte]: moment().format('YYYY-MM-DD')
//     //                                         },
//     //                                     },
//     //                                     {
//     //                                         leavingDate: { [operator.eq]: null }
//     //                                     },
                
//     //                                 ]
//     //                             }
//     //                         ]
//     //                     },
//     //                     attributes: ['id','joiningDate','leavingDate'],
//     //                     // if donot want to return its data
//     //                     // attributes: [],

//     //                 },
//     //                 // {
//     //                 //     model: model.session,
//     //                 //     as: 'session',
//     //                 //     required: false,
//     //                 //     attributes: ['id','name']
//     //                 // }
//     //             ]
//     //         },
//     //         {
//     //             model: model.childAttendance,
//     //             as: 'childAttendance',
//     //             required: false,
//     //             where: { createdDate: moment(moment().unix() * 1000).format('YYYY-MM-DD') },
//     //         }

//     //     ]
//     // }), {
//     //     override: true
//     // });


//     // scope changed

//     model.child.addScope('childBookingSessionDetail', where => ({
//         include: [
//             {
//                     model: model.childBookingDetail,
//                     as: 'childBookingDetail',
//                     required: true,
//                     where:{
//                         [operator.and]:[
//                             {
//                                 joiningDate:{
//                                    [operator.lte]:moment().format('YYYY-MM-DD')
//                                 }
//                             },
//                             {
//                                 [operator.or]: [
//                                     {
//                                         leavingDate: {
//                                             [operator.gte]: moment().format('YYYY-MM-DD')
//                                         },
//                                     },
//                                     {
//                                         leavingDate: { [operator.eq]: null }
//                                     },
            
//                                 ]
//                             }
//                         ]
//                     },
//                     attributes: ['id','joiningDate','leavingDate'],
//                     include:[
//                         {
//                             model: model.childBookingSessionDetail,
//                             as: 'childBookingSessions',
//                             required: true,
//                             where: where,
//                             include:[
//                                 {
//                                     model: model.session,
//                                     as: 'session',
//                                     required: false,
//                                     attributes: ['id','name']
//                                 }
//                             ]
//                         },
//                     ],
//                     // if donot want to return its data
//                      //attributes: [],

//             },
            
//             {
//                 model: model.childAttendance,
//                 as: 'childAttendance',
//                 required: false,
//                 where: { createdDate: moment(moment().unix() * 1000).format('YYYY-MM-DD') },
//             }

//         ]
//     }), {
//         override: true
//     });




//      //this scope is added by usman khalid for joiningDate and leavingDate issue
//                 // joiningDate is <= today date and leavingDate is >= 0r null
               

//     //Usman Khalid work scope for staff and staffAttendance
//     // model.staffAttendance.addScope('staffAttendance', (where) => ({
//     //     include: [
//     //         {
//     //             model: model.staff,
//     //             as: 'staff',
//     //             required: true,
//     //             attributes: ["id", "firstName", "lastName", "mobileNumber"],
//     //             include:[
//     //                 {
//     //                     model: model.staffShiftPattern,
//     //                     as: 'staffShiftPatternDetails',
//     //                     required: false,
//     //                     where: {
//     //                         status: true,
//     //                         isDeleted: false
//     //                     },
//     //                     attributes:['id','roomId'],
//     //                     include: [
//     //                     {
//     //                         model: model.room,
//     //                         as: "room",
//     //                         attributes: ["id", "name"],
//     //                     },
//     //             ]
                        
//     //                 }
//     //             ],
//     //         },
//     //     ]
//     // }), {
//     //     override: true
//     // });



//     // model.staffAttendance.addScope('staffAttendance', (where) => ({
//     //     include: [
//     //         {
//     //             model: model.staff,
//     //             as: 'staff',
//     //             required: true,
//     //             attributes: ["id", "firstName", "lastName", "mobileNumber",'roomId'],
//     //             where: where,
//     //             include:[
//     //                 {
//     //                         model: model.room,
//     //                         as: "room",
//     //                         attributes: ["id", "name"],
//     //                 }
//     //             ],
//     //         },
//     //     ]
//     // }), {
//     //     override: true
//     // });


//     model.staff.addScope('staffAttendance', (where) => ({
//         include: [
//             {
//                 model: model.staffAttendance,
//                 as: 'staffAttendance',
//                 required: false,
//                 where: where,
//                 //attributes: ["id", "firstName", "lastName", "mobileNumber",'roomId'],
//                 //where: where,
//                 // include:[
//                 //     {
//                 //             model: model.room,
//                 //             as: "room",
//                 //             attributes: ["id", "name"],
//                 //     }
//                 // ],
//             },{
//                 model: model.room,
//                 as: "room",
//                 attributes: ["id", "name"],
//                 required: false
//             },
//         ]
//     }), {
//         override: true
//     });

//     model.staffAttendance.addScope('staffAttendanceDetail', (where) => ({
//         include: [
//             {
//                 model: model.staff,
//                 as: 'staff',
//                 required: true,
//                 attributes: ["id", "firstName", "lastName", "mobileNumber",'roomId'],
//                 where: where,
//                 include:[
//                     {
//                             model: model.room,
//                             as: "room",
//                             attributes: ["id", "name"],
//                     }
//                 ],
//             },
//         ]
//     }), {
//         override: true
//     });



//     // Usman Work for childCron
//     // model.child.addScope('childActive', where => ({
//     //     include: [
//     //         {
//     //             model: model.childBookingDetail,
//     //             as: 'childBookingDetail',
//     //             required: true,
//     //             // where: {status: true, isDeleted: false , leavingDate: {[operator.eq]: null} },
//     //             where: where,
//     //             include:[
//     //                 {
//     //                     model: model.childBookingSessionDetail,
//     //                     as: 'childBookingSessions',
//     //                     required: true,
//     //                     where: {
//     //                         status: true, isDeleted: false,
//     //                         //day: moment(moment().unix() * 1000).format('dddd')
//     //                         day: moment(moment().unix() * 1000).subtract(1, 'days').format('dddd'),
//     //                         startTime: {
//     //                             [operator.gt]: 0,
//     //                         },
//     //                         //day: moment().format('dddd') 
//     //                     },
//     //                 }
//     //             ]
//     //         }]
//     // }), {
//     //     override: true
//     // });

//     model.child.addScope('childActive', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: true,
//                 // where: {status: true, isDeleted: false , leavingDate: {[operator.eq]: null} },
//                 where: where,
//                 attributes:[],
//                 include:[
//                     {
//                         model: model.childBookingSessionDetail,
//                         as: 'childBookingSessions',
//                         required: true,
//                         where: {
//                             status: true, isDeleted: false,
//                             //day: moment(moment().unix() * 1000).format('dddd')
//                             day: moment(moment().unix() * 1000).subtract(1, 'days').format('dddd'),
//                             startTime: {
//                                 [operator.gt]: 0,
//                             },
//                             //day: moment().format('dddd') 
//                         },
//                         attributes:[]
//                     }
//                 ]
//             }]
//     }), {
//         override: true
//     });




//     // Usman work for staff Attendance scope for marking absent
//     model.staff.addScope('staffShiftPattern', where => ({
//         include: [
//             {
//                 model: model.staffShiftPattern,
//                 as: 'staffShiftPatternDetails',
//                 required: true,
//                 // comment because it's weekend
//                 where: {
//                     // moving to friday
//                     status: true,
//                     isDeleted: false,
//                     //day: moment().format('dddd'),
//                     day: moment().subtract(1, 'days').format('dddd'),
//                     startDate: {
//                         [operator.gt]: 0
//                     },
//                     //day: moment().format('dddd')
//                 },
//                 attributes:['id']
//             },
//         ]
//     }), {
//         override: true
//     });


//     // Usman work for stafflogin and branch, role information
//     model.staff.addScope('staffLoginDetail', where => ({
//         include: [
//             {
//                 model: model.branch,
//                 as: "branch",
//                 attributes: ["id", "name"],
//             },
//             {
//                 model: model.staffContract,
//                 as: 'staffContractDetail',
//                 required: false,
//                 where: {
//                     status: true,
//                     isDeleted: false
//                 },
//                 attributes:['id','jobTitle']
//             }
//         ]
//     }),{
//         override: true
//     }
//     );

//      // Usman Work for child Report
//      model.child.addScope('childReport', where => ({
//         include: [
//             {

//                 model: model.childBookingSessionDetail,
//                 as: 'childBookingSessionDetails',
//                 required: true,
//                 attributes: ["sessionId"],
//                 where: {status:true,isDeleted:false},
//                 include:[
//                     {
//                         model: model.session,
//                         as: "session",
//                         required: true,
//                         where: {status:true,isDeleted:false},
//                         attributes: ['id','name','startTime','endTime']
//                     }
//                 ]
                
//             },
//             {
//                 model: model.room,
//                 as: "room",
//                 required: true,
//                 where: {status:true,isDeleted:false},
//                 attributes: ['id','name']
//             },
//             {
//                 model: model.childAttendance,
//                 as: 'childAttendance',
//                 required: true,
//                 where: where,
//             }
//         ]
//     }), {
//         override: true
//     });

    
//     model.childAttendance.addScope('childReport_v2', where => ({
//         include: [
//             {
//                 model: model.session,
//                 as: "session",
//                 required: true,
//                 where: {status:true,isDeleted:false},
//                 attributes: ['id','name','startTime','endTime']
                
//             },
//             {
//                 model: model.room,
//                 as: "room",
//                 required: true,
//                 where: {status:true,isDeleted:false},
//                 attributes: ['id','name']
//             },
//             {
//                 model: model.child,
//                 as: 'child',
//                 required: true,
//                 attributes:['id','firstName','lastName','dateOfBirth','branchId','roomId'],
//                 where: where,
//             }
//         ]
//     }), {
//         override: true
//     });

//     model.child.addScope('childBookingSession', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: "childBookingDetail",
//                 required: true,
//                 where: {status:true,isDeleted:false},
//                 include:[
//                     {
//                         model: model.childBookingSessionDetail,
//                         as: "childBookingSessions",
//                         required: true,
//                         where: {status:true,isDeleted:false},
//                     },
//                 ]
//                 //attributes: ['id','name','startTime','endTime']
                
//             },
//         ]
//     }), {
//         override: true
//     });



//     // usman work child invoice  (where, where2)
//     //model.child.addScope('childInvoice', where => ({
//     model.child.addScope('childInvoice', (where, where2) => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: "childBookingDetail",
//                 required: true,
//                 where: where,
//                 //attributes: ['id','childId','branchId','bookingNumber','joiningDate','leavingDate','isFirstBooking'],
//                 include:[
//                     {
//                         model: model.childBookingSessionDetail,
//                         as: "childBookingSessions",
//                         //required: true,
//                         required: false,
//                         // where:{
//                         //     isDeleted:false
//                         // },
//                         //attributes:['id','childId','childBookingDetailId','day','sessionId','startTime','endTime'],
//                         include:[
//                             {
//                                 model: model.session,
//                                 as: "session",
//                                 //required: true,
//                                 //attributes:['id','name','branchId','category','startTime','endTime'],
//                                 required: false,
//                                 include:[
//                                     {
//                                         model: model.sessionPricing,
//                                         as: "sessionPricing",
//                                         required: false,
//                                         //attributes:['id','sessionId','dailyTimeRate','fullTimeRate','hourlyTimeRate'],
//                                         //required: true,
//                                         where:{
//                                             isDeleted:false
//                                         }
//                                         //where: where2
//                                     }   
//                                 ]
//                             },
                               
//                         ]
//                     }   
//                 ],
//             //group: ['childBookingDetail.bookingNumber'],

                
//             },
//             {
//                 model: model.childFinanceDetail,
//                 as: "childFinanceDetail",
//                 require: true
//             }
//         ],
//         //group: ['childBookingDetail.bookingNumber'],
//         //group: ['childBookingDetail.bookingNumber'],
//         //group: ['childBookingDetail.childId','childBookingDetail.bookingNumber'],

//     }), {
//         override: true
//     });


//     // usman work for invoice fetch
//     // model.child.addScope('childInvoiceListing', where => ({
//     //     include: [
//     //         {
//     //             model: model.invoice,
//     //             as: "invoiceDetail",
//     //             required: true,
//     //             where: where
//     //         },
//     //     ]
//     // }), {
//     //     override: true
//     // });


//     model.invoice.addScope('childInvoiceListing', where => ({
//         include: [
//             {
//                 model: model.child,
//                 as: "child",
//                 required: true,
//                 where: where
//             },
//         ]
//     }), {
//         override: true
//     });



//     // usman work for attendance kpi view change of multiple bookings
//     model.child.addScope('childBookingsDetail', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: true,
//                 // where: {status: true, isDeleted: false , leavingDate: {[operator.eq]: null} },
//                 where: where,
//                 attributes:['id','joiningDate','leavingDate'],
//                 include:[
//                     {
//                         model: model.childBookingSessionDetail,
//                         as: 'childBookingSessions',
//                         required: true,
//                         attributes:['id','day'],
//                         where: {
//                             //status: true, isDeleted: false,
//                             startTime: {
//                                 [operator.gt]: 0,
//                             },
//                         },
//                     }
//                 ]
//             }]
//     }), {
//         override: true
//     });

//     // usman work for child booking sessions (already booked check)
//     model.child.addScope('childBookingsDetail_v2', where => ({
//         include: [
//             {
//                 model: model.childBookingDetail,
//                 as: 'childBookingDetail',
//                 required: true,
//                 where: {status: true, isDeleted: false},
//                 where: where,
//                 attributes:['id','joiningDate','leavingDate'],
//                 include:[
//                     {
//                         model: model.childBookingSessionDetail,
//                         as: 'childBookingSessions',
//                         required: true,
//                         //attributes:['id','day'],
//                         where: {
//                             status: true, isDeleted: false,
//                             startTime: {
//                                 [operator.gt]: 0,
//                             },
//                         },
//                     }
//                 ]
//             }]
//     }), {
//         override: true
//     });



//     // Usman work for invoice
//     model.invoiceChildBookingDetail.addScope('childInvoiceBookingSessionDetails', where => ({
//         include: [
//             {
                
//                 model: model.invoiceChildBookingSessionDetail,
//                 as: 'invoiceChildBookingSessionDetail',
//                 required: true,
//                 //attributes: [['childBookingId', 'bookingId'],'id','invoiceId','childId','branchId','roomId','bookingNumber','type','joiningDate','leavingDate','isFirstBooking','activeBookings','status','isDeleted'],
//                 where: {
//                     status: true, isDeleted: false,
//                     // startTime: {
//                     //     [operator.gt]: 0,
//                     // },
//                 },
//             }
//         ]
//     }), {
//         override: true
//     });
//     // usman work for invoice
//     model.childBookingDetail.addScope('childBookingSessionDetails', where => ({
//         include: [
//             {
                
//                 model: model.childBookingSessionDetail,
//                 as: 'childBookingSessions',
//                 required: true,
//                 //attributes: [['id', 'bookingId'],'childId','branchId','roomId','bookingNumber','type','joiningDate','leavingDate','isFirstBooking','activeBookings','status','isDeleted'],
//                 where: {
//                     //status: true, isDeleted: false,
//                     // startTime: {
//                     //     [operator.gt]: 0,
//                     // },
//                 },
//                  // this is added for pricing process
//                  include:[
//                     {
//                         model: model.session,
//                         as: "session",
//                         //required: true,
//                         //attributes:['id','name','branchId','category','startTime','endTime'],
//                         required: false,
//                         include:[
//                             {
//                                 model: model.sessionPricing,
//                                 as: "sessionPricing",
//                                 required: false,
//                                 //attributes:['id','sessionId','dailyTimeRate','fullTimeRate','hourlyTimeRate'],
//                                 //required: true,
//                                 where:{
//                                     isDeleted:false
//                                 }
//                                 //where: where2
//                             }   
//                         ]
//                     },
                       
//                 ]
//             }
//         ]
//     }), {
//         override: true
//     });

//      // usman work for invoice view details
//      model.invoice.addScope('invoiceView', where => ({
//         include: [
//             {
//                 model: model.child,
//                 as: "child",
//                 required: true,
//                 where:{
//                     status: true,
//                     isDeleted:false
//                 },
//                 include:[
//                     {
//                         model: model.childGuardianDetail,
//                         as: "childGuardianDetails",
//                         required: true,
//                         where:{
//                             status: true,
//                             isDeleted:false,
//                             isPrimaryGuardian: true
//                         }                
//                     },
//                 ]                
//             },
//             {
//                 model: model.invoiceChildBookingDetail,
//                 as: "invoiceChildBookingDetail",
//                 required: true,
//                 where:{
//                     status: true,
//                     isDeleted:false
//                 },
//                 include:[
//                     {
//                         model: model.invoiceChildBookingSessionDetail,
//                         as: 'invoiceChildBookingSessionDetail',
//                         required: true,
//                         where: {
//                             status: true, isDeleted: false,
//                         },
//                         include:[
//                             {
//                                 model: model.session,
//                                 as: 'session',
//                                 required: false,
//                                 where: {
//                                     status: true, isDeleted: false,
//                                 },
//                             }
//                         ]
//                     }
//                 ]    
//             },
//             {
//                 model: model.invoiceChildAdditionalItem,
//                 as: "invoiceChildAdditionalItem",
//                 required: false,
//                 where:{
//                     status: true,
//                     isDeleted:false
//                 },
//             }
//         ]
//     }), {
//         override: true
//     });

//      // usman work for child first Guardian
//      model.child.addScope('childGuardianDetail', where => ({
//         include: [
//             {
               
//                 model: model.childGuardianDetail,
//                 as: "childGuardianDetails",
//                 required: true,
//                 where:{
//                     status: true,
//                     isDeleted:false,
//                     isPrimaryGuardian: true
//                 }                
//             },
           
//         ]
//     }), {
//         override: true
//     });


//     // usman work for invoice and child first Guardian use in CSV
//     model.invoice.addScope('viewAdhocInvoice', where => ({
//         include: [
//             {
//                 model: model.child,
//                 as: "child",
//                 required: true,
//                 where:{
//                     status: true,
//                     isDeleted:false
//                 },
//                 include:[
//                     {
//                         model: model.childGuardianDetail,
//                         as: "childGuardianDetails",
//                         required: true,
//                         where:{
//                             status: true,
//                             isDeleted:false,
//                             isPrimaryGuardian: true
//                         }                
//                     },
//                 ]  
//             },
//             {
               
//                 model: model.invoiceChildAdditionalItem,
//                 as: "invoiceChildAdditionalItem",
//                 required: true,
//                 where:{
//                     status: true,
//                     isDeleted:false,
//                 }                
//             },
           
//         ]
//     }), {
//         override: true
//     });


//      // usman work for child first Guardian
//      model.invoice.addScope('invoiceChildAndGuardian', where => ({
//         include: [
//             {
               
//                 model: model.child,
//                 as: "child",
//                 required: true,
//                 attributes:['id'], // no need of child Data
//                 include:[
//                     {
//                         model: model.childGuardianDetail,
//                         as: "childGuardianDetails",
//                         required: true,
//                         where:{
//                             status: true,
//                             isDeleted:false,
//                             isPrimaryGuardian: true
//                         },
//                     }
//                 ]                
//             },
//             {
               
//                 model: model.invoiceChildBookingDetail,
//                 as: "invoiceChildBookingDetail",
//                 required: false,
//                 //attributes:['id'], // no need of child Data
//                 include:[
//                     {
//                         model: model.invoiceChildBookingSessionDetail,
//                         as: "invoiceChildBookingSessionDetail",
//                         required: false,
//                         where:{
//                            startTime:{
//                                [operator.gt]: 0
//                            }
//                         },
//                         include:[
//                             {
//                                 model: model.session,
//                                 as: "session",
//                                 required: false,
//                                 // where:{
//                                 //    startTime:{
//                                 //        [operator.gt]: 0
//                                 //    }
//                                 // },
//                             }
//                         ]   
//                     }
//                 ]                
//             },
//             {
               
//                 model: model.invoiceChildAdditionalItem,
//                 as: "invoiceChildAdditionalItem",
//                 required: false,
                
//                 //required: true,
//             },
//         ]
        
//     }), {
//         override: true
//     });

//     // scope by usman khalid for credits export pending , work later

//     // model.credit.addScope('creditChildGuardian', (where) => ({
//     //     include: [
//     //         {
//     //             model: model.child,
//     //             as: 'child',
//     //             required: true,
//     //             attributes: ["id", "firstName", "lastName", "branchId"],
//     //             where: where,
//     //             include: [{
//     //                 model: model.childGuardianDetail,
//     //                 as: 'childGuardianDetail',
//     //                 required: true,
//     //                 attributes: ["id", "name"],
//     //                 where: {
//     //                     status: true
//     //                 },
//     //             },]
//     //         },

//     //     ]
//     // }), {
//     //     override: true
//     // });



//     model.staff.addScope('staffShiftDetails', (where) => ({
//     include: [
//         {
//             model: model.staffShiftPattern,
//             as: 'staffShiftPatternDetails',
//             required: true,
//             //attributes: ["id", "firstName", "lastName", "branchId"],
//             where: where,
//             // include: [{
//             //     model: model.childGuardianDetail,
//             //     as: 'childGuardianDetail',
//             //     required: true,
//             //     attributes: ["id", "name"],
//             //     where: {
//             //         status: true
//             //     },
//             // },]
//         },

//     ]
//     }), {
//         override: true
//     });



//     model.child.addScope('childBookingRoomOccupency', (where,where_v2) => ({
//     include: [
//         {
//             model: model.childBookingDetail,
//             as: 'childBookingDetail',
//             required: true,
//             where: where,
//             include: [
//                 {                   
//                     model: model.room,
//                     as: 'room',
//                     required: true,
//                     include: [{
//                         model: model.roomPerHourPerDayOccupancy,
//                         as: 'roomPerHourPerDayOccupancy',
//                         required: true,
//                     }]
//                 },
//                 {
//                     model: model.childBookingSessionDetail,
//                     as: 'childBookingSessions',
//                     required: true,
//                     where: where_v2
//                 }
//             ],
//         },
//         {
//             model: model.predefinedAgeGroup,
//             as: 'predefinedAgeGroup',
//             required: true,
//         }
//     ]
//     }), {
//         override: true
//     });




//     model.child.addScope('childOccupencyPoints', (where) => ({
//     include: [
//         {
//             model: model.predefinedAgeGroup,
//             as: 'predefinedAgeGroup',
//             required: true,
//         }
//     ]
//     }), {
//         override: true
//     });



//     model.staff.addScope('staffOccupencyPoints', (where) => ({
//     include: [
//         {
//             model: model.staffContract,
//             as: 'staffContractDetail',
//             required: true,
//         }
//     ]
//     }), {
//         override: true
//     });



//     model.branch.addScope('branchOccupency', (where) => ({
//     include: [
//         {
//             model: model.occupencyPoints,
//             as: 'occupencyPoints',
//             required: false,
//             where: where
//         }
//     ]
//     }), {
//         override: true
//     });


//     model.staff.addScope('staffContractDetails', (where) => ({
//         include: [
//             {
//                 model: model.staffContract,
//                 as: 'staffContractDetail',
//                 required: true,
//                 where: where,
//                 attributes: ['id','employmentEndDate']
//             }
//         ]
//         }), {
//             override: true
//         });


};


