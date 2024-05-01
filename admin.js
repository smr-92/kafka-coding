const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("Connecting kafka admin...");
    admin.connect();
    console.log("Kafka admin connected");

    console.log("Creting topic[rider-updates]");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("[rider-updates] topic created");

    console.log("Disconnecting admin...");
    await admin.disconnect();
    console.log("Admin disconnected");
};

init();
