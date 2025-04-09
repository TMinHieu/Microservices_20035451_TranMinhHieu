# Sử dụng image Node.js phiên bản 18 từ Docker Hub
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các phụ thuộc từ package.json
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3003 cho container
EXPOSE 3003

# Chạy ứng dụng khi container khởi động
CMD ["npm", "start"]
