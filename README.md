# Pokemon Project

โปรเจคนี้ประกอบด้วย :
1. **Frontend**: Next.js application
2. **UI Component**: shadCN
3. **UI CSS**: Tailwind
4. **Fetch GraphQL**: apollo/client
5. **Test**: jestjs

## การติดตั้งและรันด้วย Docker

### ความต้องการเบื้องต้น
- Docker
- Docker Compose

### วิธีรัน
1. Clone repository:
```bash
git clone https://github.com/whatbest121/Pokemon.git
cd my-project
```

2. รันแอปพลิเคชันด้วย Docker Compose:
```bash
docker-compose up -d
```

3. แอปพลิเคชันจะทำงานที่:
   - Frontend: http://localhost:3000

### วิธีหยุดการทำงาน
```bash
docker-compose down
```

### ถ้าต้องการลบข้อมูลทั้งหมดรวมถึง volumes
```bash
docker-compose down -v
```

## การพัฒนาแบบไม่ใช้ Docker

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Deploy vercel
```https://pokemon-q3wg.vercel.app```

## API Endpoints

### https://graphql-pokemon2.vercel.app
## GraphQL
- `GET_POKEMON_INFO` - ดึงข้อมูลออกมาทั้งหมดของ Pokemon โดย query ผ่าน name และ id
- `GET_POKEMON_BY_NAME` - Search query ผ่าน name และ id 
- `GET_POKEMON` - ดึงข้อมูล Pokemon  

