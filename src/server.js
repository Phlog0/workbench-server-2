import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'
import fs from 'fs';
import { Sequelize, DataTypes, HasMany } from 'sequelize';
import router from './Route.js';
import { db } from './db.js';
import { sequelize } from './db.js';
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/avatars', express.static(path.join(__dirname, 'avatars')))







app.use('/', router)




// app.use(express.static(__dirname, 'public'));
// app.use(express.static('public'))
// app.use(morgan('dev'));


// db.Project.hasMany(db.Shkaf, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.Tire, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
db.Project.hasOne(db.MainNode, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
db.Project.hasMany(db.Stencil, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
db.Project.hasMany(db.Shkaf, {
  foreignKey: "projectId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});


db.MainNode.hasMany(db.Tire, {
  foreignKey: "parentNode",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})


db.Tire.hasMany(db.Fastener, {
  foreignKey: "parentNode",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});



// ===================================СВОЙСТВА РАЗНЫЪ ШКАФОВ И ПРОЕКТОВ ШКАФА===========================================


// db.Project.hasMany(db.PropsSelect, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.SwitchingDeviceVV, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.SwitchingDeviceVN, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.SwitchingDeviceR, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.CircuitBreaker, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.ElectricityMeter, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.ElectromagneticLocking, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.InstrumentCurrentTransformer, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.MicroprocessorProtectionDeviceAndAutomation, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.Opn, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.TransformersForOwnNeeds, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Project.hasMany(db.VoltageTransformer, {
//   foreignKey: "projectId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// =====================================

// db.Shkaf.hasOne(db.PropsSelect, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.SwitchingDeviceVV, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.SwitchingDeviceVN, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.SwitchingDeviceR, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.CircuitBreaker, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.ElectricityMeter, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.ElectromagneticLocking, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.InstrumentCurrentTransformer, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.MicroprocessorProtectionDeviceAndAutomation, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.Opn, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.TransformersForOwnNeeds, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// db.Shkaf.hasOne(db.VoltageTransformer, {
//   foreignKey: "nodeId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });


// ===================================================================


db.Role.hasMany(db.User, {
  foreignKey: "roleId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});




app.listen(PORT, () => {

  const start = async () => {

    try {
      await sequelize.sync();
      // await sequelize.drop();
      // await sequelize.sync({ force: true });
      // await db.Role.bulkCreate([
      //   { id: 3, roleName: "VISITOR" },
      //   { id: 2, roleName: "USER" },
      //   { id: 1, roleName: "ADMIN" },
      // ]);



      // await db.Project.bulkCreate([
      //   { id: 1, name: "РП 1", totalVoltageForAll: 6, info: 'ХМАО' },
      //   { id: 2, name: "РП 2", totalVoltageForAll: 10, info: 'ХМАО!' }
      // ]);

      // await db.MainNode.create(
      //   { id: 1, projectId: 1, draggable: true, position: { "X": "Y" } },
      // );


      // await db.Tire.bulkCreate([
      //   { id: 1, draggable: false, position: { "X": "Y" }, style: { "X": "Y" }, parentNodeId: 1, },
      //   { id: 2, draggable: false, position: { "X": "Y" }, style: { "X": "Y" }, parentNodeId: 1, },
      // ]);


      // await db.Shkaf.bulkCreate([
      //   { id: 1, projectId: 1, draggable: true, position: { "X": "Y" }, parentNodeId: "1", },
      //   { id: 2, projectId: 1, position: { "X": "Y" }, parentNodeId: "2", },

      // ]);


      // await db.PropsSelect.create(
      //   {
      //     id: 1,
      //     projectId: 1,
      //     nodeId: 1,
      //     currentCellOption: 0,
      //     totalPowerOfAllElectricalAppliances: 0,
      //     currentTypeOfSwitchingDevice: 0,
      //     thereIsACircuitBreakers: 0,
      //     currentTransformatorOption: 0,
      //     ratedCurrentOfTheMainCircuits: 0,
      //     isThereAMicroprocessorProtectionDeviceAndAutomation: 0,
      //     isThereAnElectromagneticLocking: 0,
      //     isThereAVoltageTransformers: 0,
      //     isThereAElectricityMeter: 0,
      //     reactiveCos: 0,
      //   },
      // );


      // await db.Opn.create(
      //   { id: 1, projectId: 1, nodeId: 1, opnData: { "X": "A" } }
      // );

      // const jane = await db.Project.bulkCreate([{ id: 5, name: "Serg", totalVoltageForAll: 6, info: 'bla-bla-bla' }, { id: 6, name: "Turbo", totalVoltageForAll: 10, info: 'HAHAHAH!' }]);
      // const jane2 = await db.Project.create({ name: "Serg", totalVoltageForAll: 6, info: 'bla-bla-bla' });
      // console.log(db.User === sequelize.models.User)
      // console.log(db.User === sequelize.models.User)


    } catch (error) {
      console.log(error);

    }
  }



  start();
})




