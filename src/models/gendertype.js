import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
const sequelize = require('../loaders/sequelize');
const movies = require('../movies');

sequelize.define('gendertype', {
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    }   
}, {

});

gendertype.hasMany(movies, { as: "movies" });

export default gendertype;