const { sequelize, Sequelize } = require('../app.js');

const PostModel = sequelize.define('posts', {
    title: {
        type: Sequelize.DataTypes.STRING(64),
    },
    content: Sequelize.DataTypes.TEXT,
    created: Sequelize.DataTypes.TIME
});

PostModel.sync();
