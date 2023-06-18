package com.example.teas.security;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.PathNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Stream;

/*
taken from ch4mpy
https://stackoverflow.com/questions/74571191/use-keycloak-spring-adapter-with-spring-boot-3/74572732#74572732
 */
@RequiredArgsConstructor
class JwtGrantedAuthoritiesConverter implements Converter<Jwt, Collection<? extends GrantedAuthority>> {

    @Override
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public Collection<? extends GrantedAuthority> convert(Jwt jwt) {
        return Stream.of("$.realm_access.roles", "$.resource_access.*.roles").flatMap(claimPaths -> {
                    Object claim;
                    try {
                        claim = JsonPath.read(jwt.getClaims(), claimPaths);
                    } catch (PathNotFoundException e) {
                        claim = null;
                    }
                    if (claim == null) {
                        return Stream.empty();
                    }
                    if (claim instanceof String claimStr) {
                        return Stream.of(claimStr.split(","));
                    }
                    if (claim instanceof String[] claimArr) {
                        return Stream.of(claimArr);
                    }
                    if (Collection.class.isAssignableFrom(claim.getClass())) {
                        final var iter = ((Collection) claim).iterator();
                        if (!iter.hasNext()) {
                            return Stream.empty();
                        }
                        final var firstItem = iter.next();
                        if (firstItem instanceof String) {
                            return (Stream<String>) ((Collection) claim).stream();
                        }
                        if (Collection.class.isAssignableFrom(firstItem.getClass())) {
                            return (Stream<String>) ((Collection) claim).stream().flatMap(colItem -> ((Collection) colItem).stream()).map(String.class::cast);
                        }
                    }
                    return Stream.empty();
                })
                /* Insert some transformation here if you want to add a prefix like "ROLE_" or force upper-case authorities */
                .map(SimpleGrantedAuthority::new)
                .map(GrantedAuthority.class::cast).toList();
    }
}

@Component
@RequiredArgsConstructor
class SpringAddonsJwtAuthenticationConverter implements Converter<Jwt, JwtAuthenticationToken> {

    @Override
    public JwtAuthenticationToken convert(Jwt jwt) {
        final var authorities = new JwtGrantedAuthoritiesConverter().convert(jwt);
        final String username = JsonPath.read(jwt.getClaims(), "preferred_username");
        return new JwtAuthenticationToken(jwt, authorities, username);
    }
}