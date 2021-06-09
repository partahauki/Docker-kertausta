using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Net.Http;

namespace dotnet
{
    public class Worker : BackgroundService
    {
        private static readonly HttpClient client = new HttpClient();
        private readonly ILogger<Worker> _logger;

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);

                var stringTask = client.GetStringAsync("http://mongoapi:8080/");
                var msg = await stringTask;
                Console.WriteLine(msg);

                await Task.Delay(10000, stoppingToken);
            }
        }
    }
}
