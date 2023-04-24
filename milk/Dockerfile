FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} milk.jar
EXPOSE 8183:8183
ENTRYPOINT ["java","-jar","/milk.jar"]