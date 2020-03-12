#include <stdio.h>

int main(int argc) {
    // 20 / (argc - 1) の結果を表示する（argcはプログラムに渡された引数の個数）
    printf("%d\\n", 20 / (argc - 1));
    return 0;
}
