# C言語を勉強したときのメモ

## フォーマット指定子

### %c = char

1文字を出力

### %s = 文字列

文字列を出力

### %d = int, short

整数を10進数で出力

### %f = float

実数を出力

### %lf = double

倍精度実数を出力

##  構造体とは

C言語を勉強していた中でのメモ。

https://www.nnn.ed.nico/courses/101/chapters/848

### 変数

値を入れたりする。一個の値しか入れることができない。

### 配列

同じ型の値を複数格納することができる。入れる値は全て同じ型のものしか入れられな
い。

### 構造体

値を入れたりする変数の種類のこと。変数の方を組み合わせて新しい型を作る。

### 普通の変数との比較

int 型と変数定義 <=> 構造体と変数定義

型はあくまでも大きさの概念

名前をつけて宣言することで、実体（インスタンス）が生成される。

構造体は型宣言のあと、変数宣言で利用可能

### サンプル

```
struct test{
    int x;    /* メンバーx */
    double y; /* メンバーy */
};
```

## 共用体

共用体は格納場所を共有するので、xとyで使えるのは1つ

### サンプル

```
union sxy{
    int x;
    double y;
}s;
```

二つのメンバは記憶域を共有

## 構造体と共用体を組み合わせる

### サンプル

```
//short int = 2進数で16桁まで表せる箱。
struct WORDREGS{
    unsigned short int ax;
};

//char = 8桁までしか表せられない。
//charが2つなので、16桁まで表せられる。
struct BYTEREGS{
    unsigned char al;
    unsigned char ah;
};

union REGS{
    struct WORDREGS; x;
    struct BYTEREGS h;
};
```