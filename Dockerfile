# Use official nginx lightweight image
FROM iirshad/nginx_img

# Author / metadata (optional)
LABEL maintainer="Irshad Ahmad"

# Remove default nginx html (optional but clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy app files into nginx html folder
# Make sure index.html and images/ folder are in the build context (same folder as Dockerfile)
COPY ./ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Use default nginx start command
CMD ["nginx", "-g", "daemon off;"]
