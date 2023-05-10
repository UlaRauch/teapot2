package ra.ula.gateway2.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;


@Configuration
public class Gateway2SecurityConfiguration {
    @Bean
    public SecurityWebFilterChain springSecurityWebFilterChain(ServerHttpSecurity http) throws Exception {
        http
                .authorizeExchange()
                .pathMatchers("/hellogateway", "/hellotea/noauth")
                .permitAll()
            .and()
                .authorizeExchange()
                .anyExchange()
                .authenticated()
            .and()
                .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);
        return http.build();
    }
}