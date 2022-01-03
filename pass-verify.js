const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$D6g7nTkMLzb1C0hqv9IvzulZaEA7MQvv5vGoE78k48Kk6cY5USy2K';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
};

hashPassword();
