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
    public static final String ADMIN = "admin";
    public static final String USER = "user";
    public static final String PRIVILEGED_USER = "p_user";

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, Converter<Jwt, ? extends AbstractAuthenticationToken> jwtAuthenticationConverter) throws Exception {
        http
                .authorizeHttpRequests().requestMatchers("/teas/hello/noauth")
                .permitAll()
                .requestMatchers("/teas/admin", "/teas/create", "/teas/delete/**")
                .hasRole(ADMIN)
                .requestMatchers("/teas/maketea/special")
                .hasAnyRole(PRIVILEGED_USER, ADMIN)
                .requestMatchers("/teas/getall", "/teas/maketea/*", "/teas/hello/user")
                .hasAnyRole(USER, ADMIN)
            .anyRequest().authenticated();
        http.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter)));
        http.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .csrf().disable();
        return http.build();
    }
}