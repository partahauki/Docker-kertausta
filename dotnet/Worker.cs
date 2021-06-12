using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;
using CSRedis;

namespace dotnet
{
    public class Worker : BackgroundService
    {
        private static readonly MongoClient mongoClient;
        private static readonly MongoCollectionBase<BsonDocument> collection;
        private static readonly RedisClient redisClient;
        public long lastUpdate;
        private readonly ILogger<Worker> _logger;

        static Worker() {
            try{
                mongoClient = new MongoClient("mongodb://mongodb:27017");
                collection = (MongoCollectionBase<BsonDocument>)mongoClient.GetDatabase("test").GetCollection<BsonDocument>("taulu");
                redisClient = new RedisClient("redis");
            } catch (Exception e) {
                Console.WriteLine(e);
                Environment.Exit(1);
            }
        }

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
            lastUpdate = DateTimeOffset.Now.ToUnixTimeSeconds();

            redisClient.FlushAll();

            var cursor = collection.Find(new BsonDocument()).ToCursor();

            Console.WriteLine("Initial Transfer:");    
            foreach(var doc in cursor.ToEnumerable()) {
                Console.WriteLine(doc);
                redisClient.LPush("strings", doc["string"]);
            }
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

                var filter = Builders<BsonDocument>.Filter.Gt("timestamp", lastUpdate);
                var cursor = collection.Find(filter).ToCursor();
                lastUpdate = DateTimeOffset.Now.ToUnixTimeSeconds();

                foreach(var doc in cursor.ToEnumerable()) {
                    Console.WriteLine("Added: " + doc);
                    redisClient.LPush("strings", doc["string"]);
                }

                await Task.Delay(5000, stoppingToken);
            }
        }
    }
}
