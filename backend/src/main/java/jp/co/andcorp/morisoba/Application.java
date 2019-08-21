package jp.co.andcorp.morisoba;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * アプリケーションクラス.
 */
@SpringBootApplication
public class Application {

    /**
     * アプリケーションのメインメソッド.
     *
     * @param args コマンドライン引数
     */
    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
