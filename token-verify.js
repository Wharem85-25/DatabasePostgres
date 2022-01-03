const jwt = require('jsonwebtoken');

const secret = 'zeroTwo';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MDgzMjE0NH0.nMMRNe4sjNy8DJho1Ue7dRlofTTEqoKgDCMGrO28p2U';

function verifyToken(payload, secret) {
  return jwt.verify(payload, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);


