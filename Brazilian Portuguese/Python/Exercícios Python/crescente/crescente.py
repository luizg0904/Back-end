print("Digite dois numeros:")
x = int(input())
y = int(input())

while True:
    if x < y:
        print("CRESCENTE!")
    else:
        print("DECRESCENTE!")

    print("Deseja continuar? (s/n)")
    response = input().lower()

    if response == 'n':
        break

    print("Digite outros dois numeros:")
    x = int(input())
    y = int(input())