import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
const sequelize = require('../loaders/sequelize');
const movies = require('../movies');

sequelize.define('contenttype', {
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    }   
}, {

});

contenttype.hasMany(movies, { as: "movies" });

export default contenttype;