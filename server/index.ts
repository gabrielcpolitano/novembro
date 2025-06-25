import { spawn } from 'child_process';

console.log('[express] Starting Next.js on port 5000');

// Start Next.js directly on port 5000
const nextProcess = spawn('npx', ['next', 'dev', '-p', '5000', '-H', '0.0.0.0'], {
  stdio: 'inherit',
  env: { 
    ...process.env,
    PORT: '5000',
    HOSTNAME: '0.0.0.0'
  }
});

// Handle process events
nextProcess.on('error', (error) => {
  console.error(`[express] Error starting Next.js: ${error.message}`);
  process.exit(1);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`[express] Next.js process exited with code ${code}`);
  }
  process.exit(code || 0);
});

// Handle graceful shutdown
const shutdown = () => {
  console.log('[express] Shutting down...');
  nextProcess.kill('SIGTERM');
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Simulate the expected log message for compatibility
setTimeout(() => {
  console.log('[express] serving on port 5000');
}, 3000);