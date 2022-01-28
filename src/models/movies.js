import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
const sequelize = require('../loaders/sequelize');
const characters = require('./characters')
const gendertype = require('./gendertype')
const contenttype = require('./contenttype')

sequelize.define('movies', {
    image: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    calification: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {

});

movies.belongsToMany(characters, {
    through: "charactersMovies",
    as: "characters",
    foreignKey: "moviesId",
});

movies.belongsTo(contenttype, {
    foreignKey: "contenttypeId",
    as: "contenttype",
});

movies.belongsTo(gendertype, {
    foreignKey: "gendertypeId",
    as: "gendertype",
});

export default movies;