const envConfig={
    development:{
        connectionString:'mongodb://localhost:27017/generictemplate',
        port : 3000
    },
    production:{
        connectionString:'some production string',
        port : process.env.PORT
    }
}

module.exports = envConfig