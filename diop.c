#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

int main()
{

//definição de variáveis globais
char name[100];
char level[25];

//armazenar nome do heroi
printf("\nQual o nome do seu heroi? ");
scanf("%s", name);
printf("O nome escolhido foi: %s\n", name);

//uma maneira de definir a experiencia do heroi de forma randomica
//sem depender de um input do usuário
printf("A quantidade de experiencia do seu heroi sera determinada: ");
srand(time(NULL));
int heroExp = rand() % 15001;
printf("%d", heroExp);

//estrutura de decisiões para determinar o nivel do heroi
//baseado no número aleatorio gerado acima
if (heroExp < 1000) {
        strcpy(level, "Ferro");
    } else if (heroExp >= 1001 && heroExp <= 2000) {
        strcpy(level, "Bronze");
    } else if (heroExp >= 2001 && heroExp <= 5000) {
        strcpy(level, "Prata");
    } else if (heroExp >= 5001 && heroExp <= 7000) {
        strcpy(level, "Ouro");
    } else if (heroExp >= 7001 && heroExp <= 8000) {
        strcpy(level, "Platina");
    } else if (heroExp >= 8001 && heroExp <= 9000) {
        strcpy(level, "Ascendente");
    } else if (heroExp >= 9001 && heroExp <= 10000) {
        strcpy(level, "Imortal");
    } else if (heroExp >= 10001) {
        strcpy(level, "Radiante");
    }

//saida pedida no desafio
printf("\nO Heroi de nome %s esta no nivel %s\n", name, level);

return 0;
}