# Sử dụng image Node.js chính thức từ Docker Hub
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các phụ thuộc từ package.json
RUN npm install

# Copy toàn bộ mã nguồn từ máy local vào container
COPY . .

# Mở cổng 3002 cho container
EXPOSE 3002

# Lệnh chạy khi container bắt đầu
CMD ["node", "app.js"]
