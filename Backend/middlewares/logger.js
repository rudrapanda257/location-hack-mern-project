const logger = (req, res, next) => {
    console.log(`Location data received at: ${new Date().toISOString()}`);
    next();
  };
  
  module.exports = logger;
  