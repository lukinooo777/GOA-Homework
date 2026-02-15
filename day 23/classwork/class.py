# 1
def perform_operations(x, y):
    sum_result = x + y
    difference = x - y
    product = x * y
    floor_division = x // y 

    print(f"ჯამი: {sum_result}")
    print(f"განსხვავება: {difference}")
    print(f"გრავიტაციული გამყოფი: {product}")
    print(f"სრულად გაყოფა: {floor_division}")

perform_operations(10, 3)

#2
def greet_user(name):
    print(f"გამარჯობა {name}, კეთილი იყოს შენი მობრძანება, გისურვებ წარმატებას და წინ სვლას")

greet_user("ლუკა")

#3

def love_letter(name):
    letter = f"ძვირფასო {name}, მინდა, რომ იცოდე, რამდენად მნიშვნელოვანია შენი არსებობა ჩემი ცხოვრებაში. შენი ღიმილი გამიხარებს ყველა დღეს და შენი სითბო თბილად ავსებს ჩემს გრძნობებს. შენ ხარ ჩემი მზე და ჩემი შუქი, რომელიც გზას მიჩვენებს, როცა მჭირდები. შენთან ერთად ყოველი დღე მეტად საყვარელია და ცხოვრება გრძელი და ბედნიერი ხდება."

    print(f"{letter}\nსიყვარულით {name}")

love_letter("ნატალია")