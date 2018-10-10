package com.martinetherton;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class MultiHttpSecurityConfig {



    @Bean
    public UserDetailsService userDetailsService() throws Exception {
        // ensure the passwords are encoded properly
        User.UserBuilder users = User.withDefaultPasswordEncoder();
        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
        manager.createUser(users.username("user").password("password").roles("USER").build());
        manager.createUser(users.username("admin").password("password").roles("USER","ADMIN").build());
        return manager;
    }

    @Configuration
    @Order(1)
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {

        @Autowired
        private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

        @Autowired
        private MySavedRequestAwareAuthenticationSuccessHandler
                authenticationSuccessHandler;

        protected void configure(HttpSecurity http) throws Exception {

            http
                    .csrf().disable()
                    .exceptionHandling()
                    .authenticationEntryPoint(restAuthenticationEntryPoint)
                    .and()
                    .authorizeRequests()
                    .antMatchers("/user").authenticated()
                    .and()
                    .formLogin()
                    .successHandler(authenticationSuccessHandler)
                    .failureHandler(new SimpleUrlAuthenticationFailureHandler())
                    .and()
                    .logout();


//            http
//                    .httpBasic().and()
//                    .authorizeRequests()
//                    .antMatchers("/index.html", "/", "/home", "/login").permitAll()
//                    .anyRequest().authenticated()
//                    .and()
//                    .csrf()
//                    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());

//            http
//                        .authorizeRequests()
//                        .antMatchers("/css/**", "/home", "/", "/hello", "/routeAdvicePage"  )
//
//                    .permitAll()
//                        .anyRequest().authenticated()
//                    .and()
//                    .formLogin()
//                    .loginPage("/login")
//                        .and()
//                        .httpBasic().disable();


//            http
//
//                    .antMatcher("/api/**")
//                    .authorizeRequests()
//                    .anyRequest().hasRole("USER")
//                    .and()
//                    .httpBasic().disable();

//            http
//
//
//                    .authorizeRequests()
//                    .antMatchers("/api/**").authenticated()
//                    .and()
//                    .httpBasic();

        }
    }

//        @Configuration
//        public static class FormLoginWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
//
//            @Override
//            protected void configure(HttpSecurity http) throws Exception {
//                http
//                         .authorizeRequests()
//                        .antMatchers("/css/**", "/home", "/", "/hello", "/routeAdvicePage"    ).permitAll()
//                        .anyRequest().authenticated()
//                        .and()
//                        .formLogin()
//                        .loginPage("/login")
//                        .permitAll()
//                        .and()
//                        .logout()
//                        .permitAll();
//            }
//        }

}
