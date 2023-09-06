import cron from "node-cron";

// learn more about cron time here:
// https://www.npmjs.com/package/node-cron?activeTab=readme
const jobs = [
    {
        time: "57 21 * * *", // every day at 22:00 (10 PM)
        message: () => "It's 10 PM, good night!",
    },
  {
        time: "58 21 * * *", // every day at 22:00 (10 PM)
        message: () => "It's 9.88 PM, good night!",
    },
];

export default function autoSend() {
    const timezone = global.config?.timezone || "Asia/Dhaka";
    if (!timezone) return;

    for (const job of jobs) {
        cron.schedule(
            job.time,
            () => {
                let i = 0;
                for (const tid of job.targetIDs ||
                    Array.from(global.data.threads.keys()) ||
                    []) {
                    setTimeout(() => {
                        global.api.sendMessage(
                            {
                                body: job.message(),
                            },
                            tid
                        );
                    }, i++ * 300);
                }
            },
            {
                timezone: timezone,
            }
        );
    }
}
