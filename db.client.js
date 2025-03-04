const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_db_46148_user:poDzC6zQACjzdYFNKEDxBzyavZKxtZH0@dpg-cv3cciq3esus73dfo75g-a.frankfurt-postgres.render.com/esgi_cloud_exam_db_46148', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;