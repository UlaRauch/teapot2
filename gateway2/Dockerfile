FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} gateway2.jar
EXPOSE 8181:8181
ENTRYPOINT ["java","-jar","/gateway2.jar"]