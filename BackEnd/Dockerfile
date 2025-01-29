FROM eclipse-temurin:21-jdk

#Set working directory inside the container
WORKDIR /app

#Copy the maven project files
COPY . .

#Build the SpringBoot application
RUN ./mvn clean package -DskipTests

#Expose app port

EXPOSE 8080

#RUN APPLICATION
CMD ["java", "-jar", "target/*.jar"]