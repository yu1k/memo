#include <stdio.h>

//型を定義した記述。この型を基に変数宣言を行う
struct test{
    int fx;    /* メンバーx */
    double fy; /* メンバーy */
};

int main(void){
    struct test s;
    s.x = 10;
    s.y = 3.14;
    printf("res = %lf\n", a);
    return 0;
}