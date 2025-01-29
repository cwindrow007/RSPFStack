# Maven image to build app
FROM maven:3.9.6-eclipse-temurin-21 AS build

#Setting working directory
WORKDIR /app

#Copy the maven project files
COPY pom.xml .
RUN mvn dependency:go-offline -B

#COPY the entire source code
COPY src ./src

#Build the SpringBoot application
RUN mvn clean package -DskipTests

#Lightweight run timer
FROM eclipse-temurin:21-jre

#Set working directory inside the container
WORKDIR /app

#Copy of the build jar for maven
COPY --from=build /app/target/*.jar app.jar

#Expose app port
EXPOSE 8080

#RUN APPLICATION
CMD ["java", "-jar", "/app/app.jar"]