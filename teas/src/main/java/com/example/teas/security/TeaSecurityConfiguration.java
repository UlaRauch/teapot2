package com.example.teas.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class TeaSecurityConfiguration {
    public static final String REALM_ADMIN = "tea_admin";
    public static final String CLIENT_ADMIN = "admin";
    public static final String REALM_USER = "tea_user";
    public static final String CLIENT_USER = "user";
    public static final String CLIENT_PRIVILEGED_USER = "privileged_user";

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, Converter<Jwt, ? extends AbstractAuthenticationToken> jwtAuthenticationConverter) throws Exception {
        http
                .authorizeHttpRequests().requestMatchers("/teas/hello/noauth")
                .permitAll()
                .requestMatchers("/teas/admin")
                .hasRole(REALM_ADMIN)
                .requestMatchers("/teas/create", "/teas/delete/*")
                .hasRole(CLIENT_ADMIN)
                .requestMatchers("/teas/maketea/special")
                .hasAnyRole(CLIENT_PRIVILEGED_USER, CLIENT_ADMIN)
                .requestMatchers("/teas/maketea/*", "/teas/hello/user")
                .hasAnyRole(CLIENT_USER, CLIENT_PRIVILEGED_USER, CLIENT_ADMIN)
                .requestMatchers("/teas/getall")
                .hasAnyRole(REALM_USER, REALM_ADMIN, CLIENT_ADMIN)
            .anyRequest().authenticated();
        http.oauth2ResourceServer().jwt().jwtAuthenticationConverter(jwtAuthenticationConverter);
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.csrf().disable();
        return http.build();
    }
}