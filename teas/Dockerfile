FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} teas.jar
EXPOSE 8084
ENTRYPOINT ["java","-jar","/teas.jar"]