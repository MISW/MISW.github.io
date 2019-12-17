#include <stdio.h>
#include <stdlib.h>

// ゼロ除算をチェックして割り算する関数
int my_div(int a, int b) {
    if (b == 0) {
        fprintf(stderr, "Zero division error\\n");
        exit(1);
    }
    return a / b;
}

int main(void) {
    // 20 / 4 の結果を表示する
    printf("%d\\n", my_div(20, 4));
    return 0;
}
