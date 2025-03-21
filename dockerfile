# Use the official Nginx image as a base
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files into the Nginx public directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
