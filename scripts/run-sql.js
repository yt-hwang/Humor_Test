/**
 * Supabase SQL 실행 스크립트 (Management API 사용)
 * 사용법: node scripts/run-sql.js <sql파일경로>
 * 예시:   node scripts/run-sql.js supabase/migrations/20260303000000_init.sql
 */

require('dotenv').config({ path: '.env.local' });
const https = require('https');
const fs = require('fs');
const path = require('path');

const sqlFile = process.argv[2];
if (!sqlFile) {
  console.error('Usage: node scripts/run-sql.js <sql_file>');
  process.exit(1);
}

const sql = fs.readFileSync(path.resolve(sqlFile), 'utf8');
const PAT = process.env.SUPABASE_PAT;
const REF = process.env.SUPABASE_PROJECT_REF;

if (!PAT || !REF) {
  console.error('Missing SUPABASE_PAT or SUPABASE_PROJECT_REF in .env.local');
  process.exit(1);
}

function runQuery(query) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query });
    const req = https.request({
      hostname: 'api.supabase.com',
      path: `/v1/projects/${REF}/database/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PAT}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  console.log(`Executing: ${sqlFile}`);
  try {
    const result = await runQuery(sql);
    console.log('Done!', result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
