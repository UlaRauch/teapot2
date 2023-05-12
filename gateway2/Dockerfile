FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} gateway2.jar
EXPOSE 8080:8080
ENTRYPOINT ["java","-jar","/gateway2.jar"]