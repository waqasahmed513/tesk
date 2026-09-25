module.exports = {
  apps : [{
    name: "mh-tech-bot",
    script: "./server.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
