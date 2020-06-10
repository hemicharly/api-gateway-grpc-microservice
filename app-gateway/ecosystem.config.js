require('dotenv').config();

module.exports = {

    apps: [{
        name: 'api-gateway',
        script: './build/src/Index.js',
        node_args: `--max_old_space_size=${Math.round((Number(process.env.MAX_MEMORY_RESTART.replace(/\D/g, ''))*0.60))}`,
        instances : "2",
        exec_mode : "cluster",
        autorestart: true,
        watch: false,
        max_memory_restart: process.env.MAX_MEMORY_RESTART,
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        out_file: '/opt/app/logs/access.log',
        error_file: '/opt/app/logs/app.log',
        merge_logs: true,
        env: {
            NODE_ENV: 'production'
        }
    }]
};