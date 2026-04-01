import { Sequelize } from 'sequelize';

// SQLite setup
const sequelize = new Sequelize('sqlite:./database.sqlite');

// Fighters table
const Fighter = sequelize.define('Fighter', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    weight_class: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Fights table
const Fight = sequelize.define('Fight', {
    fighter1_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Fighter,
            key: 'id',
        },
    },
    fighter2_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Fighter,
            key: 'id',
        },
    },
    result: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Players table
const Player = sequelize.define('Player', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});

// Sync all models with the database
const initializeDatabase = async () => {
    await sequelize.sync({ force: true }); // This will drop the tables if they already exist
    console.log('Database & tables created!');
};

initializeDatabase();

// Exporting models for usage in other parts of the application
export { Fighter, Fight, Player };