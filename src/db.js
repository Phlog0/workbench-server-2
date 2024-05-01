
import { Sequelize } from "sequelize"
import { User } from './models/User.js';
import { Role } from './models/Role.js'
import { Shkaf } from './models/Shkaf.js';
import { Project } from './models/Project.js';
// import Project from './models/Project.js'
import { PropsSelect } from './models/PropsSelect.js';
import { SwitchingDeviceVV } from './models/SwitchingDeviceVV.js';
import { SwitchingDeviceVN } from './models/SwitchingDeviceVN.js';
import { SwitchingDeviceR } from './models/SwitchingDeviceR.js';
import { CircuitBreaker } from './models/CircuitBreaker.js';
import { ElectricityMeter } from './models/ElectricityMeter.js';
import { ElectromagneticLocking } from './models/ElectromagneticLocking.js';
import { InstrumentCurrentTransformer } from './models/InstrumentCurrentTransformer.js';
import { MicroprocessorProtectionDeviceAndAutomation } from './models/MicroprocessorProtectionDeviceAndAutomation.js';
import { Opn } from './models/Opn.js';
import { TransformersForOwnNeeds } from './models/transformersForOwnNeeds.js';
import { VoltageTransformer } from './models/VoltageTransformer.js';
import { Stencil } from './models/Stencil.js';
import { Tire } from './models/Tire.js';
import { MainNode } from './models/MainNode.js';
import { Fastener } from "./models/Fastener.js";
import { Edge } from "./models/Edge.js";
export const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/workbenchDB')


export const db = {
    User: User(sequelize, Sequelize.DataTypes),
    Role: Role(sequelize, Sequelize.DataTypes),
    Shkaf: Shkaf(sequelize, Sequelize.DataTypes),
    Tire: Tire(sequelize, Sequelize.DataTypes),
    MainNode: MainNode(sequelize, Sequelize.DataTypes),
    Stencil: Stencil(sequelize, Sequelize.DataTypes),
    Project: Project(sequelize, Sequelize.DataTypes),
    Fastener: Fastener(sequelize, Sequelize.DataTypes),
    Edge: Edge(sequelize, Sequelize.DataTypes),
    // PropsSelect: PropsSelect(sequelize, Sequelize.DataTypes),
    // SwitchingDeviceVV: SwitchingDeviceVV(sequelize, Sequelize.DataTypes),
    // SwitchingDeviceVN: SwitchingDeviceVN(sequelize, Sequelize.DataTypes),
    // SwitchingDeviceR: SwitchingDeviceR(sequelize, Sequelize.DataTypes),
    // CircuitBreaker: CircuitBreaker(sequelize, Sequelize.DataTypes),
    // ElectricityMeter: ElectricityMeter(sequelize, Sequelize.DataTypes),
    // ElectromagneticLocking: ElectromagneticLocking(sequelize, Sequelize.DataTypes),
    // InstrumentCurrentTransformer: InstrumentCurrentTransformer(sequelize, Sequelize.DataTypes),
    // MicroprocessorProtectionDeviceAndAutomation: MicroprocessorProtectionDeviceAndAutomation(sequelize, Sequelize.DataTypes),
    // Opn: Opn(sequelize, Sequelize.DataTypes),
    // TransformersForOwnNeeds: TransformersForOwnNeeds(sequelize, Sequelize.DataTypes),
    // VoltageTransformer: VoltageTransformer(sequelize, Sequelize.DataTypes),
}
