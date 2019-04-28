const { Sequelize, sequelize } = require('../services/sequelize');

const { DataTypes, Op } = Sequelize;

const Model = sequelize.define('post', {
    title: DataTypes.STRING(128),
    content: DataTypes.TEXT
});

Model.sync();

const list = async ({ limit = 10 }) => {
	const results = await Model.findAll({
		limit: limit,
		attributes: ['id', 'title']
	});
	return {
		posts: results.map(r => r.dataValues)
	}
};

const create = async (post) => {
	const created = await Model.create(post);
	return {
		created: created
	}
};

const find = async (id) => {
	const found = await Model.findOne({
		where: {
			id: {
				[Op.eq]: id
			}
		}
	});
	return {
		found: found.dataValues
	}
};


module.exports = {
    Model,
    list,
    create,
    find
}