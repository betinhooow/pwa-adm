const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require('./companies/company.entity');
const { User } = require('./user/user.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [Company, User],
  locale: {
    language: 'pt',
    translations: {
      actions: {
        new: 'Novo',
      },
    },
  },
};

module.exports = options;
