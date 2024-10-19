Deno.cron("Sample cron job", "* * * * *", () => {
  console.log("This will run every minutes");
});
