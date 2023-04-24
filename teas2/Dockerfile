FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} teas2.jar
EXPOSE 8184
ENTRYPOINT ["java","-jar","/teas2.jar"]