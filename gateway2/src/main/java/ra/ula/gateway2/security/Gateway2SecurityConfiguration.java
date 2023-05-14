package ra.ula.gateway2.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.client.oidc.web.server.logout.OidcClientInitiatedServerLogoutSuccessHandler;
import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.logout.ServerLogoutSuccessHandler;


@Configuration
public class Gateway2SecurityConfiguration {
    @Bean
    public SecurityWebFilterChain springSecurityWebFilterChain(ServerHttpSecurity http, ServerLogoutSuccessHandler handler) {
        http.cors()
            .and()
                .authorizeExchange()
                .pathMatchers("/hellogateway", "/hellotea/noauth")
                .permitAll()
            .and()
                .authorizeExchange()
                .anyExchange()
                .authenticated()
            .and()
                .oauth2Login()
            .and()
                .logout()
                .logoutSuccessHandler(handler);
        return http.build();
    }

    @Bean
    public ServerLogoutSuccessHandler keycloakLogoutSuccessHandler(ReactiveClientRegistrationRepository repository) {
        OidcClientInitiatedServerLogoutSuccessHandler oidcClientInitiatedServerLogoutSuccessHandler = new OidcClientInitiatedServerLogoutSuccessHandler(repository);
        oidcClientInitiatedServerLogoutSuccessHandler.setPostLogoutRedirectUri("https://orf.at");
        return oidcClientInitiatedServerLogoutSuccessHandler;
    }
}
