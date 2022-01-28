import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
const sequelize = require('../loaders/sequelize');
const movies = require('./movies')

sequelize.define('characters', {
    image: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    history: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    }    
}, {

});

CharacterData.belongsToMany(movies, {
    through: "chatractersMovies",
    as: "movies",
    foreignKey: "characterId",
});

export default characters;