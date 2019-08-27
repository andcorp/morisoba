package jp.co.andcorp.morisoba;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * アプリケーションクラス.
 */
// Spring Bootのためにコンストラクタを使用可能にしておく。
// CHECKSTYLE:OFF HideUtilityClassConstructorCheck
@SpringBootApplication
public class Application {
    // CHECKSTYLE:ON HideUtilityClassConstructorCheck

    /**
     * アプリケーションのメインメソッド.
     *
     * @param args コマンドライン引数
     */
    public static void main(final String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
