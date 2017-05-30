module.exports = {
    'database': 'mongodb://kolyaka:<PASSWORD>@cluster0-shard-00-00-zr61a.mongodb.net:27017,cluster0-shard-00-01-zr61a.mongodb.net:27017,cluster0-shard-00-02-zr61a.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    'time_life': 15 * 24 * 60 * 60 * 1000
};