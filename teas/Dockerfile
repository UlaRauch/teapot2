FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} teas.jar
EXPOSE 8184
ENTRYPOINT ["java","-jar","/teas.jar"]